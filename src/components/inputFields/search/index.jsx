import React from 'react';
import searchImg from '../../../assets/img/search.svg'
import './search.css'; 

const Search = ({ placeholder, className, onSearch,search }) => {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className={`search-component ${className}`}>
     <img src={searchImg} alt="location icon" />
      <input 
        type="text" 
        placeholder={placeholder} 
        value={query} 
        onChange={handleInputChange} 
      /> 
      <button onClick={handleSearchClick}>{search}</button>
    </div>
  );
};

export default Search;
