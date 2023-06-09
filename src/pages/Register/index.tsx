import { Link } from "react-router-dom";
import {
  Text,
  Container,
  View,
  Input,
  Img,
  TextTitle,
  InputSinopse,
  Button
} from "./styles";

export function Register() {
  return (
    <Container>
      <TextTitle>Cadastro / Alteração</TextTitle>
      <Img
        src={
          "https://m.media-amazon.com/images/I/81Sbj37QYcL._AC_UF1000,1000_QL80_.jpg"
        }
      />
      <View>
        <Text>Filme</Text>
        <Input />
        <Text>Categoria</Text>
        <Input />
        <Text>Duração</Text>
        <Input />
        <Text>Sinopse</Text>
        <InputSinopse />
        <Text>Assistir em</Text>
        <Input />
        <Text>Horário</Text>
        <Input />
        <Link to={"/"}>
            <Button>Salvar</Button>
          </Link>
      </View>
    </Container>
  );
}
