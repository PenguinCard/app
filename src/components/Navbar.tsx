import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar:React.FC = () => {
    return (
        <div className="flex-column p-3 text-white bg-dark vh-100" style={{ width: "20%"}}>
            <ul className="nav nav-pills flex-column">
                <li className="nav-item"><Link to="/test">test</Link></li>
                <hr/>
                <li className="nav-item"><Link to="/login">login</Link></li>
                <hr/>
            </ul>
        </div>
    )
}

export default Navbar
