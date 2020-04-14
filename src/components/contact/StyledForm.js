import styled from 'styled-components';

const StyledForm = styled.form`
  text-align: center;
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: ${props => (props.step === 1 ? '40px' : '200px')};
  width: 100%;

  @media screen and (min-width: 1000px) {
    width: 80%;
  }

  input:not([type='submit']),
  textarea {
    background-color: var(--black);
    border: 1px solid var(--white);
    padding: 5px 10px;
    border-radius: ${props => (props.step === 1 ? '50px' : '20px')};
    grid-column: 5 / 9;
    grid-row: 1 / 2;
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    transition: all 1s;

    &::placeholder {
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
    }
    &::-moz-placeholder {
      font-family: 'Montserrat', sans-serif;
      color: var(--white);
    }
    @media screen and (max-width: 600px) {
      grid-column: 4 / 10;
    }
  }

  input[type='submit'],
  button {
    @media screen and (max-width: 600px) {
      grid-column: 9 / 10;
    }
    transition: all 0.5s;
    grid-column: 8 / 9;
    grid-row: 1;
    border-radius: 50px;
    background-color: var(--main);
    border: none;
    color: var(--white);
    font-size: 20px;
    height: 40px;
    z-index: 10;
    align-self: ${props => (props.step === 1 ? 'start' : 'end')};
    cursor: pointer;

    &:hover {
      background-color: var(--main-shade);
    }
  }

  textarea {
    display: ${props => (props.step === 1 ? 'none' : 'block')};
    opacity: ${props => (props.step === 1 ? 0 : 1)};
    resize: none;
  }

  label {
    grid-column: 5 / 9;
    transition: all 0.5s;
    padding-top: 10px;
    color: lightcoral;
    text-align: left;
    @media screen and (max-width: 600px) {
      grid-column: 4 / 10;
    }
  }
`;

export default StyledForm;
