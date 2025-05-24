import { Header } from '../../components/Header/Header';
import { ListRoom } from '../../components/ListRoom/ListRoom';
import { RoomDetail } from '../../components/RoomDetail/RoomDetail';
import { Footer } from '../../components/Footer/Footer';

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
