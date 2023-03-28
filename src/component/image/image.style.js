import styled from 'styled-components';

const getSize = ({ $size }) => $size ? `max-inline-size: ${$size}%;` : ''
const getHeight = ({ height }) => height ? `height: ${height}vh; ` : ''

export const Image = styled.img`
  ${getHeight}
  ${getSize}
  ${({ pad }) => pad ? `padding: ${pad / 16}rem;` : ''}
  ${({ $block }) => $block ? `block-size:auto;` : ''}
`
