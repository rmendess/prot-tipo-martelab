import React, { useState } from 'react';
import './styles.css';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar Paciente"
        value={inputValue}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
};

export default SearchBar;