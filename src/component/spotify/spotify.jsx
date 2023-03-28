import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import * as S from './spotify.style';
import Body from '../body/body';
import Footer from '../footer/footer';

const Spotify = () => {
  return (
    <S.Spotify>
      <S.SpotifyBody>
        <Sidebar />
        <S.Body>
          <Navbar />
          <S.BodyContent>
            <Body />
          </S.BodyContent>
        </S.Body>
      </S.SpotifyBody>
      <S.Footer>
        <Footer />
      </S.Footer>
    </S.Spotify>
  );
};

export default Spotify;
