import React from 'react';
import Image from '../image/image';
import * as S from './login.style';

const Login = () => {
  const handleClick = () => {
    const clientID = 'bac9ac7b71d44be1b2f45ed16096fbf3';
    const redirectURL = 'http://127.0.0.1:5173/';
    const apiURL = 'https://accounts.spotify.com/authorize';
    const scope = [
      'user-read-email',
      ' user-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played',
    ];
    window.location.href = `${apiURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <S.Login>
      <Image
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
        alt='logo Black'
        height
      />
      <S.Button onClick={handleClick}>Connect to Spotify</S.Button>
    </S.Login>
  );
};

export default Login;
