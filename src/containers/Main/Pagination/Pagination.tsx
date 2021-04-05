import { Link, useRouteMatch } from "react-router-dom";
import StyledButton from "../../../components/Button/StyledButton";

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
          <Link to={match.path === "/" ? "/" : `${match.path}/1`}>1</Link>
        </li>
        <li>
          <Link to={match.path === "/" ? "/" : `${match.path}/2`}>2</Link>
        </li>
      </ul>
      <StyledButton className="" children=">" width="50" />
    </div>
  );
};

export default Pagination;
