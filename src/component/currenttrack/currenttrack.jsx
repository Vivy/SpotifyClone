import axios from 'axios';
import { useStateProvider } from '../../utils/stateprovider';
import * as S from './currenttrack.style';
import { useEffect } from 'react';

const CurrentTrack = () => {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response, 'testttttt');
      if (response.data !== '') {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <S.CurrentTrack>
      {currentlyPlaying && (
        <S.Track>
          <S.TrackImage>
            <img src={currentlyPlaying.image} alt='currentlyPlaying' />
          </S.TrackImage>
          <S.TrackInfo>
            <S.TrackInfoTrackName>{currentlyPlaying.name}</S.TrackInfoTrackName>
            <S.TrackInfoTrackArtists>
              {currentlyPlaying.artists.join(', ')}
            </S.TrackInfoTrackArtists>
          </S.TrackInfo>
        </S.Track>
      )}
    </S.CurrentTrack>
  );
};

export default CurrentTrack;
