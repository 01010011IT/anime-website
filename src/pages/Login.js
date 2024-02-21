import { useContext } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/SignupAndLogin.module.css"

function Login() {
  const { login } = useContext(AnimeContext)
  return (
    <>
      <h1 className={Styles.title}> Login:</h1>
      <Form className="mt-5 text-white me-5 ms-5" onSubmit={login}>
        <Form.Group as="Row" className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-black">Email address</Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Col>
        </Form.Group>

        <Form.Group as="Row" className="mb-3" controlId="formBasicPassword">
          <Col>
            <Form.Label className="text-black">Password</Form.Label>
          </Col>
          <Col md="6">
            <Form.Control type="password" name="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <button type="submit" className={Styles.loginButton}>
          Login
        </button>
      </Form>
    </>
  )
}

export default Login
