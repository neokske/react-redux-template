import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWelcomeString } from '../../selectors';
import { Actions } from '../../actions';

const Welcome = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const welcomeString = useSelector(getWelcomeString);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handlePutStringInStore = () => {
    dispatch(Actions.changeWelcome(inputValue));
  };

  return (
    <div>
      <span>Redux store contains {welcomeString}</span>
      <br />
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handlePutStringInStore}>Set in store</button>
    </div>
  );
};

export default Welcome;
