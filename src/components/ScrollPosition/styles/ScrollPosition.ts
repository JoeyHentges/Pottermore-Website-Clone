import styled, { keyframes } from 'styled-components';

export const PositionInner = styled.div`
  position: absolute;
  height: 8px;
  width: 8px;
  left: 2px;
  top: 2px;
  background: #fff;
  border-radius: 50%
`;

const MoveAnimation = ({ one, two, three, four, five }) => keyframes`
  0%, 100% {
    transform: translate(${one}px, ${two}px);
  }
  25%, 75% {
    transform: translateY(${three}px);
  }
  50% {
    transform: translate(${four}px, ${five}px);
  }
`;

const MoveLineAnimation = ({ one, two, three, four, five }) => keyframes`
  0%, to {
    transform: rotate(${one}deg) scaleY(${two})
  }
  25%, 75% {
    transform: scaleY(${three})
  }
  50% {
    transform: rotate(${four}deg) scaleY(${five})
  }
`;

export const PositionContainer = styled.div`
  height: 12px;
  width: 12px;
  color: #fff;
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  position: relative;
  opacity: ${({ active }) => (active ? 'unset' : '0.5')};
  z-index: 999;

  &:not(:first-child) {
    margin-top: 50px;
    transform-origin: center;
    animation-duration: 10s;
    animation-iteration-count: infinite;

    &:before {
      position: absolute;
      content: "";
      width: 1px;
      height: 50px;
      background-color: #fff;
      opacity: 0.3;
      left: 5px;
      bottom: 12px;
      outline: none;
      transform-origin: bottom;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
  }

  :nth-child(1) {
    animation-name: ${MoveAnimation({
  one: -8,
  two: 9,
  three: 0,
  four: 2,
  five: 9,
})};
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }

  :nth-child(2) {
    animation-name: ${MoveAnimation({
  one: 7,
  two: 0,
  three: 0,
  four: -5,
  five: 0,
})};
    &:before {
      animation-name: ${MoveLineAnimation({
  one: -20,
  two: .85,
  three: 1,
  four: 8,
  five: .85,
})};
    }
  }

  :nth-child(3) {
    animation-name: ${MoveAnimation({
  one: -5,
  two: 0,
  three: 0,
  four: 5,
  five: 0,
})};
    &:before {
      animation-name: ${MoveLineAnimation({
  one: 12,
  two: 1,
  three: 1,
  four: -11,
  five: 1,
})};
    }
  }

  :nth-child(4) {
    animation-name: ${MoveAnimation({
  one: 10,
  two: -7,
  three: 0,
  four: -10,
  five: -7,
})};
    &:before {
      animation-name: ${MoveLineAnimation({
  one: -18,
  two: .9,
  three: 1,
  four: 18,
  five: .9,
})};
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  right: 35px;
  top: calc(50vh - 150px);
  z-index: 998;

  ${PositionInner} {
    background: ${({ color }) => color ? color : '#ffffff'};
  }

  ${PositionContainer} {
    color: ${({ color }) => color ? color : '#ffffff'};
    border: 1px solid ${({ color }) => color ? color : '#ffffff'};

    &:before {
      background-color: ${({ color }) => color ? color : '#ffffff'};
    }
  }
`;