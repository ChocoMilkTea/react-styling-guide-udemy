import './CourseInput.css';

const CourseInput = () => {
  return (
    <form>
      <div className='form-control'>
        <label>Course Goal</label>
        <input type='text'></input>
      </div>

      <button type='submit'>Add Goal</button>
    </form>
  )
}

export default CourseInput;