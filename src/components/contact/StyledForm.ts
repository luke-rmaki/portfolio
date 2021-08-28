import styled from 'styled-components';

type StyledProps = {
  step: number;
};
const StyledForm = styled.div<StyledProps>`
  form {
    text-align: center;
    margin: 100px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // wrapper for input and button
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px var(--white) solid;
      border-radius: 50px;
      padding-inline: ${(props) => (props.step === 1 ? `5px 0` : `10px 0`)};
      /* padding-block: ${(props) => (props.step === 1 ? `0` : `20px`)}; */
      width: 90%;
      max-width: 550px;
    }

    @media (min-width: 500px) {
      width: 80%;
    }

    @media (min-width: 700px) {
      width: 60%;
    }

    // main input/text area
    input:not([type='submit']),
    textarea {
      flex: 1 0;
      background-color: var(--black);
      border: hidden;
      padding: 5px 10px;
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
      transition: all 0.5s;

      &::placeholder {
        color: var(--white);
        font-family: 'Montserrat', sans-serif;
      }
      &::-moz-placeholder {
        font-family: 'Montserrat', sans-serif;
        color: var(--white);
      }
    }

    input[type='submit'],
    button {
      transition: all 0.5s;
      grid-row: 1;
      border-radius: 50px;
      color: var(--black);
      border: none;
      font-size: 20px;
      height: 50px;
      width: 50px;
      z-index: 10;
      cursor: pointer;
      background: var(--accent);

      &:hover {
        background-color: var(--purple);
      }
    }

    input[type='email'] {
      display: ${(props) => (props.step === 2 ? `none` : `block`)};
      opacity: ${(props) => (props.step === 2 ? 0 : 1)};
    }

    textarea {
      display: ${(props) => (props.step === 1 ? `none` : `block`)};
      opacity: ${(props) => (props.step === 1 ? 0 : 1)};
      resize: none;
    }

    input[type='submit'] {
      height: 100px;
      width: 80px;
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
  }
`;

export default StyledForm;
