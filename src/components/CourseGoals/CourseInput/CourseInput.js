import { useState } from 'react';

import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler}></input>
      </div>

      <button type='submit'>Add Goal</button>
    </form>
  )
}

export default CourseInput;