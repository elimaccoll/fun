import styled from "styled-components";
import { CELL_SIZE } from "../../constants";

export const Cell = () => {
  return <StyledCell></StyledCell>;
};

const StyledCell = styled.div`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  box-sizing: border-box;
  border: 1px solid white;

  background-color: #222;
  &:hover {
    background-color: #333;
  }
`;
