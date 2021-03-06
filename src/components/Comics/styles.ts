import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Scroll = styled(PerfectScrollbar)`
  height: 78vh;
  overflow: scroll;
`;

export const Container = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  justify-content: center;

  .loading{
    display: flex;
    width: 20vw;
    height: 20vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;

    background: var(--white);
    color: var(--dark);
    padding: 36px;
    border: 2px solid #000;
    border-radius: 17px;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }

  .empty-search {
    display: flex;
    flex-direction: column;
    align-items: center !important;
    justify-content: center;
  }

  ul {
    display: flex;
    flex-direction: column;

    padding: 15px;

    li {
      width: 500px;
      @media (max-width: 788px){
        width: calc(100vw - 70px);
      }
      display: flex;
      align-items: center;
      justify-content: space-around;
      list-style-type: none;
      background: var(--white);
      padding: 5px 15px;
      border-radius: 5px;
      -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 14px;

      img {
        background: var(--white);
        box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.3);
        height: 60px;
        width: 60px;
        margin-right: 15px;
        border-radius: 50%;
      }

      strong {
        width: 250px;
        display: inline-block;
        align-self: center;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
      }

      
    }
  }
`;
