import React, { useState } from 'react';
import './styles.css';

const SearchButton = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(inputValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar Paciente"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>

    
  );
};

export default SearchButton;