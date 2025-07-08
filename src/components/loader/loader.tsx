import styled from "styled-components";

type LoaderProps = {
  $size?: number;
};

const Loader: React.FC<LoaderProps> = ({ $size }) => {
  return <LoaderStyle $size={$size} />;
};

export default Loader;

const LoaderStyle = styled.div<{ $size?: number }>`
  display: inline-block;
  width: ${({ $size }) => ($size ? $size : 50)}px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.colors["primary"]};
  border-color: ${({ theme }) => theme.colors["primary"]} transparent;
  animation: l1 1s infinite;
  @keyframes l1 {
    to {
      transform: rotate(0.5turn);
    }
  }
`;
