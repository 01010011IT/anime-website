import { useContext } from "react"
import { useParams } from "react-router"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/oneanime.module.css"

function OneAnime() {
  const { animeId } = useParams()

  const { animes } = useContext(AnimeContext)

  const oneAnime = animes.find(anime => anime.mal_id == animeId)

  if (!oneAnime) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className={Styles.background}></div>
      <div className={Styles.container}>
        <img src={oneAnime.image_url} className={Styles.photo} />
        <p className={Styles.text}>{oneAnime.title}</p>

        <h3>
          <a href={oneAnime.url} className={Styles.btnlink}>
            watch
          </a>
        </h3>
        <img
          className={Styles.image}
          src="https://i.pinimg.com/564x/7c/74/b9/7c74b9d5e416d036fc5614665a137fc0.jpg"
          alt=""
        />
      </div>
    </>
  )
}

export default OneAnime
