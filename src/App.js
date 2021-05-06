import { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';

import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ])

  const addGoalHandler = (enteredText) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() })
      return updatedGoals;
    });
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        <CourseGoalList items={courseGoals} />
      </section>
    </div>
  );
};

export default App;