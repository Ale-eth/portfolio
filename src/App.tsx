import MainContainer from "./pages/home/components/mainContainer/MainContainer";
import MainAboutPage from "./pages/about/components/MainAboutPage";


import './App.css'
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import MainProjectsPage from "./pages/projects/MainProjectsPage";


function App() {

  return (
      <>
      <Routes>
        <Route path="/" element={ <MainContainer /> } />
        <Route path="about" element={ <MainAboutPage /> } />
        <Route path="projects" element={ <MainProjectsPage /> } />
      </Routes>
      </>

  )
}

export default App;
