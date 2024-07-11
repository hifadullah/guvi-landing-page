import './showCase.css';
import ShowcaseItem from '../ShowcaseItem/showcaseItem';

const showCase = (props) => {
    const {showcaseData} = props;
    // console.log(showCase);
    return (
        <div className="showcase">
            <div className="container-fluid">
                {showcaseData.map((eachItem, index) => {
                    return <ShowcaseItem eachItem = {eachItem} key = {index} />
                })}
            </div>
        </div>
    );
}

export default showCase;