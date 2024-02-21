import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Card, Col, Container, Row, Button } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/Profile.module.css"

function Likes(props) {
  const { likes, deleteLike } = useContext(AnimeContext)
  const { like } = props
  return (
    <>
      {/* {likes.map(like => ( */}
      <Col>
        <Card className="mt-3">
          <Card.Img variant="top" src={like.image} height="200px" />
          <Card.Body>
            <Card.Title>Name:{like.title}</Card.Title>
            <Card.Link href={like.url} className="text-decoration-none text-secondary me-5" className={Styles.link}>
              Watch
            </Card.Link>
            <button onClick={() => deleteLike(like._id)} key={like._id} className={Styles.removeLike}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </Card.Body>
        </Card>
      </Col>
      {/* ))} */}
    </>
  )
}

export default Likes
