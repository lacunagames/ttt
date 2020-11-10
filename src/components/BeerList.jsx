import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './BeerList.scss';

export default function BeerList() {
  const [searchStr, setSearchStr] = useState('');
  const beerList = useSelector((state) => state.beer.allBeers);
  const [filteredBeerList, setFilteredBeerList] = useState([]);

  useEffect(() => {
    const lowSearch = searchStr.toLowerCase();
    const newList = searchStr
      ? beerList.filter((beer) => {
          return (
            beer.name.toLowerCase().includes(lowSearch) ||
            beer.description.toLowerCase().includes(lowSearch)
          );
        })
      : beerList;
    setFilteredBeerList(newList);
  }, [beerList, searchStr]);

  return (
    <div className="BeerList">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input
              name="search"
              id="search"
              value={searchStr}
              placeholder="Search for beer name or description"
              onChange={(e) => setSearchStr(e.target.value)}
            />
          </div>
        </form>
        <ul>
          {filteredBeerList.map((beer) => (
            <li key={beer.id}>
              <img src={beer.image_url} alt={beer.name} />
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>{beer.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
