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

export const TextTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 16px;
  border-radius: 30px;
`;

export const View = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 50%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const InputSinopse = styled.textarea`
  width: 50%;
  height: 100px; /* Ajuste a altura desejada */
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;