import { useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/SignupAndLogin.module.css"
function Signup() {
  const { signup } = useContext(AnimeContext)
  return (
    <>
      <h1 className={Styles.title}> Sign up:</h1>
      <form onSubmit={signup} className="m-5">
        <Form.Group as="Row" className="mb-3">
          <Form.Label className="text-black">First Name</Form.Label>
          <Col md="6">
            <Form.Control type="text" name="firstName" placeholder="Enter your first name" required />
          </Col>
        </Form.Group>
        <Form.Group as="Row" className="mb-3">
          <Form.Label className="text-black">Last Name</Form.Label>
          <Col md="6">
            <Form.Control type="text" name="lastName" placeholder="Enter your last name" required />
          </Col>
        </Form.Group>
        <Form.Group as="Row" className="mb-3">
          <Form.Label className="text-black">Password</Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Col>
        </Form.Group>
        <Form.Group as="Row" className="mb-3">
          <Form.Label className="text-black">Email address</Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Col>
        </Form.Group>
        <Form.Group as="Row" className="mb-3">
          <Form.Label className="text-black">Photo Profile</Form.Label>
          <Col md="6">
            <Form.Control type="url" name="photo" placeholder="Enter your photo" required />
          </Col>
        </Form.Group>
        <button type="submit" className={Styles.signupButton}>
          SignUp
        </button>
      </form>
    </>
  )
}

export default Signup
