import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import AlertBootstrap from 'react-bootstrap/Alert';
import { AlertContext } from '../context/alert/alertContext';


export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350,
      }}
      classNames="alert"
      mountOnEnter
      unmountOnExit
    >
      <AlertBootstrap
        variant={alert.type || 'warning'}
        dismissible
        onClose={hide}
      >
        <strong>warning! </strong>
        {alert.text}
      </AlertBootstrap>
    </CSSTransition>
  );
};
