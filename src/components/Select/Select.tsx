import { useDispatch } from "react-redux";
import { categoryAction } from "../../redux/reducers/newPost";

const Select = () => {
  const dispatch = useDispatch();

  const onChangeCategory = ({ target }: { target: HTMLSelectElement }) => {
    dispatch(
      categoryAction(
        target.value === "poem"
          ? "poem"
          : target.value === "novel"
          ? "novel"
          : "essay"
      )
    );
  };

  return (
    <select name="category" id="categorySelect" onChange={onChangeCategory}>
      <option value="poem">POEM</option>
      <option value="novel">NOVEL</option>
      <option value="essay">ESSAY</option>
    </select>
  );
};

export default Select;
