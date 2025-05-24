import { useState } from 'react';

export const Form = ({ selectedRoom }) => {
  const [dateFrom, setDateFrom] = useState();

  return (
    <form>
      <div className="form-fields">
        <label htmlFor="date-from" className="field-label">
          Od:
        </label>
        <input id="date-from" className="field-input" type="date" />

        <label htmlFor="date-till" className="field-label">
          Do:
        </label>
        <input id="date-till" className="field-input" type="date" />

        <label htmlFor="people" className="field-label">
          Počet osob:
        </label>
        <input
          type="number"
          min="0"
          max="4"
          id="people"
          className="field-input"
        />

        <label htmlFor="food" className="field-label">
          Stravování:
        </label>
        <select id="food" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="animal" className="field-label">
          Domácí mazlíček:
        </label>
        <input id="animal" className="field-input" type="checkbox" />

        <label htmlFor="kids" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input id="kids" className="field-input" type="checkbox" />

        <label htmlFor="disability" className="field-label">
          Bezbariérový přístup:
        </label>
        <input id="disability" className="field-input" type="checkbox" />

        <label htmlFor="email" className="field-label">
          Email:
        </label>
        <input id="email" className="field-input" type="email" />

        <label htmlFor="tel" className="field-label">
          Telefon:
        </label>
        <input id="tel" className="field-input" type="tel" />
      </div>
      <button className="wide">Submit</button>
    </form>
  );
};
