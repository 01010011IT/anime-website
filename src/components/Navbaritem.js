import { useContext } from "react"
import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/navbar.module.css"
function NavbarItem() {
  const { logout } = useContext(AnimeContext)
  return (
    <navbar className={Styles.navbar}>
      {/* go back button */}
      <>
        <Link to="/" className="navbar-brand mt-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Anime_eye.svg"
            height="50px"
            className="me-2"
          />
          <span>
            <b>ANIME</b>
          </span>
        </Link>
        <ul>
          {localStorage.projectToken ? (
            <>
              <li className={Styles.li}>
                <Link to="/profile">Profile</Link>
              </li>
              <li className={Styles.li}>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={Styles.li}>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className={Styles.li}>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </>
    </navbar>
  )
}
export default NavbarItem
