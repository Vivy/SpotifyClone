import { useEffect } from 'react';
import { useStateProvider } from '../../utils/stateprovider';
import * as S from './body.style';
import { AiFillClockCircle } from 'react-icons/ai';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';

const Body = ({ headerBackground }) => {
  const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith('<a')
          ? ''
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);

  const msToMinutes = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '' + seconds);
  };
  return (
    <S.Body headerBackground={headerBackground}>
      {selectedPlaylist && (
        <>
          <S.Playlist>
            <S.Image>
              <img src={selectedPlaylist.image} alt='selected PLaylist' />
            </S.Image>
            <S.Details>
              <S.Type>PLAYLIST</S.Type>
              <S.Title>{selectedPlaylist.name}</S.Title>
              <S.Description>{selectedPlaylist.description}</S.Description>
            </S.Details>
          </S.Playlist>
          <S.List>
            <S.HeaderRow>
              <S.Col>
                <span>#</span>
              </S.Col>
              <S.Col>
                <span>TITLE</span>
              </S.Col>
              <S.Col>
                <span>ALBUM</span>
              </S.Col>
              <S.Col>
                <span>
                  <AiFillClockCircle />
                </span>
              </S.Col>
            </S.HeaderRow>
            <S.Tracks>
              {selectedPlaylist.tracks.map(
                (
                  {
                    id,
                    name,
                    artists,
                    image,
                    duration,
                    album,
                    context_uri,
                    track_number,
                  },
                  index
                ) => {
                  return (
                    <S.Row>
                      <S.Col>
                        <span>{index + 1}</span>
                      </S.Col>
                      <S.ColDetail>
                        <S.Image>
                          <img src={image} alt='track' />
                        </S.Image>
                        <S.Info>
                          <S.Name>{name}</S.Name>
                          <span>{artists}</span>
                        </S.Info>
                      </S.ColDetail>
                      <S.Col>
                        <span>{album}</span>
                      </S.Col>
                      <S.Col>
                        <span>{msToMinutes(duration)}</span>
                      </S.Col>
                    </S.Row>
                  );
                }
              )}
            </S.Tracks>
          </S.List>
        </>
      )}
    </S.Body>
  );
};

export default Body;
