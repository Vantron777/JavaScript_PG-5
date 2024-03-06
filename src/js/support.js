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
        img: './img/save-the-children@2x.png',
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: './img/project-hope@2x.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: './img/united24@2x.png',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: './img/international-medical-corps@2x.png',
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: './img/medicins-sans-frontieres@2x.png',
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: './img/razom@2x.png',
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: './img/action-against-hunger@2x.png',
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: './img/world-vision@2x.png',
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: './img/serhiy-prytula-charity-foundation@2x.png',
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
    img.src = charity.img;
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

const buttonDown = document.createElement('button');
buttonDown.classList.add('btn-s');
buttonDown.innerHTML = '<svg class="icon-s arrow-s" width="20" height="13" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';

buttonDownContainer.appendChild(buttonDown);
parentElement.appendChild(buttonDownContainer);

// Додаємо обробник подій для кнопки

buttonDown.addEventListener('click', () => {
    const wrapper = document.querySelector('.swiper-wrapper');
    const button = document.querySelector('.btn-s');
    
    
    if (wrapper.scrollTop + wrapper.clientHeight >= wrapper.scrollHeight) {
        
        button.style.transform = 'rotate(180deg)';
    } else {
        button.style.transform = 'rotate(180deg)';
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
