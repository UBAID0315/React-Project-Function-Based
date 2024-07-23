import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    let { mode, toggleStyle } = props;

    const handleToggleStyle = () => {
        console.log(mode)
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode === true ? 'dark' : 'light'} bg-${mode === true ? 'dark' : 'light'}`}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src="https://shorturl.at/YSNyC" alt="logo" className='logo' /> DNEWS</Link>

                    <div className="d-flex">
                        <Link onClick={() => { toggleStyle(), handleToggleStyle() }} className="dark-mode"><i style={{ color: mode === true ? 'white' : 'black' }} className={`fas fa-${mode === true ? 'sun' : 'moon'}`}></i></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/business" className="nav-link" aria-current="page">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/entertainment" className="nav-link" aria-current="page">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/general" className="nav-link" aria-current="page">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/health" className="nav-link" aria-current="page">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/science" className="nav-link" aria-current="page">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sports" className="nav-link" aria-current="page">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/technology" className="nav-link" aria-current="page">Technology & Games</Link>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
