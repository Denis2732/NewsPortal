import React from 'react';
import './../css/contentNews.css';
import ContentChat from './ContentChat';
import ContentAdvertisment from './ContentAdvertising';
import ContentNewsReg from './ContentNewsReg';

const RegionContent = () => {

    return (
        <div>
            <div className="content">
                <ContentNewsReg />
                <div className="content-column">
                    <ContentChat />
                    <ContentAdvertisment />
                </div>
            </div>
        </div>


    );
}

export default RegionContent;

