import '../../App.css';
import Navbar from '../Navbar';
// import SearchMenu from './SearchMenu';
import Buyrutmalar from '../../Pages/Buyrutmalar';
import Maxsulotlar from '../../Pages/Maxsulotlar';
import Kategoriya from '../../Pages/Kategoriya';
import Filiallar from '../../Pages/Filiallar';
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
                        <Route path="/kategoryalar" element={<Kategoriya />} />
                        <Route path="/filiallar" element={<Filiallar />} />
                    </Routes>
                </Ordered>
             </NavOrder>
        </Router>
        
      </Container>

    </>
  );
}

export default App;
