import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ item, markAsDoneOrUndone, deleteItemFromList }) {
  const [isStriked, setIsStriked] = useState(false);

  const handleDoneClick = () => {
    setIsStriked(true);
    markAsDoneOrUndone(item);
  };

  return (
    <li className={`${item.done ? 'done' : ''} ${isStriked ? 'strikeitem' : ''}`}>
      <span>{item.label}</span>
      <div className="actions">
        <button onClick={handleDoneClick}>
          <FontAwesomeIcon icon={item.done ? faCheckSquare : faSquare} />
        </button>
        <button onClick={() => deleteItemFromList(item)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;