import React from 'react';

function TasksCardItem({ number, title, color }) {

  return (
    <div className="TasksCards--Col" >
      <div className="Vertical-Bar" style={{ backgroundColor: color }}></div>
      <div className="Lists--Content">
        {number > 0 ? <p>{`${number} task${number > 1 ? 's' : ''}`}</p> : null}
        <h4>{ title }</h4>
      </div>
    </div>
  );
}

export default TasksCardItem;
