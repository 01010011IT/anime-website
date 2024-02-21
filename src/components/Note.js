import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import { Button, Col, Form, Modal } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import Styles from "../style/Profile.module.css"
function Note() {
  const { addNote } = useContext(AnimeContext)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <button onClick={handleShow} className={Styles.btnAdd}>
        <FontAwesomeIcon icon={faPencilAlt} /> Add Note
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={Styles.modalTitle}>NOTE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className=" text-white me-5 ms-5" onSubmit={e => addNote(e)}>
            <Form.Group as="Row" className="mb-3" controlId="formBasicEmail">
              <Form.Label className={Styles.modalTitle}>Title:</Form.Label>
              <Col md="6">
                <Form.Control type="text" name="title" />
              </Col>
            </Form.Group>

            <Form.Group as="Row" className="mb-3" controlId="formBasicPassword">
              <Col>
                <Form.Label className={Styles.episode}>Episode:</Form.Label>
              </Col>
              <Col md="6">
                <Form.Control type="number" name="episode" />
              </Col>
            </Form.Group>
            <button className={Styles.moduleButton} onClick={handleClose} type="submit">
              Add
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  )
}

export default Note
