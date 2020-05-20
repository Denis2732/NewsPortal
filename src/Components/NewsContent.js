import React from 'react';
import './../css/content.css';


import ContentChat from './ContentChat';
import ContentAdvertisment from './ContentAdvertising';
import ContentNews from './ContentNews';



const NewsContent = () => {

    return (
        <div>
            <div className="content">
                <ContentNews />
                <div className="content-column">
                    <ContentChat />
                    <ContentAdvertisment />
                </div>
            </div>
        </div>


    );
}




export default NewsContent;