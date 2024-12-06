import React, { useState } from 'react';
    import axios from 'axios';

    function RegisterForm() {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [subscription, setSubscription] = useState('monthly');
      const [credits, setCredits] = useState(100);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/users/register', {
            username,
            email,
            password,
            subscription,
            credits,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <h2>Inscription</h2>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <select value={subscription} onChange={(e) => setSubscription(e.target.value)}>
            <option value="monthly">Mensuel</option>
            <option value="annual">Annuel</option>
          </select>
          <button type="submit">S'inscrire</button>
        </form>
      );
    }

    export default RegisterForm;
