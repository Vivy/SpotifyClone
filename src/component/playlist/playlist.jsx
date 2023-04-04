import { useEffect } from 'react';
import * as S from './playlist.style';
import { useStateProvider } from '../../utils/stateprovider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';

const PlayList = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <S.PlayList>
      <S.Ul>
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
        {playlists.map(({ name, id }) => {
          return <S.Li key={id}>{name}</S.Li>;
        })}
      </S.Ul>
    </S.PlayList>
  );
};

export default PlayList;
