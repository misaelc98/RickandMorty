import React, { useState } from "react";
import Form from "../../Form/Form.jsx";
import styles from "./Landing.module.css";

function Landing({ login }) {



  return (
  
  <div className={styles.container}>
  
      <div className={styles.formContainer}>
  
        <Form login={login} />
  
      </div>
  
    </div>
  );
}

export default Landing;
