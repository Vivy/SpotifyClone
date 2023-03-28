import { useEffect } from 'react';
import Login from './component/login/login';
import Spotify from './component/spotify/spotify';
import { reducerCases } from './utils/constants';
import { useStateProvider } from './utils/stateprovider';

const App = () => {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return <div>{token ? <Spotify /> : <Login />}</div>;
};

export default App;
