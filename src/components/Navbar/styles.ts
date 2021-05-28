import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  width: 100vw;
  height: 20vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 2px solid #000;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    position: relative;
  }
  
  form:after{
    content: "";
    display: block;
    position: absolute;
    top: calc(100% + 2px);
    left: calc(0% - 2px);
    width: calc(100% + (2 * 2px));
    border-top: 4px solid #000;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    height: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }
`;
