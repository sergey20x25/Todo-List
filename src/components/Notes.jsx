/* eslint-disable react/prop-types */
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component={ListGroup}>
    {notes.map((note) => (
      <CSSTransition
        key={note.id}
        classNames="note"
        timeout={800}
      >
        <ListGroup.Item className="note">
          <div>
            <strong>{note.title}</strong>
            <small>{new Date(note.date).toLocaleString()}</small>
          </div>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onRemove(note.id)}
          >
            &times;
          </Button>
        </ListGroup.Item>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
