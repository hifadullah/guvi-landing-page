import ProfileCard from '../ProfileCard/profileCard';
import './profile.css';

const profile = (props) => {
    const {profileData} = props;
    return (
        <div className="profile-space">
            <div className="container">
                <h2 className='text-center mb-5'>What people are saying...</h2>
                <div className="row justify-content-center">
                    {profileData.map ((eachProfile, index) => {
                        return <ProfileCard eachProfile = {eachProfile} key = {index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default profile;