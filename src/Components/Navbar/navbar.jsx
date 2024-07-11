import './navbar.css';
const navbar = () =>{
    return (
        <nav className="navbar container">
            <div className="nav-style container">
                <h4>Start Bootstrap</h4>
                <div className="btn btn-primary btn-lg"><a className='anch' href="#signup-page" rel='noreferrer'>Sign Up</a></div>
            </div>
        </nav>
    );
}

export default navbar;