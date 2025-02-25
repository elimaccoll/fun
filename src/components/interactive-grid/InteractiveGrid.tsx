import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { CELL_SIZE, TOOLBAR_HEIGHT } from "./constants";
import { Cell } from "./components/cell/Cell";
import { Toolbar } from "./components/toolbar/Toolbar";

export const InteractiveGrid = () => {
  const { width, height } = useWindowDimensions();
  const gridWidth = Math.floor(width / CELL_SIZE);
  const gridHeight = Math.floor((height - TOOLBAR_HEIGHT) / CELL_SIZE);
  const [cells, setCells] = useState<number[]>([]);

  useEffect(() => {
    const generateCells = () => {
      const cells = [];
      for (let i = 0; i < gridWidth * gridHeight; i++) {
        cells.push(i);
      }
      return cells;
    };

    const cellsToRender = generateCells();
    setCells(cellsToRender);
  }, [gridHeight, gridWidth]);

  return (
    <StyledMain>
      <Toolbar />
      <StyledGridContainer $rows={gridHeight} $cols={gridWidth}>
        {cells.map((cell) => {
          return <Cell key={cell} />;
        })}
      </StyledGridContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const StyledGridContainer = styled.div<{ $rows: number; $cols: number }>`
  width: ${(props) => props.$cols * CELL_SIZE}
  height: ${(props) => props.$rows * CELL_SIZE}
  gap: 0;

  display: grid;
  grid-template-columns: repeat(${(props) => props.$cols}, ${CELL_SIZE}px);
  grid-template-rows: repeat(${(props) => props.$rows}, ${CELL_SIZE}px);
`;
