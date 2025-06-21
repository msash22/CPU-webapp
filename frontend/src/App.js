import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CpuList from './components/CpuList';
import CpuForm from './components/CpuForm';
import './App.css';
import SocketForm from "./components/SocketForm";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CpuList/>}/>
                <Route path="/cpu/:id" element={<CpuForm/>}/>
                <Route path="/cpu/new" element={<CpuForm isNew={true}/>}/>
                <Route path="/socket/new" element={<SocketForm isNew={true}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
