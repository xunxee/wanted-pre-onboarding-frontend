import { useState } from 'react';

import Input from './Input';

export default function TodoContainer() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });

  function handleChangeTitle(value) {
    setState({
      ...state,
      taskTitle: value,
    });
  }

  return <Input onChange={handleChangeTitle} />;
}
