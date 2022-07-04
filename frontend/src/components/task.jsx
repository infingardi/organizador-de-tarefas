/* eslint-disable no-alert */
import React from 'react';

function Tasks({ title }) {
  return (
    <div>
      <p>{title}</p>
      <button type="button">Atualizar</button>
      <button type="button">Excluir</button>
    </div>
  );
}

export default Tasks;
