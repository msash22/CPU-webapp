import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

function SocketForm() {
    const navigate = useNavigate();

    const [socket, setSocket] = useState({
        name: '',
        type: '',
        brand: '',
        description: ''
    });


    const handleChange = e => {
        const {name, value} = e.target;
        if (name === 'socket') {
            setSocket({...socket, socket: {id: value}});
        } else {
            setSocket({...socket, [name]: value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const socketData ={ ...socket };


        if (!socket.name) {
            alert('Please fill in all required fields.');
            return;
        }

        const method = 'post';
        const url = '/api/sockets';
        axios[method](`http://localhost:8080${url}`, socketData)
            .then(() => navigate('/'));
    };

    return (
        <div className="container">
            <h1>{'Add Socket'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input name="name" value={socket.name || ''} onChange={handleChange} placeholder="name"/>
                </div>

                <div>
                    <label>Brand</label>
                    <input name="brand" value={socket.brand || ''} onChange={handleChange} placeholder="Brand"/>
                </div>
                <div>
                    <label>Type</label>
                    <input name="type" value={socket.type || ''} onChange={handleChange}
                           placeholder="type" />
                </div>

                <div>
                    <label>Description</label>
                    <input name="description" value={socket.description || ''} onChange={handleChange}
                           placeholder="description" />
                </div>

                <button type="submit">{'Add Socket'}</button>
            </form>
        </div>
    );
}

export default SocketForm;