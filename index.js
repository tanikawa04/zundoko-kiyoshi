'use strict';

module.exports = () => {
    const zundoko = ['ズン', 'ドコ'];
    const zunzunzunzundoko = 'ズンズンズンズンドコ';
    let text = '';

    while (!text.endsWith(zunzunzunzundoko)) {
        text = text + zundoko[~~(Math.random() * 2)];
    }

    return `${text}\nキ・ヨ・シ！`;
};
