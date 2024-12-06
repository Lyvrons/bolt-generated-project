import React from 'react';
    import RegisterForm from '../components/RegisterForm';
    import LoginForm from '../components/LoginForm';

    function LandingPage() {
      return (
        <div>
          <h1>Bienvenue sur LeadPlus</h1>
          <p>Récupérez des leads via Google Maps</p>
          <RegisterForm />
          <LoginForm />
        </div>
      );
    }

    export default LandingPage;
