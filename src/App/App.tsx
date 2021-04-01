import { useEffect } from "react";
import { firestore } from "../firebase/firebase";

const todos = [
  { id: 1, content: "html", completed: false },
  { id: 2, content: "css", completed: false },
  { id: 3, content: "javascript", completed: false },
];

const addTodos = () => {
  todos.forEach((todo) => {
    firestore
      .collection("todos")
      .doc(todo.id + "")
      .set(todo);
  });
};

function App() {
  useEffect(() => {
    addTodos();
  }, []);

  return null;
}

export default App;
