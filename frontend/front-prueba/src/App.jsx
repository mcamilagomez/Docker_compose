import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [noteId, setNoteId] = useState('');
    const [note, setNote] = useState('');
    const [response, setResponse] = useState('');

    const handleSignup = async () => {
        try {
            const res = await axios.post('http://localhost/auth/signup', {
                username,
                password
            });
            setResponse(res.data.message);
        } catch (error) {
            setResponse(error.response.data.message);
        }
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost/auth/login', {
                username,
                password
            });
            setResponse(res.data.message);
        } catch (error) {
            setResponse(error.response.data.message);
        }
    };

    const handleCreateNote = async () => {
        try {
            const res = await axios.post('http://localhost/notes/note', {
                idEstudiante: parseInt(noteId),
                notaEstudiante: parseInt(note)
            });
            setResponse(res.data.message);
        } catch (error) {
            setResponse(error.response.data.message);
        }
    };

    return (
        <div className="app-container">
            <div className="form-container">
                <h2>Ingrese su registro</h2>
                <input 
                    type="text" 
                    placeholder="Usuario" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button onClick={handleSignup}>Registrarse</button>
            </div>
            <div className="form-container">
                <h2>Para iniciar sesión</h2>
                <input 
                    type="text" 
                    placeholder="Usuario" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button onClick={handleLogin}>Iniciar Sesión</button>
            </div>
            <div className="form-container">
                <h2>Para crear la nota</h2>
                <input 
                    type="text" 
                    placeholder="ID Estudiante" 
                    value={noteId} 
                    onChange={(e) => setNoteId(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Nota" 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)} 
                />
                <button onClick={handleCreateNote}>Crear Nota</button>
            </div>
            <div className="response-container">
                <h2>Output</h2>
                <p>{response}</p>
            </div>
        </div>
    );
}

export default App;