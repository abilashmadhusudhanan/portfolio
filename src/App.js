import styles from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Education from './pages/Education';
import Experience from './pages/Experience';
import About from './pages/About';
import NavBar from './util/NavBar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>Abilash Madhusudhanan</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate replace to='/about' />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;