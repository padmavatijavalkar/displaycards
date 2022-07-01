import './SocialCard.css';

import Email from './Email';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                
                <Email text={userData.email} type="email"/>
                
                
                <div className="card__image" ><img src={userData.picture.medium}/></div>
                <ul>
                    <li>Active</li>
                </ul>
                
            </div>
            <div className="edit">
            <button >edit</button>
            </div>
        </div>
    )
};

export default SocialCard;