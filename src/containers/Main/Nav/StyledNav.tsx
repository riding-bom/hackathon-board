import styled from "styled-components";
import Nav from "./Nav";

const StyledNav = styled(Nav)`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;

  & > li {
    margin: 0 10px;
    padding: 0;

    &:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
    }
  }
`;

export default StyledNav;
