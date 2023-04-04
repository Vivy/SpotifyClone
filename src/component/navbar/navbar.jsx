import * as S from './navbar.style';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useStateProvider } from '../../utils/stateprovider';

const Navbar = () => {
  const [{ userInfo }] = useStateProvider();
  console.log(userInfo);
  return (
    <S.Navbar>
      <S.SearchBar>
        <FaSearch />
        <input type='text' placeholder='Artists, songs, or podcasts' />
      </S.SearchBar>
      <S.Avatar>
        <a href='£'>
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </S.Avatar>
    </S.Navbar>
  );
};

export default Navbar;
