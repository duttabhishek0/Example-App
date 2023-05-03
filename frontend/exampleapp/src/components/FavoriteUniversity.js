import React, { useState, useEffect } from "react";

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favourites"));
        if (favs) {
            setFavourites(favs);
        }
    }, []);

    return (
        <div style={{ marginTop: '20px',  marginLeft: '40px', marginRight: '40px' }}>
            <h2>My Favourites</h2>
            {favourites.length === 0 ? (
                <div> No favourites selected yet!</div>
            ) : (
                favourites.map((university) => (
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
                    </div>
                ))
            )}
        </div>
    )
};
export default Favourites;
