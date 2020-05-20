import React from 'react';
import './../css/content.css';
import ContentIndex from './ContentIndex';
import ContentChat from './ContentChat';
import ContentAdvertisment from './ContentAdvertising';



const Content = () => {

    return (
        <div>
            <div className="content">
                <ContentIndex />
                <div className="content-column">
                    <ContentChat />
                    <ContentAdvertisment />
                </div>
            </div>
        </div>


    );
}




export default Content;