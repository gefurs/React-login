import { useState } from "react";

import './scss/App.scss';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`);
  };


  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleFormSubmit}>
          <h2 className="form-title">Iniciar sesión</h2>
          <label>Correo</label>
          <input type="email" placeholder="Correo" value={email} onChange={handleEmailChange} />
          <label>Contraseña</label>
          <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
