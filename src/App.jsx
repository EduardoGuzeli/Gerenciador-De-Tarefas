import {BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Focus from './pages/Focus';


const App = () => {
  return (
  
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/focus" element={<Focus/>}/>
        </Routes>

        <Footer />
      </Router>

      
  );
};

export default App;
