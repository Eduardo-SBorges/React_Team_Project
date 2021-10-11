export default function () {

    const buttonHeart = document.getElementById('btn_heart');

    buttonHeart.addEventListener('click', () => {
        if(buttonHeart.querySelector('svg').classList.contains('favorite-heart')){
            buttonHeart.querySelector('svg').classList.remove('favorite-heart');
        } else {
            buttonHeart.querySelector('svg').classList.add('favorite-heart');
        }
    })
};