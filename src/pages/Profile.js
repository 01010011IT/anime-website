import { useContext, useEffect, useState } from "react"
import { Card, Col, Container, Image, Row, Button, ButtonGroup, Alert, Spinner } from "react-bootstrap"
import Likes from "../components/Likes"
import Note from "../components/Note"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/Profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEraser } from "@fortawesome/free-solid-svg-icons"

function Profile() {
  //modal
  const { profile, likes, notes, deleteNote } = useContext(AnimeContext)

  if (!profile) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
  if (notes.length > 2) {
    notes.splice(0, 1)
  }
  const mylikes = likes.filter(like => like._user._id === profile._id)
  return (
    <>
      <Container className={Styles.div}>
        <Row>
          {/* <h1 className={Styles.title}>Profile:</h1> */}
          <Col>
            <Card style={{ height: 250, width: 600 }} className={Styles.card}>
              <Card.Body className={Styles.card}>
                <Row>
                  <Col xs={6} md={4}>
                    <Image src={profile.photo} height="150px" width="150px" className="m-3" roundedCircle />
                  </Col>
                  <Col>
                    <Card.Title className="mt-5">
                      {profile.firstName} {profile.lastName}
                    </Card.Title>
                    <Card.Text>{profile.email} </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {
            <Col className="ms-5">
              {/* <h1 className=" text-dark">Note:</h1> */}
              <Note />
              <Row>
                <>
                  {notes.map((note, index) => (
                    <>
                      <Col>
                        <div className={Styles.note}>
                          <div className={Styles.text}>
                            <h3>title: {note.title}</h3>
                            <h5>eposide: {note.episode}</h5>
                          </div>
                          <button className={Styles.button} onClick={() => deleteNote(index)}>
                            <FontAwesomeIcon icon={faEraser} />
                          </button>
                        </div>
                      </Col>
                    </>
                  ))}
                </>
              </Row>
            </Col>
          }
        </Row>
        <h3 className={Styles.favorite}>My Favorite:</h3>
        <Row className="m-5" xs={1} sm={2} md={4}>
          {mylikes.map(like => (
            <Likes like={like} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Profile
