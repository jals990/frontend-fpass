import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 40px;

  img {
    background: var(--white);
    box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.3);
    height: 250px;
    width: 250px;
    border-radius: 10%;
  }

  h1{
    margin-top: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 14px 0;

    ul {
      width: 70%;
    }
  }

  li {
    list-style-type: none;
  }

  button{
    position: fixed;
    bottom: 30px;
  }
`;
