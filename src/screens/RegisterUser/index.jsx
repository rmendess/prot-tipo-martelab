import { useState } from 'react';
import React from 'react'
import './styles.css'

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    cpf: '',
    celular: '',
    sexo: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    uf: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('pacienteData', JSON.stringify(formData));
    alert('Dados salvos com sucesso!');
  };
  
  

  return (
    <div className="form-container">
      <p className='texto'>Dados Cadastrais</p>
      <div className='center'> 
      <form className="form-grid" >
        <div className="form-group">
          <label>Nome completo *</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Data Nascimento *</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>CPF *</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Celular *</label>
          <input
            type="text"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Sexo</label>
          <input
            type="text"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>CEP</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Logradouro</label>
          <input
            type="text"
            name="logradouro"
            value={formData.logradouro}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Número</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Complemento</label>
          <input
            type="text"
            name="complemento"
            value={formData.complemento}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Bairro</label>
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Estado</label>
          <input
            type="text"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>UF</label>
          <input
            type="text"
            name="uf"
            value={formData.uf}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>E-mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

       
      </form>
      </div>
      <div style={{
        width:'100%',
        display:'flex',
        justifyContent:'center'
      }}> 
      <button type="button" onClick={handleSave} className="save-button">
          Salvar
        </button>
        </div>
    </div>
  );
};
export default RegisterUser
