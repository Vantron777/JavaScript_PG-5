const parentElement = document.querySelector('.support.container-s');

if (!parentElement) {
    console.error("Parent container not found.");
}

const perPage = 9;
let currentCharityIndex = 0;

const charities = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '../img/support/save-the-children.png',
    resolution: '../img/support/save-the-children@2x.png',
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
      img: '../img/support/project-hope.png',
        resolution: '../img/support/project-hope@2x.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
      img: '../img/support/united.png',
        resolution: '../img/support/united24@2x.png',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: '../img/support/international-medical-corps.png',
        resolution: '../img/support/international-medical-corps@2x.png',
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
      img: '../img/support/medicins-sans-frontieres.png',
        resolution: '../img/support/medicins-sans-frontieres@2x.png',
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
      img: '../img/support/razom.png',
        resolution: '../img/support/razom@2x.png',
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: '../img/support/action-ageinst-hunger.png',
        resolution: '../img/support/action-against-hunger@2x.png',
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
      img: '../img/support/world-vision.png',
        resolution: '../img/support/world-vision@2x.png',
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
      img: '../img/support/sergiy-prytula.png',
        resolution: '../img/support/serhiy-prytula-charity-foundation@2x.png',
    },
];

const swiperContainer = document.createElement('div');
swiperContainer.classList.add('swiper-container');

const swiperWrapper = document.createElement('div');
swiperWrapper.classList.add('swiper-wrapper');
swiperWrapper.id = 'swiper-wrapper';

function createListItem(charity) {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    const charityIndex = (currentCharityIndex + 1).toString().padStart(2, '0');

    const link = document.createElement('a');
    link.classList.add('link-s');
    link.href = charity.url;
    link.target = '_blank';

    const img = document.createElement('img');
    img.classList.add('img-s');
    img.setAttribute('srcset', `${charity.img}, ${charity.resolution} 2x`);
    img.alt = charity.title;

    link.appendChild(img);
    
    const charityIndexSpan = document.createElement('span');
    charityIndexSpan.classList.add('charity-index');
    charityIndexSpan.textContent = charityIndex;

    swiperSlide.appendChild(charityIndexSpan);
    swiperSlide.appendChild(link);

    swiperWrapper.appendChild(swiperSlide);

    currentCharityIndex++;
}

charities.forEach(charity => {
    createListItem(charity);
});

swiperContainer.appendChild(swiperWrapper);

parentElement.appendChild(swiperContainer);

// Тепер ми можемо додати кнопку і встановити для неї обробник подій

const buttonDownContainer = document.createElement('div');
buttonDownContainer.classList.add('button-con');

const checkboxLabel = document.createElement('label');
checkboxLabel.classList.add('container-btn');
checkboxLabel.classList.add('btn-s');



const checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.checked = true;
checkboxInput.setAttribute('hidden', true); 

const chevronSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
chevronSvg.setAttribute('viewBox', '0 0 512 512');
chevronSvg.setAttribute('height', '1em');
chevronSvg.classList.add('chevron-down');
chevronSvg.innerHTML = '<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>';

checkboxLabel.appendChild(checkboxInput);
checkboxLabel.appendChild(chevronSvg);
buttonDownContainer.appendChild(checkboxLabel);
parentElement.appendChild(buttonDownContainer);

// Додаємо обробник подій для кнопки

checkboxInput.addEventListener('change', () => {
    const wrapper = document.querySelector('.swiper-wrapper');
    const button = document.querySelector('.chevron-down');
    
    if (checkboxInput.checked) {
        button.style.transform = '';
    } else {
        button.style.transform = 'rotate(-180deg)';
    }
  
    const scrollDirection = wrapper.scrollTop <= 0 ? 'down' : 'up';
    
    if (scrollDirection === 'down') {
        
        if (wrapper.scrollTop + wrapper.clientHeight >= wrapper.scrollHeight) {
           
            wrapper.scrollTop -= 3 * document.querySelector('.swiper-slide').offsetHeight;
        } else {
           
            wrapper.scrollTop += 3 * document.querySelector('.swiper-slide').offsetHeight;
        }
    } else {
        
        if (wrapper.scrollTop <= 0) {
            wrapper.scrollTop += 3 * document.querySelector('.swiper-slide').offsetHeight;
        } else {
            wrapper.scrollTop -= 3 * document.querySelector('.swiper-slide').offsetHeight;
        }
    }
});
