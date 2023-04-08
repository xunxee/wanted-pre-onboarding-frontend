import styled from '@emotion/styled';

import TodoItem from './TodoItem';

const Wrapper = styled.div({
  width: '100%',
  marginTop: '20px',
});

export default function TodoList({
  tasks,
  editModeInputValue,
  onEditing,
  setState,
  setOnEditing,
  onChangeInput,
}) {
  return (
    <Wrapper>
      {tasks.map((task, index) => {
        const { id } = task;

        return (
          <TodoItem
            key={id}
            index={index}
            task={task}
            editModeInputValue={editModeInputValue}
            onEditing={onEditing}
            setState={setState}
            setOnEditing={setOnEditing}
            onChangeInput={onChangeInput}
          />
        );
      })}
    </Wrapper>
  );
}
