import { MovieCard } from "../../components/MovieCard";
import { Link } from "react-router-dom";

import { Container, Title, Input, List } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FilmDTO } from "../../dtos/FilmDTO";


export function Home() {
  const [filmes, setFilmes] = useState<FilmDTO[]>([]);
  const [loading, setLoading] = useState(true);

  async function getFilmes() {
    try {
      const response = await api.get("http://192.168.4.4:3333/filmes");
      setFilmes(response.data);
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
      <Input placeholder="digite aqui" />
      <List>
        <Link to={"/Details"}>
        {filmes.map((filme) => (
            <MovieCard key={filme.idfilme} data={filme} />
          ))}
        </Link>
      </List>
    </Container>
  );
}
