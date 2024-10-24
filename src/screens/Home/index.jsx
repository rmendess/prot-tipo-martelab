import React, { useState } from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/Buttons/SearchBar';
import Category from '../../components/Category';
import RegisterUser from '../RegisterUser/index';
import Modal from '../../components/Modal';
import './styles.css';

const Home = () => {
  const [showPatientOptions, setShowPatientOptions] = useState(false); // Controla a exibição dos botões
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla a abertura do modal

  const handleSearch = () => {
    setShowPatientOptions(true); // Exibe os botões após a busca
  };

  const openModal = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div className="home-container">
      <Header />
      <div className="search-wrapper">
        <SearchBar onSearch={handleSearch} />
      </div>

      {showPatientOptions && (
        <div className="patient-options">
          <button className="patient-button" onClick={openModal}>
            Dados Cadastrais
          </button>
          <button className="patient-button">Histórico</button>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <RegisterUser />
      </Modal>
      {isModalOpen === false &&
      <Category /> }
    </div>
  );
};

export default Home;
