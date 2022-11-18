import { Link } from 'react-router-dom';

import './Footer.scss';

export default () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    );
};
