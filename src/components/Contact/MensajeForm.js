import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default ({ onClick, status }) => {
  

  return (    

    <div className="my-container__h2-form">
      {status === 0 ? 
        <Alert className="mensaje-alert" variant="transparent">          
          <p className="loading-msj">Loading...</p>            
        </Alert>
        
       : status < 200 || status > 299 ?
       <Alert
          className="mensaje-alert"
          variant="danger"
          onClick={onClick}
          
        >
          <Alert.Heading>El mensaje NO se pudo enviar</Alert.Heading>
          <p ></p>
         
          <Button variant="light" className="vvrr">
            Close
          </Button>
        </Alert>
        
        : 
        <Alert
          className="mensaje-alert"
          variant="success"
          onClick={onClick}
          
        >
          <Alert.Heading>Mensaje Enviado Correctamente!</Alert.Heading>
          <p className="vv">Gracias, vuelvas prontos!</p>
          <Button variant="light" className="vvrr">
            Close
          </Button>
        </Alert>
      }
    </div>
   
  );
};
