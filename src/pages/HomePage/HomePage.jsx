import { Header } from '../Header/Header';
import { ListRoom } from '../ListRoom/ListRoom';
import { RoomDetail } from '../RoomDetail/RoomDetail';
import { Footer } from '../Footer/Footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <ListRoom />
      <RoomDetail />
      <Footer />
    </>
  );
};
