import styled from "styled-components";

export const Container = styled.div`
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

export const TextTittle = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Img = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 16px;
  border-radius: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const View = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
export const ButtonRemover = styled.button`
  background-color: #FF0000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
export const ViewButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
