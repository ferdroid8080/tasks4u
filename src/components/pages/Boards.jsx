import React from 'react';
import Layout from '../../components/Layout';
import searchIcon from '../../images/search-ic.svg';

function Boards() {
  return (
    <Layout>
      <div className="Boards">
        <div className="Boards--SearchToolbar">
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <div className="Boards--Inner">
          <div className="Boards--HeaderTitle">
            <h2>Seleccione un tablero</h2>
            <p>Estos son sus tableros</p>
          </div>
          <div className="Boards--Grid">
            <div className="Boards--Item">
              <p>Board Name</p>
            </div>
            <div className="Boards--Item">
              <p>Board Name</p>
            </div>
            <div className="Boards--Item">
              <p>Board Name</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Boards;
