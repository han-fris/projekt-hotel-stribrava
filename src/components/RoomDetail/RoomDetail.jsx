import { Form } from '../Form/Form';
import { useState } from 'react';

export const RoomDetail = ({ selectedRoom }) => {
  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {selectedRoom.name}, {selectedRoom.price} kč na osobu za noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={selectedRoom.img} alt={selectedRoom.alt} />
            <p>{selectedRoom.info}</p>
          </div>
          <Form selectedRoom="selectedRoom" />
        </div>
      </div>
    </section>
  );
};
