'use strict';

module.exports = function() {
    var zundoko = ['ズン', 'ドコ'];
    var zunzunzunzundoko = 'ズンズンズンズンドコ';
    var text = '';

    while (!text.endsWith(zunzunzunzundoko)) {
        text = text + zundoko[~~(Math.random() * 2)];
    }

    return text + '\nキ・ヨ・シ！';
};
