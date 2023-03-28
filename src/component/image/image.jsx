import * as S from './image.style';

const Image = ({ src, alt, height, $size, pad, $block }) => {
  return (
    <S.Image
      src={src}
      alt={alt}
      height={height}
      $block={$block}
      $size={$size}
      pad={pad}
    />
  );
};

export default Image;
