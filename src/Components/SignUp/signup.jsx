import './signup.css';

const signUp = () => {
    return (
        <div className='signUp' id='signup-page'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 text-center">
                        <h2 className='text-white mb-3'>Ready to get started? Sign up now!</h2>
                        <div className="row">
                            <div className='col'>
                                <input placeholder='Email address' className='form-control form-control-lg' />
                            </div>
                            <div className='col-auto'>
                                <div className='btn btn-primary btn-lg'>Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default signUp;