export default function () {

    const dropdown = document.querySelector('.certificates-opt');
    const liAdded = document.querySelector('.certificates-added');

    dropdown.addEventListener('click', () => {
        
        if(liAdded.classList.contains('hide')){
            liAdded.classList.remove('hide')
            liAdded.classList.add('show');
            dropdown.classList.add('certificates-border');
        } else {
            liAdded.classList.remove('show')
            liAdded.classList.add('hide');
            dropdown.classList.remove('certificates-border');

        }
    })

}