import React from 'react';
import TasksCardItem from './TasksCardItem';

function TasksCards({ list }) {
  return (
    <div className="Tasks--Cards">
      {
        list && list.map(task => (
          <TasksCardItem key={task.id} number={task.number} title={task.name} color={task.color} />
        ))
      }
    </div>
  );
}

export default TasksCards;
