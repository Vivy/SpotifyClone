import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import * as S from './spotify.style';
import Body from '../body/body';
import Footer from '../footer/footer';
import { useEffect, useRef, useState } from 'react';
import { useStateProvider } from '../../utils/stateprovider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';

const Spotify = () => {
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyScroll = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const userInfo = {
        unerId: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <S.Spotify>
      <S.SpotifyBody>
        <Sidebar />
        <S.Body ref={bodyRef} onScroll={bodyScroll}>
          <Navbar navBackground={navBackground} />
          <S.BodyContent>
            <Body headerBackground={headerBackground} />
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
