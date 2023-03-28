import styled from 'styled-components';

export const Sidebar = styled.div`
  background-color: black;
  color:#b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const TopLinks = styled.div`
  display: flex;
  flex-direction:column;
`

export const Logo = styled.div`
  text-align: center;
  padding: 1rem 0;
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`
export const Li = styled.li`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover{
    color: white;
  }
`
