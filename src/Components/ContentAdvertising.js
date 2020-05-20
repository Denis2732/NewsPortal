import React from 'react';
import './../css/advertisment.css';



const ContentAdvertisment = () => {

    return (
        <div className='advert-content'>
            <AdvertismentCard />
            <AdvertismentCard />
            <AdvertismentCard />
            <AdvertismentCard />
            <AdvertismentCard />
        </div>
    )
}

const AdvertismentCard = () => {

    return (
        <div className="advert-card">
            <div className='center'>
                <div className='sentence'>Здесь может быть ваша реклама</div>
                <button class="ui button blue">Добавить рекламу</button>
            </div>

        </div>
    )
}

export default ContentAdvertisment;