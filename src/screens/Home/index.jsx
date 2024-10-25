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
  const [patients] = useState([
    { id: 1, name: 'Ana Silva', age: 30, condition: 'Hipertensão' },
    { id: 2, name: 'Ana  Morais', age: 45, condition: 'Diabetes' },
    { id: 3, name: 'Maria Oliveira', age: 60, condition: 'Artrite' },
  ]); // Lista de pacientes fictícios

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
      <div className="align">
        <div className="search-wrapper">
          <SearchBar onSearch={handleSearch} />
        </div>

        {showPatientOptions && (
          <div>
        
        <div className="patient-list">
              <h3>Dados do paciente</h3>
              <ul>
                  <li  className="patient-item">
                    <strong>Nome:</strong> Romulo | <strong>Idade:</strong> 18 |{' '}
                    <strong>Condição:</strong> Gripe
                  </li>
              </ul>
            </div>
            <div className="patient-options">
              <button className="patient-button" onClick={openModal}>
                Dados Cadastrais
              </button>
              <button className="patient-button">Histórico</button>
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <RegisterUser />
      </Modal>

      {!isModalOpen && <Category />}
    </div>
  );
};

export default Home;
