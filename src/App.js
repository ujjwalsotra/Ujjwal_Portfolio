import {Routes , Route} from 'react-router-dom'
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
