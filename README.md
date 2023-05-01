# Example-App

## Backend Part:

Purely done in python-django

### GET API to fetch Institute Data
Params : 
1. country
2. Page

```
http://localhost:8000/exampleapp/universities/?country=India&page=21
```

<details>
 <summary>Sample Output:</summary>

 ```
 {
    "count": 814,
    "next": "http://localhost:8000/exampleapp/universities/?country=India&page=22",
    "previous": "http://localhost:8000/exampleapp/universities/?country=India&page=20",
    "results": [
        {
            "alpha_two_code": "IN",
            "name": "Kurukshetra University",
            "web_pages": [
                "http://www.kukinfo.com/"
            ],
            "domains": [
                "kukinfo.com"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "Kumaraguru College of Technology",
            "web_pages": [
                "http://www.kct.ac.in/"
            ],
            "domains": [
                "kct.ac.in"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "Kumaun University",
            "web_pages": [
                "http://www.kumaununiversity.org/"
            ],
            "domains": [
                "kumaununiversity.org"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "Kuvempu University",
            "web_pages": [
                "http://www.kuvempu.ac.in/"
            ],
            "domains": [
                "kuvempu.ac.in"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "Kakatiya University",
            "web_pages": [
                "http://www.kuwarangal.com/"
            ],
            "domains": [
                "kuwarangal.com"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "L.D.College of Engineering",
            "web_pages": [
                "http://www.ldceahd.org/"
            ],
            "domains": [
                "ldceahd.org"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "Lakshmibai National Institute of Physical Education",
            "web_pages": [
                "http://www.lnipe.edu/"
            ],
            "domains": [
                "lnipe.edu"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "Lalit Narayan Mithila University",
            "web_pages": [
                "http://lnmu.bih.nic.in/"
            ],
            "domains": [
                "lnmu.bih.nic.in"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "University of Lucknow",
            "web_pages": [
                "http://www.lucknowuniv.org/"
            ],
            "domains": [
                "lucknowuniv.org"
            ],
            "state-province": null,
            "country": "India"
        },
        {
            "alpha_two_code": "IN",
            "name": "Mar Athanasios College for Advanced Studies",
            "web_pages": [
                "http://www.macfast.org/"
            ],
            "domains": [
                "macfast.org"
            ],
            "state-province": null,
            "country": "India"
        }
    ]
}
```
</details>

## Frontend

🚧 Under Progress!
