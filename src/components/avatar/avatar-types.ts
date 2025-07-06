export type AvatarSize = 'small' | 'regular' | 'large';

export interface AvatarProps {
  src: string;
  alt: string;
  $size: AvatarSize;
  onClick?: () => void;
}

export type AvatarSizesType = Record<AvatarSize, number>;