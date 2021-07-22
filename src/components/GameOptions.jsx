import React from 'react';

const GameOptions = ({ options, onChange }) => {
  const changeOption = (e) => {
    const optionID = e.target.value;
    const isChecked = e.target.checked;
    onChange(optionID, isChecked);
    console.log(`optionID ${optionID}`, `isChecked ${isChecked}`);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.id} htmlFor={option.id}>
          {option.name}
          <input
            type="checkbox"
            id={option.id}
            value={option.id}
            defaultChecked={option.default}
            onChange={changeOption}
          />
        </label>
      ))}
    </div>
  );
};

export default GameOptions;
