import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default () => {
    useEffect(() => {
        document.title = 'Nicht Gefunden';
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <h1>404</h1>
            <h2>Nicht Gefunden</h2>

            <button onClick={() => navigate('/')}>Zurück</button>
        </div>
    );
};
