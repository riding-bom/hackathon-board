import styled from "styled-components";
import List from "./List";

const StyledList = styled(List)`
  width: 960px;
  margin: 20px auto;
  box-sizing: border-box;
  list-style: none;
  padding: 20px;
  display: block;

  & > a {
    color: black;
    text-decoration: none;

    & > li {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      border-radius: 3px;
      margin: 10px 0;
      box-shadow: 0 10px 10px 3px rgba(110, 109, 110, 0.24);

      & > * {
        font-size: 1rem;
        font-weight: 100;
        padding: 5px;
        margin: 0;
        cursor: pointer;
      }

      & > h2 {
        flex-grow: 1;
      }

      & > div {
        width: 70px;
        text-align: center;
      }
    }
  }
`;

export default StyledList;
