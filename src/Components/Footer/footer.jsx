import './footer.css';

const footer = () =>{
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-3 mb-lg-0 text-center text-lg-start">
                        <ul className='ul-items'>
                            <li><a href="https://">About</a></li>
                            <li><a href="https://">Contact</a></li>
                            <li><a href="https://">Terms of Use</a></li>
                            <li><a href="https://">Privacy Policy</a></li>
                        </ul>
                        <span>&copy;Your Website 2023.All Rights Reserved.</span>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end">
                        <ul className='ul-items'>
                            <li><i className="bi bi-facebook fs-3"></i></li>
                            <li><i className="bi bi-twitter fs-3"></i></li>
                            <li><i className="bi bi-instagram fs-3"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;