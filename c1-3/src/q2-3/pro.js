import { useState } from "react";
import "./styles.css";
// TODO: DEBUG ==> CONCAT 
import { data } from "./data";
export default function App() {
  const [list, setList] = useState(data);
  const [deletedItems, setDeletedItems] = useState([]);
  const [undo, setUndo] = useState(false);

  const removeHandler = (id) => {
    const deletedItem = list.find((item) => item.id === id);

    setUndo(true);
    setDeletedItems([deletedItem]);
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const undoHandler = () => {
    const [undoItem] = deletedItems;
    setDeletedItems([]);
    setList((prev) => prev.concat(undoItem));
    setUndo(false);
  };

  return (
    <div className="App">
      <h1>Remove From List</h1>
      {undo && (
        <button className="undo" onClick={undoHandler}>
          {" "}
          Undo{" "}
        </button>
      )}
      {list.map(({ item, id }) => {
        return (
          <div key={id} className="card">
            <span> {item} </span>
            <button class="btns" onClick={() => removeHandler(id)}>
              Remove{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}
