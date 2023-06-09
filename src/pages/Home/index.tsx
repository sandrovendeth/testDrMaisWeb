import { MovieCard } from "../../components/MovieCard";
import { Link } from "react-router-dom";

import { Container, Title, Input, List, View, ButtonAdd } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FilmDTO } from "../../dtos/FilmDTO";

export function Home() {
  const [filmes, setFilmes] = useState<FilmDTO[]>([]);

  const [originalFilms, setOriginalFilms] = useState<FilmDTO[]>([]);

  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchText === "") {
      setFilmes(originalFilms); // Usando os filmes originais
    } else {
      setFilmes(
        originalFilms.filter((item) => {
          if (
            item.nome.toLowerCase().indexOf(searchText.toLowerCase()) /*&&
            item.categoria.toLowerCase().indexOf(searcText.toLowerCase()) */ >
            -1
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchText, originalFilms]);

  async function getFilmes() {
    try {
      const response = await api.get("/filmes");
      setFilmes(response.data);
      setOriginalFilms(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <Container>
      <Title>Cinéfilo</Title>
      <View>
        <Input
          placeholder="Pesquise pelo nome ou categoria de filmei"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link to={"/Register"}>
          <ButtonAdd>Cadastrar</ButtonAdd>
        </Link>
      </View>
      <List>
        {filmes.map((filme) => (
          <Link to={`/Details/${filme.idfilme}`} key={filme.idfilme}>
            <MovieCard data={filme} />
          </Link>
        ))}
      </List>
    </Container>
  );
}
