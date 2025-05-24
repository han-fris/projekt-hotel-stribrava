import { RoomDescription } from '../RoomDescription/RoomDescription';
import { Form } from '../Form/Form';

export const RoomDetail = () => {
  return (
    <section className="light">
      <div className="container">
        <h2>Heading</h2>
        <div className="columns-2">
          <RoomDescription />
          <Form />
        </div>
      </div>
    </section>
  );
};
