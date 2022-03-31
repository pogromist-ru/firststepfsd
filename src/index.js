"use strict";

import './styles/index.scss';
import $ from 'jquery';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}
importAll(
    require.context(
        "./components",
        true,
        /\.(css|scss|jpg|png|svg|ico|xml|mp4|js)$/
    )
);



$('.block').html('jQuery is working')















// Описание require и require.context - https://webpack.js.org/guides/dependency-management/
// Импорт scss поштучно
/*
require("./components/header/header.scss");  // или: import './components/header/header.scss';
*/


// Импорт js в компонентах, в js уже прописываем import './header.scss';
/*
function importAll(r) {
    return r.keys().forEach(r);
}
importAll(require.context('./components', true, /\.js$/));
*/


// Импорт сразу js, scss и всего прочего
/*
function importAll(resolve) {
    resolve.keys().forEach(resolve);
}
importAll(
    require.context(
        "./components",
        true,
        /\.(css|scss|jpg|png|svg|ico|xml|mp4|js)$/
    )
);
*/