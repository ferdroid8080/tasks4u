import React, { useState } from 'react';

function BoardMembers({ members }) {
  const [showPopup, setShowPopup] = useState({
    id: null,
  });

  const clickedPopupHandler = (id) => {
    const updatedPopup = {...showPopup};
    if (updatedPopup.id && updatedPopup.id === id) {
      updatedPopup.id = null;
    } else {
      updatedPopup.id = id;
    }
    setShowPopup(updatedPopup);
  };

  return (
    <div className="Lists--Board-Members">
      <div className="Board-Members--HeaderTitle">
        <h4>Miembros</h4>
      </div>
      <div className="Board-Members">
        <ul>
          {
            members && members.map((item) => (
              <li key={item.id} onClick={() => clickedPopupHandler(item.id)}>
                <p>{item.initials}</p>
                <p className={`fullName ${showPopup.id === item.id ? 'active' : ''}`}>{item.fullName}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default BoardMembers;
