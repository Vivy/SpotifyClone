import styled from 'styled-components';

export const Spotify = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
`
export const SpotifyBody = styled.div`
  display: grid;
  grid-template-columns: 15vw 85vw;
  height: 100%;
  width: 100%;
  background: linear-gradient(transparent, rgba(0,0,0,1));
  background-color: rgb(32,87,100);
  `

export const Body = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: .7rem;
    &-thumb {
      background-color: rgba(255,255,255, 0.6);
    }
  }
`

export const BodyContent = styled.div``

export const Footer = styled.div``
