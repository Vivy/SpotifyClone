import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s easi-in-out;
  background-color: none;
`

export const SearchBar = styled.div`
  background-color: white;
  padding: 0.4rem 1rem;
    width: 30%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none
      }
    }
  `

export const Avatar = styled.div`
  background-color: black;
  padding: 0.3rem 0.4rem;
  padding-right: 1rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: white;
    font-weight: bold;

    svg {
      font-size: 1.3rem;
      background-color: #282828;
      padding: .2rem;
      border-radius: 1rem;
      color: #c7c5c5;
    }
  }
`
