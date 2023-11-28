import React, { useState } from "react";

export const Player = ({ intialPlayerName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(intialPlayerName);
  const [isEditing, setEditing] = useState(false);

  const handleClick = () => {
    setEditing((isEditing) => !isEditing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const editBtn = isEditing ? "save" : "edit";

  // console.log(isEditing);
  return (
    <li  className={isActive?"active":undefined}>
      <span>
        {!isEditing ? (
          <>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{symbol}</span>
          </>
        ) : (
          <input
            type="text"
            name=""
            value={playerName}
            onChange={handleChange}
            id=""
          />
        )}
      </span>
      <button onClick={() => handleClick()}>{editBtn}</button>
    </li>
  );
};
