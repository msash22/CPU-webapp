import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CpuList() {
    const [cpus, setCpus] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/cpus')
            .then(res => setCpus(res.data));
    }, []);

    return (
        <div className="container">
            <h1>CPU List</h1>
            <div className="cpu-list">
                {cpus.map(cpu => (
                    <div key={cpu.id} className="cpu-item">
                        <span>{cpu.brand} {cpu.model} - {cpu.socket.name}</span>
                        <Link to={`/cpu/${cpu.id}`}><button>Edit</button></Link>
                    </div>
                ))}
                <Link to="/cpu/new"><button>Add CPU</button></Link>
            </div>
        </div>
    );
}

export default CpuList;
// This component fetches a list of CPUs from the backend and displays them.