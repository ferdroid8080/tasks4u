import React from 'react';
import Layout from '../Layout';
import SearchToolbar from '../SearchToolbar';
import TasksCards from '../Tasks/TasksCards';
import BoardMembers from '../BoardMembers';

function Lists() {
  return (
    <Layout>
      <div className="Lists">
        <SearchToolbar />
        <div className="Lists--Inner">
          <div className="Lists--HeaderTitle">
            <h4>¡Hola %Name%!</h4>
            <div className="Lists--BoardsName">
              <p>Tablero: %board_name%</p>
              <p>(3 lists)</p>
            </div>
          </div>
          <TasksCards list={[
            { id: 101, title: 'To Do', number: 12, color: '#F49191' },
            { id: 102, title: 'In Progress', number: 27, color: '#98CC90' },
            { id: 104, title: 'Review', number: 1, color: '#cfcfcf' },
            { id: 105, title: 'QA', number: 0, color: '#000000' },
            { id: 103, title: 'Done', number: 7, color: '#AD86E0' },
          ]} />
        </div>
        <BoardMembers members={[
          { id: 100, name: 'Andres Fernando' },
          { id: 101, name: 'Edward Lince' },
          { id: 102, name: 'Antonio Perez' },
        ]} />
      </div>
    </Layout>
  );
}

export default Lists;
