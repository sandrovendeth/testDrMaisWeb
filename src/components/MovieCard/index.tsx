import { FilmDTO } from "../../dtos/FilmDTO";
import { Button, MainTitle, Img, Div, Text, } from "./styles";


interface Props {
  data: FilmDTO
}

export function MovieCard({data, ...rest}: Props) {
  return (
    <Button {...rest}>
      
      <MainTitle>{data.nome}</MainTitle>

      <Img src={data.imagem} alt="imagem" />
      <Div>
        <Text>{data.categoria}</Text>
        <Text>{data.duracao}</Text>
      </Div>
      <Div>
        <Text>{data.data_assistir}</Text>
        <Text>{data.hora_assistir}</Text>
      </Div>
     
    </Button>
  );
}
