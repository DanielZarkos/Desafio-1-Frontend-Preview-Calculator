import styled from "styled-components";

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  min-width: 100vw;
  background-color: #09153e;
  color: #fff;

  .info-div {
    display: flex;
    gap: 65px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    box-shadow: none;
    border: 0px solid;
    border-radius: 5px;
    height: 25px;
    width: 260px;
  }

  .calculate-button {
    margin-top: 20px;
    border-radius: 5px;
    height: 30px;
    width: 150px;

    color: black;
    font-weight: bold;
    :hover {
      background-color: lightblue;
    }

    :active {
      box-shadow: 0 2px #666;
      transform: translateY(1.5px);
    }
  }

  .div-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: #93abbd;
    font-size: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    .section-sub {
      display: flex;
      align-items: flex-start;
      flex-direction: row-reverse;
      gap: 1rem;
      width: 98%;
      margin-top: 1rem;
      padding: 0;
    }
  }
`;
