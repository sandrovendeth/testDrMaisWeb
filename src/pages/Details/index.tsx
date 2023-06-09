import { Link, useParams, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import {
  Container,
  Text,
  Img,
  Content,
  TextTittle,
  View,
  Button,
  ViewButton,
  ButtonRemover,
} from "./styles";
import { Modal } from "../../components/Modal";
import { useState } from "react";
import api from "../../services/api";
import { FilmDTO } from "../../dtos/FilmDTO";

export function Details() {
  const params = useParams();
  const parametro = params.idfilme;

  console.log("params", parametro);

  const [openModal, setOpenModal] = useState(false);

  const [films, setFilms] = useState<FilmDTO>(Object);

  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await api.delete(`/filmes/${parametro}`);
      setOpenModal(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  async function getDetails() {
    try {
      const response = await api.get(`/filmes/${parametro}`);
      setFilms(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("isChecked:", isChecked);
  }, [isChecked]);

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container>
      <TextTittle>{films.nome}</TextTittle>
      <Content>
        <Img src={films.imagem} alt="imagem" />
        <View>
          <Text>
            Categoria: <br />
            {films.categoria}
          </Text>
          <Text>
            Duração: <br />
            {films.duracao}
          </Text>
          <Text>
            Assistir em: <br />
            {films.data_assistir} as {films.hora_assistir}
          </Text>
          <Text>{films.sinopse}</Text>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            Assistido
          </label>
        </View>

        <ViewButton>
          <Link to={`/Register/${parametro}?checked=${isChecked}`}>
            <Button>Editar</Button>
          </Link>
          <ButtonRemover
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Remover
          </ButtonRemover>
          {openModal && (
            <Modal handleConfirm={handleDelete} closeModal={setOpenModal} />
          )}
        </ViewButton>
      </Content>
    </Container>
  );
}
