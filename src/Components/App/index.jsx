import '../../App.css';
import Navbar from '../Navbar';
// import SearchMenu from './SearchMenu';
import Buyrutmalar from '../../Pages/Buyrutmalar';
import Maxsulotlar from '../../Pages/Maxsulotlar';
import {Container,Ordered,NavOrder} from './style'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Container>
        <Router>
             <NavOrder>
                <Navbar />
                <Ordered>
                {/* <SearchMenu/> */}
                    <Routes>
                        <Route path="/" element={<Buyrutmalar />} />
                        <Route path="/maxsulotlar" element={<Maxsulotlar />} />
                    </Routes>
                </Ordered>
             </NavOrder>
        </Router>
        
      </Container>

    </>
  );
}

export default App;
