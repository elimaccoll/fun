import styled from "styled-components";
import { TOOLBAR_HEIGHT } from "../../constants";

export const Toolbar = () => {
  return <StyledToolbar></StyledToolbar>;
};

const StyledToolbar = styled.div`
  width: 100vw;
  height: ${TOOLBAR_HEIGHT}px;

  background-color: #555;
`;
