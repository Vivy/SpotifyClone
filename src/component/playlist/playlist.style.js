import styled from 'styled-components';

export const PlayList = styled.div`
  height: 100%;
  overflow:hidden;
  `

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: 52vh;
  max-height:100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: .7rem;
    &-thumb {
      background-color: rgba(255,255,255, 0.6);
    }
  }
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
