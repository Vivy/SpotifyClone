import styled from 'styled-components';

export const Body = styled.div`

`
export const Playlist = styled.div`
  margin: 0 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const Image = styled.div`
  img {height: 15rem;
  box-shadow: rgba(0,0,0,0.25) 0px 25px 50px -12px}
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #e0dede;
`
export const Type = styled.span``
export const Title = styled.h1`
  color: white;
  font-size: 4rem;
`
export const Description = styled.p``
export const List = styled.div`1

`
export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
  color: #dddcdc;
  margin: 1rem 0 0 0;
  position: sticky;
  top: 15vh;
  padding: 1rem 3rem;
  transition: 0.3s ease-in-out;
  background-color: ${({ headerBackground }) =>
    headerBackground ? "#000000dc" : "none"};
  `
export const Col = styled.div`
  display: flex;
  align-items: center;
  color: #dddcdc;
  `
export const ColDetail = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: #dddcdc;
  img {
    height: 40px;
    width: 40px;
  }
`
export const Tracks = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  `
export const Row = styled.div`
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
  &:hover {
    background-color: rgba( 0, 0 ,0, 0.7)
  }
  
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.span``
