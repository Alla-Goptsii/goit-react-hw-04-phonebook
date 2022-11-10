import styled from '@emotion/styled';

export const Form = styled.form`
  border-radius: 8px;

  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 10px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border-radius: 4px;
  width: 100px;
  height: 20px;
  border: 1px solid black;
  background-color: rgb(153, 151, 151);
  align-items: center;
  text-align: center;

  margin-left: 10px;
  margin-top: 10px;

  &:hover,
  &:focus {
    background-color: gray;
  }
`;
