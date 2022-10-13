import styled from 'styled-components';

export const ContactFormComponent = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 30px;
  margin: 20px auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;

  box-shadow: rgb(151 65 252 / 20%) 0px 15px 30px -5px;
  -moz-box-shadow: rgb(151 65 252 / 20%) 0px 15px 30px -5px;
  -webkit-box-shadow: rgb(151 65 252 / 20%) 0px 15px 30px -5px;

  label {
    font-size: 20px;
    display: block;
    margin-bottom: 15px;
  }
  input[type='text'],
  input[type='date'],
  input[type='datetime'],
  input[type='email'],
  input[type='number'],
  input[type='search'],
  input[type='time'],
  input[type='url'],
  input[type='password'],
  textarea {
    color: white;
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border: 1px solid #fff;
  }
  textarea {
    height: 200px;
  }

  input:-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    background-color: rgba(0, 0, 0, 0.5) !important;
    color: white !important;
  }
`;
