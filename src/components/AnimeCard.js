import { useContext } from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/Anime.module.css"
import { Link } from "react-router-dom"

function AnimeCard(props) {
  const { anime } = props
  const { like } = useContext(AnimeContext)

  return (
    <Col>
      <Card className="bg-light  ms-5 mb-5">
        <Link to={`/one-anime/${anime.mal_id}`}>
          <Card.Img variant="top" src={anime.image_url} height="180px" />
        </Link>
        <Card.Body>
          <Card.Text
            className="d-inline-block text-dark text-nowrap text-sm-left text-truncate font-weight-bold"
            style={{ width: 200 }}
          >
            {anime.title}
          </Card.Text>

          <Card.Link href={anime.url} className="text-dark d-block " className={Styles.text}>
            Watch
          </Card.Link>
          {localStorage.projectToken ? (
            <button onClick={e => like(e, anime.mal_id)} style={{ width: 60 }} className={Styles.btnLike}>
              like
            </button>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AnimeCard
