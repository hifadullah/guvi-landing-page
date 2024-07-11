import './showcaseItem.css';

const showcaseItem = (props) => {
    const { eachItem } = props;
    return (
        <div className="row g-0">
            <div className={`col-lg-6 ${eachItem.imageOrder} showcase-image`} style={{ backgroundImage: `URL(${eachItem.imageUrl})` }}>

            </div>
            <div className={`col-lg-6 ${eachItem.textOrder} align-self-center`}>
                <div className="card card-style">
                    <h2 className="card-title">{eachItem.title}</h2>
                    <p className="card-text showcase-text">{eachItem.text}</p>
                </div>
            </div>
        </div>
    );
}

export default showcaseItem;