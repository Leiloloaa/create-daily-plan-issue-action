const axios = require('axios');

// function getWisdom() {
// return axios
//     .get(
//         'https://www.fastmock.site/mock/db08798339cea16d6af5706cac68bc0a/Leiloloaa/getWisdom'
//     )
//     .then(res => {
//         let wisdom = res.data.wisdom;
//         item = wisdom[Math.floor(Math.random() * wisdom.length)];
//         return item
//     });
//     return dayjs().add('8', 'hour').format('YYYY-MM-DD');
// }
// item = getWisdom();
// console.log(item);

function getWisdom() {
    axios.get('https://v1.hitokoto.cn/?c=d&c=i&encode=json').then(res => {
        console.log(res.data.hitokoto);
        let result = res.data.hitokoto;
        return result;
    });
}

getWisdom();

// let saying = '';
// const https = require('https');

// https
//     .get(
//         'https://www.fastmock.site/mock/db08798339cea16d6af5706cac68bc0a/Leiloloaa/getWisdom',
//         resp => {
//             let data = '';

// A chunk of data has been recieved.
//             resp.on('data', chunk => {
//                 data += chunk;
//             });

// The whole response has been received. Print out the result.
//             resp.on('end', () => {
// console.log(JSON.parse(data));
//                 saying = JSON.parse(data).wisdom;
//             });
//         }
//     )
//     .on('error', err => {
//         console.log('Error: ' + err.message);
//     });

module.exports = {
    wisdom: [
        '佛说：相遇要善待，相别勿伤害',
        '你的工资不是和你的工作时间成正比，而是和你的不可替代性成正比',
        '所谓强者是既有意志，又能等待时机。——巴尔扎克《欧也妮·葛朗台》',
        '竹杖芒鞋轻胜马，一蓑烟雨任平生',
        '努力的意义在于：以后的日子里放眼望去全是自己喜欢的人和事',
        '星垂平野阔，月涌大江流',
        '一个人的意义不在于他的成就，而在于他所企求成就的东西',
        '灭六国者，非秦也，六国也',
        '南风知我意，吹梦到西洲',
        '为你明灯三千，为你花开满城，为你所向披靡',
        '人不是有机体的集合，是经历的集合'
    ]
};