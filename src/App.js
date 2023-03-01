import { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import HomeRe from "./pages/HomeRe";
import PricingPolicy from "./pages/PricingPolicy";
import PricingPolicyRe from "./pages/PricingPolicyRe";
import { useMediaQuery } from 'react-responsive'
import AboutRe from "./pages/AboutRe";


function App() {
  const [request, setRequest] = useState('');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const handleValueGotten = val => {
    setRequest(()=>{return val});
  }
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={isTabletOrMobile ? <HomeRe value={request}/> : <Home value={request}/>} />
        <Route path="/about" element={isTabletOrMobile ? <AboutRe valueGotten={handleValueGotten}/> : <About valueGotten={handleValueGotten}/>} />
        <Route path="/price-policy" element={isTabletOrMobile ? <PricingPolicyRe valueGotten={handleValueGotten}/> : <PricingPolicy valueGotten={handleValueGotten}/>} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
