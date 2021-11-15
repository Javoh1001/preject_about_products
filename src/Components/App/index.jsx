import '../../App.css';
import Navbar from '../Navbar';
import SearchMenu from './SearchMenu';
import {Container,Ordered, TopMenu} from './style'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Container>
        <Router>
           <Ordered>
              <Navbar />
              <SearchMenu/>
           </Ordered>
            
            <Routes>
              <Route />
            </Routes>
        </Router>
        
      </Container>

    </>
  );
}

export default App;
