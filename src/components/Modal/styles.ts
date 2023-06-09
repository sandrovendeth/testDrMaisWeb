import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  position: relative;
  top:30%;
  transform: translateY(-50%);
`;

export const Text = styled.h1`
  display: inline-block;
  text-align: center;
  margin-top: 45px;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  margin-bottom: 100px;
`;

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonConfirm = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: #FF0000;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;
