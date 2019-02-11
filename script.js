/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


/* Micro interactie 1 */

var likeButton = document.querySelector('button');

var likeHart = document.querySelector('section button img');

var navigatieButton = document.querySelector('a');

likeButton.addEventListener('click', function () {
    navigatieButton.classList.toggle('liked');
    if (likeHart.src.includes("images/heart.png")) {
        likeHart.src = "images/favorite-heart-button.png";
        navigatieButton.src ="images/navone.png";
    } else {
        likeHart.src = "images/heart.png";
        navigatieButton.src ="images/navzero.png";
    }
});
