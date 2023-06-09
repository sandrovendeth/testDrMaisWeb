import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import {
  Text,
  Container,
  View,
  Input,
  Img,
  TextTitle,
  InputSinopse,
  Button,
} from "./styles";
import api from "../../services/api";
import { FilmDTO } from "../../dtos/FilmDTO";

export interface FormData {
  [name: string]: string;
}

export function Register() {
  const params = useParams();

  const parametro = params.idfilme;

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [duracao, setDuracao] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [dataAssistir, setDataAssistir] = useState("");
  const [horaAssistir, setHoraAssistir] = useState("");
  const [imagem, setImagem] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  async function handleEdit() {
    const body = {
      nome,
      categoria,
      sinopse,
      duracao,
      data_assistir: dataAssistir,
      hora_assistir: horaAssistir,
      assistido: true,
      imagem: imagem,
    };

    body.imagem = imagem;
    try {
      if (parametro) {
        await api.put(`/filmes/${parametro}`, body);
      } else {
        const newId = uuidv4();
        await api.post(`/filmes`, { parametro: String(newId), ...body });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function getRegister() {
    try {
      const response = await api.get(`/filmes/${parametro}`);
      const filmData = response.data as FilmDTO;
      setNome(filmData.nome);
      setCategoria(filmData.categoria);
      setDuracao(filmData.duracao);
      setSinopse(filmData.sinopse);
      setDataAssistir(filmData.data_assistir);
      setHoraAssistir(filmData.hora_assistir);
      setImagem(filmData.imagem);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRegister();
  }, []);

  useEffect(() => {
    // Verificar se o parâmetro "checked" está presente nos parâmetros da rota
    if (params.checked) {
      // Atualizar o estado isChecked com base no valor do parâmetro "checked"
      setIsChecked(params.checked === "true");
    }
  }, [params.checked]);

  

  return (
    <Container>
      <TextTitle>Cadastro / Alteração</TextTitle>
      <Img src={imagem} />
      <View>
        <Text>Filme</Text>
        <Input value={nome} onChange={(e) => setNome(e.target.value)} />
        <Text>Categoria</Text>
        <Input
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <Text>Duração</Text>
        <Input value={duracao} onChange={(e) => setDuracao(e.target.value)} />
        <Text>Sinopse</Text>
        <InputSinopse
          value={sinopse}
          onChange={(e) => setSinopse(e.target.value)}
        />
        <Text>Assistir em</Text>
        <Input
          value={dataAssistir}
          onChange={(e) => setDataAssistir(e.target.value)}
        />
        <Text>Horário</Text>
        <Input
          value={horaAssistir}
          onChange={(e) => setHoraAssistir(e.target.value)}
        />
        <Text>Endereço da imagem</Text>
        <Input value={imagem} onChange={(e) => setImagem(e.target.value)} />
        <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            Checkbox
          </label>
        <Link to={"/"}>
          <Button onClick={() => handleEdit()}>Salvar</Button>
        </Link>
      </View>
    </Container>
  );
}
