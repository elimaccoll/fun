import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
interface TileProps {
  pathname?: string;
}

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  children,
  pathname,
}) => {
  const navigate = useNavigate();
  return (
    <StyledTile onClick={() => navigate(`/fun/${pathname}`)}>
      {children}
    </StyledTile>
  );
};

const StyledTile = styled.button`
  min-height: 100px;
  background-color: #333;
  border: 2px solid cornflowerblue;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
  &:active {
    background-color: #555;
  }
`;
