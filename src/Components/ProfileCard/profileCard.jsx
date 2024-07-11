import './profileCard.css';

const profileCard = (props) => {
    const {eachProfile} = props;

    return (
        <div className="col-sm-7 col-lg-4">
            <div className="card">
                <img className='image-tag card-img-top' src={eachProfile.imageUrl} alt='' />
                <div className="card-body text-center">
                    <h4 className='card-title'>{eachProfile.name}</h4>
                    <p className='card-text profile-text'>{eachProfile.review}</p>
                </div>
            </div>
        </div>
    );
}

export default profileCard;