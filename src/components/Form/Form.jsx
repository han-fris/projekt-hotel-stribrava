import { useState } from 'react';

export const Form = ({ selectedRoomId }) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTill, setDateTill] = useState('');
  const [people, setPeople] = useState(1);
  const [food, setFood] = useState('');
  const [animal, setAnimal] = useState(false);
  const [kids, setKids] = useState(false);
  const [disability, setDisability] = useState(false);
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        roomId: selectedRoomId,
        dateFrom,
        dateTill,
        people,
        food,
        animal,
        kids,
        disability,
        email,
        tel,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="date-from" className="field-label">
          Od:
        </label>
        <input
          id="date-from"
          className="field-input"
          type="date"
          onChange={(e) => setDateFrom(e.target.value)}
        />

        <label htmlFor="date-till" className="field-label">
          Do:
        </label>
        <input
          id="date-till"
          className="field-input"
          type="date"
          onChange={(e) => setDateTill(e.target.value)}
        />

        <label htmlFor="people" className="field-label">
          Počet osob:
        </label>
        <input
          type="number"
          min="0"
          max="4"
          id="people"
          className="field-input"
          onChange={(e) => setPeople(e.target.value)}
        />

        <label htmlFor="food" className="field-label">
          Stravování:
        </label>
        <select
          id="food"
          className="field-input"
          onChange={(e) => setFood(e.target.value)}
        >
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="animal" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          id="animal"
          className="field-input"
          type="checkbox"
          onChange={(e) => setAnimal(e.target.value)}
        />

        <label htmlFor="kids" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          id="kids"
          className="field-input"
          type="checkbox"
          onChange={(e) => setKids(e.target.value)}
        />

        <label htmlFor="disability" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          id="disability"
          className="field-input"
          type="checkbox"
          onChange={(e) => setDisability(e.target.value)}
        />

        <label htmlFor="email" className="field-label">
          E-mail:
        </label>
        <input
          id="email"
          className="field-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="tel" className="field-label">
          Telefon:
        </label>
        <input
          id="tel"
          className="field-input"
          type="tel"
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <button className="wide">Submit</button>
    </form>
  );
};
