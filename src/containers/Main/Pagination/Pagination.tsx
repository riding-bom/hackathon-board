import { useSelector } from "react-redux";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { CombinedState } from "redux";
import StyledButton from "../../../components/Button/StyledButton";
import { posts } from "../../../constance/type";

type paginationProps = {
  className: string;
};

const Pagination = ({ className }: paginationProps) => {
  const match = useRouteMatch();

  return (
    <div className={className}>
      <StyledButton className="" children="<" width="50" />
      <ul>
        <li>
          <Link to={`${match.path}/1`}>1</Link>
        </li>
        <li>
          <Link to={`${match.path}/2`}>2</Link>
        </li>
      </ul>
      <StyledButton className="" children=">" width="50" />
    </div>
  );
};

export default Pagination;
