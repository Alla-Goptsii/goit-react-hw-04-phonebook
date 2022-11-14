import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
`;

export const Button = styled.label`
  border-radius: 4px;
  width: 100px;
  height: 20px;
  border: 1px solid black;
  background-color: rgb(153, 151, 151);
  align-items: center;
  text-align: center;

  margin-left: 10px;
  margin-top: 10px;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: gray;
  }
`;
