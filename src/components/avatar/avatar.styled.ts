import styled from "styled-components";

export const AvatarImage = styled.img<{
  $size: number;
  $isInteractive?: boolean;
}>`
  border-radius: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  object-fit: cover;
  cursor: ${({ $isInteractive }) => ($isInteractive ? "pointer" : "default")};
  transition: transform 0.2s;
`;
