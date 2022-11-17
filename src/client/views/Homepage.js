import { useEffect } from 'react';

export default () => {
    useEffect(() => {
        document.title = 'Homepage';
    }, []);

    return (
        <div>
            <h1>Homepage</h1>
        </div>
    );
};
