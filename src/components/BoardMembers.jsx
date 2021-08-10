import React from 'react';

function BoardMembers({ members }) {
  return (
    <div className="Lists--Board-Members">
      <div className="Board-Members--HeaderTitle">
        <h4>Miembros</h4>
      </div>
      <div className="Board-Members">
        <ul>
          {
            members && members.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default BoardMembers;
