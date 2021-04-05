import styled from "styled-components";
import Write from "./Write";

const StyledWrite = styled(Write)`
  display: flex;
  flex-flow: column nowrap;
  width: 960px;
  margin: 20px auto;
  padding: 20px;

  & > * {
    margin: 10px 0;
  }
`;

export default StyledWrite;
