import { RoomDescription } from '../RoomDescription/RoomDescription';
import { Form } from '../Form/Form';
import { useState } from 'react';

export const RoomDetail = ({ selectedRoom }) => {
  return (
    <section className="light">
      <div className="container">
        <h2>{selectedRoom.name}</h2>
        <div className="columns-2">
          <RoomDescription selectedRoom={selectedRoom} />
          <Form />
        </div>
      </div>
    </section>
  );
};
