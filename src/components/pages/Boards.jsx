import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import SearchToolbar from '../SearchToolbar';

function Boards() {
  let isLoggedIn = localStorage.getItem('trello_token') !== null;
	const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/auth');
    }
  }, []);

  let boardsComponent = (
    <>
    <SearchToolbar />
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
    </>
  );

  if (!isLoggedIn) {
    boardsComponent = <div className="loading-progress">Cargando...</div>
  }

  return (
    <Layout>
      <div className="Boards">
        {boardsComponent}
      </div>
    </Layout>
  );
}

export default Boards;
