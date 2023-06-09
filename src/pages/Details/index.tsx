import { Link } from "react-router-dom";
import CheckboxGroup  from "react-checkbox-group"

import {
  Container,
  Text,
  Img,
  Content,
  TextTittle,
  View,
  Button,
  ViewButton,
  ButtonRemover
} from "./styles";
import { Modal } from "../../components/Modal";
import { useState } from "react";

export function Details() {

  const [openModal, setOpenModal] = useState(false);


  return (
    <Container>
      <TextTittle>Sangue e Ouro</TextTittle>
      <Content>
        <Img
          src={
            "https://m.media-amazon.com/images/I/81Sbj37QYcL._AC_UF1000,1000_QL80_.jpg"
          }
          alt="imagem"
        />
        <View>
          <Text>
            Categoria: <br />
            Ação
          </Text>
          <Text>
            Duração: <br />
            1h 36m
          </Text>
          <Text>
            Assistir em: <br />
            06/06/2023 as 14:30h
          </Text>
          <Text>
            asopkepoaskepoaskeposakpoekaspokekapoekapsokepoa
          </Text>
          {/* <CheckboxGroup name="checkbox" value={fruit} onChange={} /> */}
        </View>

        <ViewButton>
          <Link to={"/Register"}>
            <Button >Editar</Button>
          </Link>
          <ButtonRemover onClick={()=>{setOpenModal(true)}}>Remover</ButtonRemover>
          {openModal && <Modal closeModal={setOpenModal}/>}
        </ViewButton>
      </Content>
    </Container>
  );
}
