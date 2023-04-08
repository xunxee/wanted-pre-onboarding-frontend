import styled from '@emotion/styled';

import PALETTE from '../styles/palette';

const { slateGrey } = PALETTE;

const Wrapper = styled.h2({
  padding: '10% 0 0',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: slateGrey,
});

export default function H2({ title }) {
  return <Wrapper>{title}</Wrapper>;
}
