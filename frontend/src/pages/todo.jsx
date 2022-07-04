/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import Task from '../components/task';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [enterPage, setEnterPage] = useState(true);

  const getAllTasks = async () => {
    const url = `http://localhost:3333/tasks/${1}`;
    const token = localStorage.getItem('token');
    if (token && enterPage) {
      setEnterPage(false);
      const response = await fetch(url, {
        method: 'GET',
        headers: { authorization: token },
      });
      const data = await response.json();
      setTasks(data);
    }
  };

  const renderTasks = () => tasks.map((task) => (
    <div key={task.id}>
      <Task title={task.title} />
    </div>
  ));

  useEffect(() => {
    getAllTasks();
  });

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {renderTasks() }
    </div>
  );
}

export default Tasks;
