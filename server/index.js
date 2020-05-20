const parsePost = require('./parsePost');
const elems = require('./config');

parsePost(
    'https://yarnovosti.com/news/pervye-lica-regiona-okazalis-vnizu-reytinga-upominaemosti-v-smi/',
    elems.yarnovosti
);


//Config
// const elems = {
//     yarnovosti: {
//         title: '.listHeader',
//         image: '.img img',
//         text: '.fullWidth  p'
//     }
// };

//Начальная функция
// function regioninform() {
//     unirest.get('https://yarnovosti.com/news/v-yaroslavle-zakroyut-na-karantin-travmatologicheskoe-otdelenie-solovevskoy-bolnicy/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews').end(function (response) {

//         const body = response.body;
//         const $ = cheerio.load(body);

//         const title = $('.listHeader').text().trim();
//         const image = $('.img img').attr('src');
//         const text = $('.fullWidth  p').text().trim();

//         const post = {
//             title: title,
//             image: image,
//             text: text
//         };

//         // console.log(post);
//     });
// }

// regioninform();


