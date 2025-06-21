import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function CpuForm({ isNew = false }) {
    const { id } = useParams(); // gets :id from URL
    const navigate = useNavigate();

    const [cpu, setCpu] = useState({
        brand: '',
        model: '',
        clockSpeed: '',
        cores: '',
        threads: '',
        tdp: '',
        price: '',
        socket: { id: '' }
    });
    const [sockets, setSockets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/sockets').then(res => setSockets(res.data));

        if (!isNew && id) {
            axios.get(`http://localhost:8080/api/cpus/${id}`).then(res => setCpu(res.data));
        }
    }, [id, isNew]);

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'socket') {
            setCpu({ ...cpu, socket: { id: value } });
        } else {
            setCpu({ ...cpu, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cpuData = isNew ? { ...cpu } : cpu;

        if (!cpu.brand || !cpu.model || !cpu.socket?.id){
            alert('Please fill in all required fields.');
            return;
        }

        const method = isNew ? 'post' : 'put';
        const url = isNew ? '/api/cpus' : `/api/cpus/${id}`;
        axios[method](`http://localhost:8080${url}`, cpuData)
            .then(() => navigate('/'));
    };

    return (
        <div className="container">
            <h1>{isNew ? 'Add CPU' : 'Edit CPU'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Brand</label>
                    <input name="brand" value={cpu.brand || ''} onChange={handleChange} placeholder="Brand" />
                </div>

                <div>
                    <label>Model</label>
                    <input name="model" value={cpu.model || ''} onChange={handleChange} placeholder="Model" />
                </div>
                <div>
                    <label>Clock Speed (GHz)</label>
                    <input name="clockSpeed" value={cpu.clockSpeed || ''} onChange={handleChange} placeholder="Clock Speed (GHz)" type="number" />
                </div>
                <div>
                    <label>Cores</label>
                    <input name="cores" value={cpu.cores || ''} onChange={handleChange} placeholder="Cores" type="number" />
                </div>
                <div>
                    <label>Threads</label>
                    <input name="threads" value={cpu.threads || ''} onChange={handleChange} placeholder="Threads" type="number" />
                </div>
                <div>
                    <label>TDP (W)</label>
                    <input name="tdp" value={cpu.tdp || ''} onChange={handleChange} placeholder="TDP (W)" type="number" />
                </div>
                <div>
                    <label>Price (EUR)</label>
                    <input name="price" value={cpu.price || ''} onChange={handleChange} placeholder="Price (EUR)" type="number" />
                </div>
                <div>
                <label>Socket</label>
                <select name="socket" value={cpu.socket.id} onChange={handleChange}>
                    <option value="">Select socket</option>
                    {sockets.map(socket => (
                        <option key={socket.id} value={socket.id}>{socket.name}</option>
                    ))}
                </select>
                </div>

                <button type="submit">{isNew ? 'Add CPU' : 'Save Changes'}</button>
            </form>
        </div>
    );
}

export default CpuForm;
