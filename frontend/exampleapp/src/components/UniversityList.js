import React, { useEffect, useState } from 'react';
import './UniversityList.css';
import axios from 'axios';

const UniversityList = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState([]);


  const searchUniversities = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/exampleapp/universities/?country=${country}&page=${page}`
      );
      if(response.data.results.length === 0){
        setUniversities([])
        setTotalPages(0)
        alert("No Data")
      }
      setUniversities(response.data.results);
      setTotalPages(Math.ceil((response.data.count)/10));
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };


  const handleSearch = () => {
    setCurrentPage(1);
    searchUniversities(1);
  };

  
  const isFavorite = (university) => {
    return favorites.includes(university);
  };


  const handlePageChange = (currPage) => {
    console.log(currPage);
    setCurrentPage(currPage);
    searchUniversities(currPage);
  };

   useEffect(() => {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      setFavorites(JSON.parse(savedFavourites));
    }
  }, []);

  const handleFavourite = (univ) => {
    const newFavourites = [...favorites, univ];
    setFavorites(newFavourites);
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
    alert("Saved to favourites")
  };

  useEffect(() => {
    // Store the list of favorite universities in the browser's local storage
    localStorage.setItem('favoriteUniversities', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginLeft: '40px', marginRight: '40px'}}>
        <input
          type="text"
          placeholder="Enter Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{ marginTop: '20px', alignContent: 'center', marginRight: '40px', marginLeft: '50px'}}>
        {loading ? (
          <div style={{alignItems: 'center'}}>Loading...</div>
        ) : (
          universities.map((university) => (
            <div
              key={university.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                margin: '10px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ flex: '1' }}>
                <h3 style={{ marginBottom: '5px' }}>{university.name}</h3>
                <a href={university.web_pages[0]}>{university.web_pages[0]}</a>
              </div>
              <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', width: "100px", height: "50px", }}
            onClick={() => handleFavourite(university)}
          >
            {favorites.includes(university) ? '❤️' : '♡'}
          </button>
            </div>
          ))
        )}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
  <div style={{marginBottom: '40px'}}>
    <button
      style={{
        padding: '5px 10px',
        margin: '0 5px',
        backgroundColor: currentPage === 1 ? '#FF1493' : '#f5f5f5',
        color: currentPage === 1 ? '#fff' : '#000',
        border: 'none',
      }}
      onClick={() => handlePageChange(1)}
    >
      1
    </button>
    {currentPage > 4 && <span>...</span>}
    {Array.from({ length: totalPages }, (_, i) => i + 1)
      .filter((pageNumber) => Math.abs(pageNumber - currentPage) <= 2 || pageNumber === 1 || pageNumber === totalPages)
      .map((pageNumber) => (
        <button
          key={pageNumber}
          style={{
            padding: '5px 10px',
            margin: '0 5px',
            backgroundColor: currentPage === pageNumber ? '#FF1493' : '#f5f5f5',
            color: currentPage === pageNumber ? '#fff' : '#000',
            border: 'none',
          }}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    {currentPage < totalPages - 3 && <span>...</span>}
    {totalPages > 1 && (
      <button
        style={{
          padding: '5px 10px',
          margin: '0 5px',
          backgroundColor: currentPage === totalPages ? '#FF1493' : '#f5f5f5',
          color: currentPage === totalPages ? '#fff' : '#000',
          border: 'none',
        }}
        onClick={() => handlePageChange(currentPage)}
      >
        {totalPages}
      </button>
    )}
  </div>
  <div style={{ marginLeft: '20px' }}>
    <input
      type="number"
      id="pageNu"
      placeholder={`Go to page (1 - ${totalPages})`}
      min="1"
      max={totalPages}
      value={currentPage}
      onChange={(e) => setCurrentPage(Number(e.target.value))}
      style={{ marginRight: '10px' }}
      onClick={(e) => handlePageChange(e.target.value)}
    />
  </div>
</div>

    </div>
  )
};

export default UniversityList;
