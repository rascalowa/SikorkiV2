import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Learn' },
    { id: 'cg2', text: 'React' },
    { id: 'cg3', text: 'and Node' },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className='course-goals'>
      <h2>A React App</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
