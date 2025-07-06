import { AvatarSizes } from "./avatar-constants";
import type { AvatarProps } from "./avatar-types";
import * as S from "./avatar.styled";

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  $size = "small",
  onClick,
}) => {
  const size = AvatarSizes[$size];

  return (
    <S.AvatarImage
      src={src}
      alt={alt}
      $size={size}
      $isInteractive={!!onClick}
      onClick={onClick}
    />
  );
};

export default Avatar;
