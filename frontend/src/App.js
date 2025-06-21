import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CpuList from './components/CpuList';
import CpuForm from './components/CpuForm';
import './App.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<CpuList />} />
          <Route path="/cpu/:id" element={<CpuForm />} />
          <Route path="/cpu/new" element={<CpuForm isNew={true} />} />
        </Routes>
      </Router>
  );
}

export default App;
