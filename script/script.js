import navigation from "./modules/navigation.js"
import favoriteHeart from './modules/certificates/favoriteHeart.js';
import preventButtons from './modules/preventButtons.js';
import addCertificates from './modules/certificates/addCertificates.js';
import showCertificates from './modules/certificates/showCertificates.js';

navigation() // Ativação da navegação entre Tabs.
feather.replace() // Para ativar as imagens dentro dos botões
favoriteHeart();
preventButtons();
addCertificates();
showCertificates();
