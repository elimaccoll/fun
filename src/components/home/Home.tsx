import styled from "styled-components";
import { Tile } from "../tile/Tile";

export const Home = () => {
  return (
    <StyledHome>
      <StyledTileContainer>
        <Tile pathname="grid">Interactive Grid</Tile>
      </StyledTileContainer>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const StyledTileContainer = styled.div`
  padding: 20px;
  width: 80%;
  height: fit-content;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
