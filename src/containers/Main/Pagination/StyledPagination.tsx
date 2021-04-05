import styled from "styled-components";
import Pagination from "./Pagination";

const StyledPagination = styled(Pagination)`
  box-sizing: border-box;
  width: 960px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;

    & a {
      display: inline-block;
      width: 10px;
      color: black;
      text-decoration: none;
      padding: 10px;
      margin: 10px;
    }
  }
`;

export default StyledPagination;
