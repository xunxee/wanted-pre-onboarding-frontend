import styled from '@emotion/styled';

import FormContainer from './FormContainer';

const Wrapper = styled.div({
  width: '100%',
  padding: '10% 0 0',
});

export default function FormPage({ category, onSubmit, onClick }) {
  return (
    <Wrapper>
      <FormContainer
        category={category}
        onSubmit={onSubmit}
        onClick={onClick}
      />
    </Wrapper>
  );
}
