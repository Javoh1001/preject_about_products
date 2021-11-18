import Navbar from '../Navbar';
// import SearchMenu from './SearchMenu';
import Buyrutmalar from '../../Pages/Buyrutmalar';
import Maxsulotlar from '../../Pages/Maxsulotlar';
import Kategoriya from '../../Pages/Kategoriya';
import Filiallar from '../../Pages/Filiallar';
import Mijozlar from '../../Pages/Mijozlar';
import {Container,Ordered,NavOrder} from './style'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Global} from './style';

function App() {
  return (
    <>
    <Global />
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
                        <Route path="/mijozlar" element = {<Mijozlar />} />
                    </Routes>
                </Ordered>
             </NavOrder>
        </Router>
        
      </Container>

    </>
  );
}

export default App;
