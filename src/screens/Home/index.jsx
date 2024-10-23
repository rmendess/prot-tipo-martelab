import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/Buttons/SearchBar';
import Category from '../../components/Category';
import './styles.css';


const Home = () => {
  
  const handleSearch = (query) => {
    alert(`Paciente buscado: ${query}`);
  };

  return (
    <div className="home-container">
      <Header />
      <div className="search-wrapper">
        <SearchBar onSearch={handleSearch} />
 
      </div>
      <Category/>
    </div>
  );
};


export default Home
