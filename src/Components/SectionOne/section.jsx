import React from 'react';
import Card from '../Card/Card'; // Correct import statement with the correct casing

const Section = () => {
    const cards = [
        {
            iconUrl: "https://png.pngtree.com/png-vector/20190721/ourlarge/pngtree-responsive-icon-for-your-project-png-image_1560795.jpg",
            title: "Fully Responsive",
            text: "This theme will look great on any device, no matter the size!"
        },
        {
            iconUrl: "https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-social-logo.png",
            title: "Bootstrap 5 Ready",
            text: "Featuring the latest build of the new Bootstrap 5 framework!"
        },
        {
            iconUrl: "https://icon-library.com/images/easy-icon-png/easy-icon-png-4.jpg",
            title: "Easy to Use",
            text: "Ready to use with your own content, or customize the source files!"
        }
    ];

    return (
        <div className="section-space">
            <div className="container mt-5 mb-5">
                <div className="card-sec row justify-content-center">
                    {cards.map((card, index) => {
                        return <Card sectionCard={card} key={index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Section;
