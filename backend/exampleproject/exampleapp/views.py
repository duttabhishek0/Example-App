from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import api_view

import requests

@api_view(['GET'])
def universities_by_country(request):
    # Get country from query parameters
    country = request.GET.get('country')

    # Construct API URL based on country parameter
    url = f"http://universities.hipolabs.com/search?country={country}"
    response = requests.get(url)

    # Check for successful response
    if response.status_code == 200:
        # Parse response JSON
        universities = response.json()

        # Use Django pagination to limit results
        paginator = PageNumberPagination()
        paginator.page_size = 10
        paginated_results = paginator.paginate_queryset(universities, request)

        # Return paginated response
        return paginator.get_paginated_response(paginated_results)

    # Return empty response if no country parameter provided or error occurred
    return Response([])
