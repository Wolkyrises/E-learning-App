
import Courses from './Components/Courses/Courses'
import CourseDetails from './Components/Courses/CourseDetails'
import Login from './Components/Login/Login'
import Quiz from './Components/Quiz/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
import '../src/css/Login.css'
import '../src/css/Courses.css'
import '../src/css/Quiz.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'



function App() {

  return (
    
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://fontmeme.com/permalink/211128/f80679423ec1bf9d1a192e050aaf76ec.png" alt="police-game-of-squids" border="0"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">REACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">JavaScript</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
      </ul>
      <span class="navbar-text">
        Bienvenue sur la plateforme 
      </span>
    </div>
  </div>
</nav>

  
    <br />

    
    <div id="app-container">
      
        <h1>
        <img src="https://fontmeme.com/permalink/211125/dc40bc7b68c41d7382df9dd4aa96d56e.png" alt="police-patriot-behalf-studio" border="0"/>
        </h1>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/courses' exact element={<Courses/>}  />
              <Route path={'/course/:id'} exact element={<CourseDetails/>} />
              <Route path={'/course/:id/quiz'} exact element={<Quiz/>} />
          </Routes>
        </BrowserRouter>
        
    </div>

    

    </>
  
  );

  

}

export default App;

