// File: /mi-app-estudio/web/src/pages/index.tsx

import React from 'react';
import Navbar from '../components/Navbar';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Bienvenido a la aplicación de estudio</h1>
      <p>Encuentra y únete a grupos de estudio para el aprendizaje colaborativo.</p>
    </div>
  );
};

export default IndexPage;