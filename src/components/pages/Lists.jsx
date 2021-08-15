import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import SearchToolbar from '../SearchToolbar';
import TasksCards from '../Tasks/TasksCards';
import BoardMembers from '../BoardMembers';
import { useRouteMatch } from 'react-router-dom';
import { randomInt } from '../../helpers/functions';

function Lists() {
  const { params: { id: boardId } } = useRouteMatch();
  const [boardDetail, setBoardDetail] = useState(null);
  const [boardMembers, setBoardMembers] = useState([]);
  const [listBoard, setListBoard] = useState([]);
  const token = localStorage.getItem('trello_token');

  const getBoardDetails = async () => {
    try {
      let board = await fetch(`${process.env.REACT_APP_TRELLO_API_URL}/boards/${boardId}?fields=id,name,desc&key=${process.env.REACT_APP_TRELLO_API_KEY}&token=${token}`);
      let boardMembers = await getBoardMembers();
      let listBoard = await getListBoard();
      board = await board.json();
      setBoardDetail(board);
      setBoardMembers(boardMembers);
      setListBoard(listBoard);
    } catch (error) {
      console.error(error);
    }
  }

  const getListBoard = async () => {
    let lists = await fetch(`${process.env.REACT_APP_TRELLO_API_URL}/boards/${boardId}/lists?fields=id,name,idBoard&key=${process.env.REACT_APP_TRELLO_API_KEY}&token=${token}`)
    lists = await lists.json();

    const listBoard = [...lists];
    let count = 0;
    do {
      let listIndexId = lists[count].id;
      let cards = await fetch(`${process.env.REACT_APP_TRELLO_API_URL}/lists/${listIndexId}/cards?fields=id,desc,name,idList&key=${process.env.REACT_APP_TRELLO_API_KEY}&token=${token}`);
      cards = await cards.json();
      const foundListIndex = listBoard.findIndex(i => i.id === listIndexId);
      listBoard[foundListIndex].number = cards.length;
      listBoard[foundListIndex].color = `rgb(${randomInt(1, 255)}, ${randomInt(1, 255)}, ${randomInt(1, 255)})`;

      count++;
    } while (count < lists.length);
    
    return listBoard;
  }

  const getBoardMembers = async () => {
    let bm = await fetch(`${process.env.REACT_APP_TRELLO_API_URL}/boards/${boardId}/members?key=${process.env.REACT_APP_TRELLO_API_KEY}&token=${token}`);
    bm = await bm.json();
    bm = bm.map(member => {
      let initials = '';
      if (member.fullName.indexOf(' ') !== -1) {
        initials = member.fullName.split(' ');
        initials = `${initials[0].charAt(0).toUpperCase()}${initials[1].charAt(0).toUpperCase()}`;
      } else {
        initials = `${member.fullName.charAt(0).toUpperCase()}`;
      }
      return ({ id: member.id, fullName: member.fullName, initials });
    });
    return bm;
  }

  useEffect(() => {
    getBoardDetails();

  }, []);

  return (
    <Layout>
      <div className="Lists">
        <SearchToolbar />
        <div className="Lists--Inner">
          <div className="Lists--HeaderTitle">
            <h4>{boardDetail ? boardDetail.name : ''}</h4>
            <div className="Lists--BoardsName">
              <p>({`${listBoard.length} list${listBoard.length > 1 ? 's' : ''}`})</p>
            </div>
          </div>
          <TasksCards list={listBoard} />
          {/* <TasksCards list={[
            { id: 101, name: 'To Do', number: 12, color: '#F49191' },
            { id: 102, name: 'In Progress', number: 27, color: '#98CC90' },
            { id: 104, name: 'Review', number: 1, color: '#cfcfcf' },
            { id: 105, name: 'QA', number: 0, color: '#000000' },
            { id: 103, name: 'Done', number: 7, color: '#AD86E0' },
          ]} /> */}
        </div>
        <BoardMembers members={boardMembers} />
      </div>
    </Layout>
  );
}

export default Lists;
