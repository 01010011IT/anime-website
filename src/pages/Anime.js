import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import AnimeCard from "../components/AnimeCard"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/Anime.module.css"

function Anime() {
  const { animes } = useContext(AnimeContext)

  return (
    <div className={Styles.bg}>
      <h1 className={Styles.h1}>ANIME LIST</h1>
      <Container>
        <Row xs={1} sm={2} md={4} className="mt-5 mx-auto">
          {animes.map(anime => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Anime
