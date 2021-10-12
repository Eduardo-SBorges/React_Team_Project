export default function () {
    
    const clearInput = () => document.querySelector('.input-heart').value = ""; 
    const heartDefault = () => document.querySelector('#btn_heart').querySelector('svg').classList.remove('favorite-heart');
    const moreButton = document.querySelector('.button-more');
    const divMore = document.querySelector('.btn-more');
    const certificatesOpt = document.querySelector('.certificates-opt');
    const liFavoriteAdded = document.querySelector('.certificates-favorite');
    const liNormalAdded = document.querySelector('.certificates-normal');
    let messageError = document.createElement('span');
    const showMessage = () => {
        messageError.classList.add('message-error');
        divMore.appendChild(messageError);
    }
    let amountOfCertificates = 0;

    moreButton.addEventListener('click', () => {
        messageError.textContent = '';
        const favoriteHeart = document.querySelector('#btn_heart').querySelector('svg');
        const auxHeart = favoriteHeart.cloneNode(1);
        let inputValue = document.querySelector('.input-heart').value;        

        if(inputValue.length > 0){   
            if(amountOfCertificates == 0) {
                certificatesOpt.classList.remove('hide'); 
            }

            if(amountOfCertificates < 5){
                const li = document.createElement('li');
                const removeOption = document.createElement('span');
                const certificateText = document.createElement('span');
                certificateText.classList.add('text-limit');

                certificateText.textContent = ` ${inputValue}`;
                removeOption.textContent = 'X';
                removeOption.classList.add('remove-style');
                if(auxHeart.classList.contains('favorite-heart')) li.appendChild(auxHeart);

                li.appendChild(certificateText);
                li.appendChild(removeOption);

                if(auxHeart.classList.contains('favorite-heart')) liFavoriteAdded.appendChild(li);
                else liNormalAdded.appendChild(li);

                amountOfCertificates++;
                removeOption.addEventListener('click', () => {
                    removeOption.closest('li').remove();
                    amountOfCertificates--;
                    if(amountOfCertificates == 0) certificatesOpt.classList.add('hide'); 
                });
                heartDefault();
            }   

            else {
                messageError.textContent = 'The limit is 5 certificates.'
                showMessage();
            }
        }
        else {
            messageError.textContent = 'Empty certificate.'            
            showMessage();
        }
        clearInput();
    });

};

// fix li border
// fix space between
