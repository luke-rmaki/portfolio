import styled, { StyledComponent } from 'styled-components';

interface Position {
  bottom: number;
  left: number;
}

interface Props {
  absolute: boolean;
  position: Position;
}

const Wrapper: StyledComponent<'div', any, {}, null> = styled.div<Props>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: ${props => (props.absolute ? 'absolute' : 'static')};
  bottom: ${props =>
    Object.keys(props.position).includes('bottom')
      ? `${props.position.bottom}px`
      : 0};
  left: ${props =>
    Object.keys(props.position).includes('left')
      ? `${props.position.left}px`
      : 0};
`;

export default Wrapper;
