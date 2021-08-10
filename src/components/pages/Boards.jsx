import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../Layout';
import SearchToolbar from '../SearchToolbar';

function Boards() {
  let isLoggedIn = localStorage.getItem('trello_token') !== null;
  let token = null;
	const history = useHistory();
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBoards = async () => {
    const url = `${process.env.REACT_APP_TRELLO_API_URL}/members/me/boards?fields=name,url,memberships&key=${process.env.REACT_APP_TRELLO_API_KEY}&token=${token}`;
    try {
      let results = await fetch(url);
      results = await results.json();
      setBoards(results);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/auth');
    } else {
      token = localStorage.getItem('trello_token');
      fetchBoards();
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
      <div className="Boards--Grid" style={{ gridTemplateColumns: loading ? '1fr' : '1fr 1fr' }}>
        {loading ? <div className="Boards--Loading text-center">Cargando...</div> : null}
        {
          boards && boards.map(item => (
            <div className="Boards--Item text-center" key={item.id}>
              <p>{ item.name }</p>
            </div>
          ))
        }
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
