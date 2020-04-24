import React, { useState } from "react";
import { Button } from "reactstrap";
import "./style.css";

function AddBoard({ addBoard }) {
  const [newBoard, updateNewBoard] = useState("");
  const [isAdd, updateIsAdd] = useState(false);

  const showAdd = () => {
    updateIsAdd(!isAdd);
  };

  const addMoreBoard = (event) => {
    event.preventDefault();
    if (newBoard) {
      addBoard({ name: newBoard });
      updateNewBoard("");
      updateIsAdd(false);
    }
  };

  return !isAdd ? (
    <div className="add-board-button" onClick={showAdd}>
      Add Board
    </div>
  ) : (
    <form className="add-board" onSubmit={addMoreBoard}>
      <input
        className="input-card"
        type="text"
        placeholder="Enter your board name"
        onChange={(event) => updateNewBoard(event.target.value)}
      />
      <div className="board-button">
        <Button>Add Board</Button>
      </div>
    </form>
  );
}

export default AddBoard;