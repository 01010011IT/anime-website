import { Route, Routes, useNavigate } from "react-router-dom"
import Navbaritem from "./components/Navbaritem"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import axios from "axios"
import { useState, useEffect } from "react"
import AnimeContext from "./utils/AnimeContext"
import Anime from "./pages/Anime"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import OneAnime from "./pages/OneAnime"
import "./App.css"

function App() {
  const [animes, setAnime] = useState([])
  const [profile, setProfile] = useState(null)
  const [likes, setLikes] = useState([])
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [])
  const navigate = useNavigate()

  //profile
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.projectToken,
        },
      })
      setProfile(response.data)
      getLike()

      console.log("profile:", profile)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //puplic API
  const getAnime = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v3/top/anime")
      setAnime(response.data.top)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //use Effict
  useEffect(() => {
    getAnime()
    getLike()
    // setNotes(JSON.parse(localStorage.notes))
    if (localStorage.projectToken) {
      getProfile()
    }
  }, [])

  //register
  const signup = async e => {
    e.preventDefault()
    const form = e.target
    try {
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      getAnime()
      navigate("/login")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const login = async e => {
    e.preventDefault()
    const form = e.target
    try {
      const userBody = {
        password: form.elements.password.value,
        email: form.elements.email.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)
      localStorage.projectToken = response.data
      getAnime()
      getProfile()
      getLike()
      navigate("/")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //logout
  const logout = () => {
    localStorage.removeItem("projectToken")
  }
  //private API
  //-function like- to post item from public API to private
  const like = async (e, id) => {
    console.log(id)
    try {
      const animeFound = animes.find(anime => anime.mal_id === id)

      const likeBody = {
        title: animeFound.title,
        image: animeFound.image_url,
        url: animeFound.url,
      }
      console.log(likeBody)
      await axios.post(`https://vast-chamber-06347.herokuapp.com/api/v2/anime-725/items`, likeBody, {
        headers: {
          Authorization: localStorage.projectToken,
        },
      })
      getProfile()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //get
  const getLike = async () => {
    try {
      const response = await axios.get(`https://vast-chamber-06347.herokuapp.com/api/v2/anime-725/items`, {
        headers: {
          Authorization: localStorage.projectToken,
        },
      })
      setLikes(response.data)

      console.log(likes)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //delete like
  const deleteLike = async id => {
    try {
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/anime-725/items/${id}`, {
        headers: {
          Authorization: localStorage.projectToken,
        },
      })
      getAnime()
      getProfile()
      getLike()
      console.log("delete success")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  ////////////////////////// NOTE
  const addNote = e => {
    e.preventDefault()
    const form = e.target
    console.log("form", form)
    const title = form.elements.title.value
    const episode = form.elements.episode.value
    console.log(title)
    console.log(episode)
    const newNote = { title, episode }
    console.log(newNote)
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
    localStorage.notes = JSON.stringify(newNotes)
    console.log(notes)
  }

  const deleteNote = indexToRemove => {
    const newNotes = notes.filter((note, index) => {
      return index !== indexToRemove
    })

    setNotes(newNotes)
    localStorage.notes = JSON.stringify(newNotes)
  }
  console.log(notes)
  //context value
  const store = {
    animes: animes,
    signup: signup,
    login: login,
    logout: logout,
    getProfile: getProfile,
    profile: profile,
    like: like,
    likes: likes,
    deleteLike: deleteLike,
    addNote: addNote,
    notes: notes,
    deleteNote: deleteNote,
  }
  return (
    <AnimeContext.Provider value={store}>
      <Navbaritem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/animes" element={<Anime />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/one-anime/:animeId" element={<OneAnime />} />
      </Routes>
    </AnimeContext.Provider>
  )
}

export default App
