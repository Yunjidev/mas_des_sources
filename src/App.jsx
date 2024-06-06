/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Gallery from './Pages/Gallery/Gallery';
import Privaty from './Components/Footer/PrivacyPolicySection';
import Legal from './Components/Footer/LegalSection';
import NavBar from './Components/Navbar/Navbar';
import Hebergement from './Pages/Hebergement/Hebergement';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Tilleul from './Pages/Tilleul/Tilleul';
import Chataignier from './Pages/Chataignier/Chataignier';
import Chene from './Pages/Chene/Chene';
import Pin from './Pages/Pin/Pin';
import ChataignierRoom from './Pages/ChataignierRoom/ChataignierRoom';
import Pinede from './Pages/Pinede/Pinede';
import Camelia from './Pages/Camelia/Camelia';
import Rando from './Pages/Loisirs/Rando';
import Chateau from './Pages/Loisirs/Chateaux';
import Aquatique from './Components/LoisirsCards/Aquatique';
import ParcGrotte from './Pages/Loisirs/ParcGrotte';
function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/gallery" element={<MainLayout><Gallery /></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><Privaty /></MainLayout>} />
        <Route path="/legal" element={<MainLayout><Legal /></MainLayout>} />
        <Route path="/hebergement" element={<MainLayout><Hebergement /></MainLayout>} />
        <Route path="/hebergement/tilleul" element={<MainLayout><Tilleul /></MainLayout>} />
        <Route path="/hebergement/chataignier" element={<MainLayout><Chataignier /></MainLayout>} />
        <Route path="/hebergement/chene" element={<MainLayout><Chene /></MainLayout>} />
        <Route path="/hebergement/pin" element={<MainLayout><Pin /></MainLayout>} />
        <Route path="/hebergement/chataignier+chambre" element={<MainLayout><ChataignierRoom /></MainLayout>} />
        <Route path="/hebergement/pinede" element={<MainLayout><Pinede /></MainLayout>} />
        <Route path="/hebergement/camelia" element={<MainLayout><Camelia /></MainLayout>} />
        <Route path="/randonnée" element={<MainLayout><Rando /></MainLayout>} />
        <Route path="/chateaux-musées" element={<MainLayout><Chateau /></MainLayout>} />
        <Route path="/activités-aquatique" element={<MainLayout><Aquatique /></MainLayout>} />
        <Route path="/parc-grotte" element={<MainLayout><ParcGrotte /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
