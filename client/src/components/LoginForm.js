import React, { useState } from 'react';
    import axios from 'axios';

    function LoginForm() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/users/login', {
            email,
            password,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <h2>Connexion</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Se connecter</button>
        </form>
      );
    }

    export default LoginForm;
