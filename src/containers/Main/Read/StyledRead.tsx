import styled from "styled-components";
import Read from "./Read";

const StyledRead = styled(Read)`
  box-sizing: border-box;
  width: 960px;
  margin: 20px auto;
  padding: 20px;

  & > h1 {
    text-align: center;
  }

  & > p {
    font-size: 1.4rem;
    text-indent: 2rem;
  }
`;

export default StyledRead;
