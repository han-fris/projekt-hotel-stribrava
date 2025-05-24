import { Header } from '../../components/Header/Header';
import { ListRoom } from '../../components/ListRoom/ListRoom';
import { RoomDetail } from '../../components/RoomDetail/RoomDetail';
import { Footer } from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [rooms, setRooms] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  useEffect(() => {
    const fetchedRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const responseData = await response.json();
      setRooms(responseData.data);
      setSelectedRoomId(responseData.data[0].id);
    };
    fetchedRooms();
  }, []);

  console.log(selectedRoomId);

  return (
    <>
      <Header />
      <ListRoom rooms={rooms} />
      {rooms !== null ? (
        <RoomDetail
          selectedRoom={rooms.find((room) => room.id === selectedRoomId)}
        />
      ) : (
        <>načítá se toooo</>
      )}

      <Footer />
    </>
  );
};
