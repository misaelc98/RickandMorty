import React, { useState } from "react";
import Form from "../../Form/Form.jsx";
import styles from "./Landing.module.css"; // Asegúrate de usar 'styles' en lugar de 'style'

function Landing({ login }) {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className={styles.container}> {/* Utiliza 'styles' en lugar de 'style' */}
      {!showForm && (
        <div className={styles.loginButton} onClick={handleButtonClick}>
        <span>INGRESAR</span>
        
      </div>
      )}
    
      {showForm && (
        <div className={styles.formContainer}> {/* Utiliza 'styles' en lugar de 'style' */}
          <Form login={login} />
        </div>
      )}
    </div>
  );
}

export default Landing;