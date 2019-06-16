import * as React from "react";

import Styled from 'styled-components';

const css = Styled.div`
  btn: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'absolute',
    bottom: '0',
    font: '16px/30px sans-serif',
    color: 'rgba(255,255,255,0.8)'
  },
  left: {
    left: '0'
  },
  right: {
    right: '0'
  }
`;


const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className=" btn left"> ◀ </i>
);
const CustomRightArrow = ({ onClick }) => {
  return <i className="btn right" onClick={() => onClick()}> ▶ </i>;
};


export { CustomLeftArrow, CustomRightArrow} 