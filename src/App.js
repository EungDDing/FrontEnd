import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Information from './screens/Information';
import NavbarElements from './components/Navbar/NavbarElements';
import BallpythonMain from './information_project/ballpython/ballpythonMain';
import CornsnakeMain from './information_project/corn snake/CornsnakeMain';
import CrestedGeckoMain from './information_project/crested gecko/crestedgeckoMain';
import LeopardGeckoMain from './information_project/leopard gecko/leopardgeckoMain';
import Diary from './screens/Diary';
import BallpythonAdoption from './information_project/ballpython/ballpythonAdoption';
import BallpythonAfter from './information_project/ballpython/ballpythonAfter';
import BallpythonEquipment from './information_project/ballpython/ballpythonEquipment';
import CommuMain from './component/Community/CommuMain';
import QnAPage from './component/QnA/QnAPage';
import TradePage from './component/Trade/TradePage';

function App() {
  return (
    <Router>
      <NavbarElements />
      <Routes>
        <Route path = "/" element = { <Home /> }/>
        <Route path = "/Information" element = { <Information /> }/>
        <Route path = "/Transaction" element = { <TradePage /> }/>
        <Route path = "/Quetions" element = { <QnAPage /> }/>
        <Route path = "/Community" element = { <CommuMain /> }/>
        <Route path = "/MyPage" element = { <Diary /> }/>
        <Route path = "/Information/BallpythonMain" element = { <BallpythonMain /> }/>
        <Route path = "/Information/BallpythonMain/BallpythonAdoption" element = { <BallpythonAdoption /> }/>
        <Route path = "/Information/BallpythonMain/BallpythonAfter" element = { <BallpythonAfter /> }/>
        <Route path = "/Information/BallpythonMain/BallpythonEquipment" element = { <BallpythonEquipment /> }/>
        <Route path = "/Information/CornsnakeMain" element = { <CornsnakeMain /> }/>
        <Route path = "/Information/CrestedGeckoMain" element = { <CrestedGeckoMain /> }/>
        <Route path = "/Information/LeopardGeckoMain" element = { <LeopardGeckoMain /> }/>  
       
      </Routes>
    </Router>
  );
}

export default App;
 