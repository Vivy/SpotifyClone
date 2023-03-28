import Image from '../image/image';
import * as S from './sidebar.style';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.TopLinks>
        <S.Logo>
          <Image
            src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
            alt='logo White'
            height='20'
            $size='80'
            $block
          />
        </S.Logo>
        <S.Ul>
          <S.Li>
            <MdHomeFilled />
            <span>Home</span>
          </S.Li>
          <S.Li>
            <MdSearch />
            <span>Search</span>
          </S.Li>
          <S.Li>
            <IoLibrary />
            <span>Your Library</span>
          </S.Li>
        </S.Ul>
      </S.TopLinks>
    </S.Sidebar>
  );
};

export default Sidebar;
