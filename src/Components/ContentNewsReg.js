import React from 'react';
import './../css/contentNews.css';


const ContentNewsReg = () => {

    return (
        <div className='content-news'>
            <div className="line">
                <h4>Ярославль</h4>
                <div className="column1">
                    <ContentCardNews1 />
                </div>
                <div className="column2">
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                </div>
            </div>
            <div className="line">
                <h4>Происшествия</h4>
                <div className="column2">
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                </div>
                <h4>Экономика</h4>
                <div className="column2">
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                </div>
                <h4>Спорт</h4>
                <div className="column2">
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                </div>
                <h4>Здоровье</h4>
                <div className="column2">
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                    <ContentCardNews2 />
                </div>
            </div>

        </div>
    )
}

const ContentCardNews1 = () => {

    return (
        <div>
            <div className="column1-post">
                <div className="column1-post-img">
                </div>
                <div className="column1-post-text">
                    <div className="column1-post-text-data">
                        05.04.2018<p>15:58</p>
                    </div>
                    <div className="column1-post-text-header">
                        <h1>Посол назвал условия для признания Россией результатов </h1>
                    </div>
                    <div className="column1-post-text-article">
                        <p>ЛОНДОН.Москва признает результаты расследования инцидента с отравлением Скрипалей, проведенного силами ОЗХО, если они будут верифицированы международным сообществом. Такое заявление </p>
                    </div>
                    <div className="column1-post-text-source">
                        Яндекс Новости
                            </div>
                    <div className="column1-post-text-views">
                        222 просмотра
                    </div>
                </div>
            </div>
        </div>


    )
}

const ContentCardNews2 = () => {

    return (

        <div className="column1-post2">
            <div className="column1-post-img2">
            </div>
            <div className="column1-post-text2">
                <div className="column1-post-text-data">
                    05.04.2018<p>15:58</p>
                </div>
                <div className="column1-post-text-header2">
                    <h1>Посол назвал условия для признания Россией результатов </h1>
                </div>
                <div className="column1-post-text-source">
                    Яндекс Новости
                            </div>
                <div className="column1-post-text-views2">
                    222 просмотра
                    </div>
            </div>
        </div>



    )
}


export default ContentNewsReg;