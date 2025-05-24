import { Header } from '../../components/Header/Header';
import { ListRoom } from '../../components/ListRoom/ListRoom';
import { RoomDetail } from '../../components/RoomDetail/RoomDetail';
import { Footer } from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = '';

  useEffect(() => {
    const fetchedRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const responseData = await response.json();
      setRooms([responseData.data]);
    };
    fetchedRooms();
  }, []);

  console.log(rooms);

  return (
    <>
      <Header />
      <ListRoom />
      <RoomDetail />
      <Footer />
    </>
  );
};
