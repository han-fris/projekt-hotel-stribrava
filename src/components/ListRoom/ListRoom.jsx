import { Room } from '../Room/Room';

export const ListRoom = ({ rooms }) => {
  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
          <div className="cards-row">
            {rooms?.map((room) => (
              <Room
                key={room.id}
                picture={room.img}
                name={room.name}
                price={room.price}
                alt={room.alt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
