const servicesData = [
    {
        img: 'images/service_images/img1.png',
        title: 'Flight Booking',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
    },
    {
        img: 'images/service_images/img2.png',
        title: 'HOTEL & RESORT BOOKING',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
    },
    {
        img: 'images/service_images/img3.png',
        title: 'FAMILY TRIP PLANNER',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
    },
    {
        img: 'images/service_images/img4.png',
        title: 'CRUISE TOUR',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
    },
    {
        img: 'images/service_images/img5.png',
        title: 'FIRE CAMP',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
    },
    {
        img: 'images/service_images/img6.png',
        title: 'CORPORATE HOLIDAYS',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'
    }
]


const bgImage = [
    {
        img: 'images/bannerBackground/img1.png'
    },
    {
        img: 'images/bannerBackground/img2.png'
    },
    {
        img: 'images/bannerBackground/img3.png'
    },
    {
        img: 'images/bannerBackground/img4.png'
    },
    {
        img: 'images/bannerBackground/img5.png'
    }
]

const happyTravelersData = [
    {
        img1: 'images/happy_travelers/traveler1.png',
        name: 'Ribeca Singh',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard',
        img2: 'images/happy_travelers/forma1.png'
    },
    {
        img1: 'images/happy_travelers/traveler2.png',
        name: 'Jimmy dean',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard',
        img2: 'images/happy_travelers/forma1.png'
    },
    {
        img1: 'images/happy_travelers/traveler3.png',
        name: 'Theodule Terer',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard',
        img2: 'images/happy_travelers/forma1.png'
    }
]


let currentImg = 0;

rightArrow.addEventListener('click', function(){
    currentImg++;
    if(currentImg > bgImage.length - 1){
        currentImg = 0;
    }
    let newImg = bgImage[currentImg];
    bannerBackground.style.backgroundImage = "url('images/bannerBackground/color.png'),url(" +newImg.img+")";
})


leftArrow.addEventListener('click', function(){
    currentImg--;
    if(currentImg < 0){
        currentImg = bgImage.length - 1;
    }
    let newImg = bgImage[currentImg];
    bannerBackground.style.backgroundImage = "url('images/bannerBackground/color.png'),url(" +newImg.img+")";
})


/* create our services */
let services = document.querySelector('.services');
servicesData.map((item) => {

    const service = document.createElement('div');
    services.appendChild(service);
    service.classList.add('modal')

    const modal = document.createElement('div');
    service.appendChild(modal);
    modal.classList.add('service')

    const serviceImg = document.createElement('img');
    modal.appendChild(serviceImg);
    serviceImg.src = item.img;

    const serviceTitle = document.createElement('h1');
    modal.appendChild(serviceTitle);
    serviceTitle.textContent = item.title;

    const serviceText = document.createElement('p');
    modal.appendChild(serviceText);
    serviceText.textContent = item.text;
});

/* modal */
services.addEventListener('click', function(e){
    let parent = e.target.parentElement;
    let grandParenet = parent.parentElement
    grandParenet.classList.toggle('active');
})


/* create happy travelers */
let bannerBackground = document.querySelector('.banner_background');
let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');

let travelers = document.querySelector('.travelers');
happyTravelersData.map((item) => {

    const traveler = document.createElement('div');
    travelers.appendChild(traveler);
    traveler.classList.add('traveler');

    const travelerImg1 = document.createElement('img');
    traveler.appendChild(travelerImg1);
    travelerImg1.src = item.img1;
    travelerImg1.classList.add('traveler_img');
    
    const travelerName = document.createElement('h1');
    traveler.appendChild(travelerName);
    travelerName.textContent = item.name;

    const travelerInfo = document.createElement('p');
    traveler.appendChild(travelerInfo);
    travelerInfo.textContent = item.info;

    const travelerImg2 = document.createElement('img');
    traveler.appendChild(travelerImg2);
    travelerImg2.src = item.img2;
    travelerImg2.classList.add('traveler_forma');
});


/* ---- navbar ---- */
let header = document.querySelector('.header');

let ul_container = document.querySelector('.ul_container');
let btn_bar = document.querySelector('.btn_bar');
let navbar_ul = document.getElementById('navbar_ul');
btn_bar.addEventListener('click', function(){
    let ul_containerHeight = ul_container.getBoundingClientRect().height;
    let ulHeight = navbar_ul.getBoundingClientRect().height;
    if (ul_containerHeight === 0) {
        ul_container.style.height = `${ulHeight}px`;
    } else {
        ul_container.style.height = 0;
    }
    btn_bar.classList.toggle('active');
});




window.addEventListener('scroll', function(){
    let scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;
    if(scrollHeight > headerHeight){
        header.classList.add('header_fixed');
    }
    else{
        header.classList.remove('header_fixed');
    }
});

let links = document.querySelectorAll('.link');
links.forEach((link) => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        ul_container.style.height = 0;

        let id = e.currentTarget.getAttribute('href').slice(1);
        let element = document.getElementById(id);

        const headerHeight = header.getBoundingClientRect().height;
        const navbar_height = ul_container.getBoundingClientRect().height;
        let fixedNav = header.classList.contains("header_fixed");
        let position = element.offsetTop-headerHeight;

        if (!fixedNav) {
            position = position - headerHeight;
          }
          if (headerHeight >= 80) {
            position = position + navbar_height;
          }
        btn_bar.classList.remove('active');
        window.scrollTo({
            top:position,
        });

    })
})


