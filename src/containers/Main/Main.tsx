import { Redirect, Route, Switch } from "react-router";
import StyledNav from "./Nav/StyledNav";
import StyledWrite from "./Write/StyledWrite";
import StyledList from "../../components/List/StyledList";
import {
  getAllPostAsync,
  getEssayPostAsync,
  getNovelPostAsync,
  getPoemPostAsync,
} from "../../redux/reducers/posts";
import StyledRead from "./Read/StyledRead";

const Main = () => {
  return (
    <main>
      <StyledNav className="Nav" />
      <Switch>
        <Route
          path="/poem"
          render={() => (
            <StyledList className="" asyncAction={getPoemPostAsync} />
          )}
        />
        <Route
          path="/novel"
          render={() => (
            <StyledList className="" asyncAction={getNovelPostAsync} />
          )}
        />
        <Route
          path="/essay"
          render={() => (
            <StyledList className="" asyncAction={getEssayPostAsync} />
          )}
        />
        <Route path="/write" render={() => <StyledWrite className="" />} />
        <Route path="/:postid" render={() => <StyledRead className="" />} />
        <Route
          path="/"
          exact
          render={() => (
            <StyledList className="" asyncAction={getAllPostAsync} />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Main;
