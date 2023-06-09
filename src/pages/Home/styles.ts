import styled from "styled-components";

export const Container = styled.main`
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;
`;
export const Title = styled.h1`
  font-size: 40px;
`;
export const Input = styled.input`
  font-size: 20px;
  border-radius: 10px;
  margin-top: 50px;
  ::placeholder {
    font-size: 1px
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 24px;
`;
export const ButtonAdd = styled.button`
  background-color: #4caf50;
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 16px;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
`;


