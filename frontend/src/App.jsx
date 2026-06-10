import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Hours from './pages/Hours';
import Tuition from './pages/Tuition';
import LetterToParents from './pages/LetterToParents';
import Apply from './pages/Apply';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/hours" element={<Hours />} />
            <Route path="/tuition" element={<Tuition />} />
            <Route path="/parents" element={<LetterToParents />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
