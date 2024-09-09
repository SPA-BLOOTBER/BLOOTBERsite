// Скрипт для баннера
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Смена слайдов каждые 5 секунд

// Показать первый слайд при загрузке страницы
showSlide(currentSlide);

// Скрипт для открытия и закрытия информации о проекте
function openProject(projectId) { 
    const projectDetail = document.getElementById('project-detail');
    const projectTitle = document.getElementById('project-title');
    const projectIcon = document.getElementById('project-icon');
    const projectDescription = document.getElementById('project-description');
    const projectScreenshots = document.getElementById('project-screenshots');
    const downloadLink = document.getElementById('download-link');

    const projectData = {
        'project1': {
            title: 'Floppa Run',
            icon: 'FloppaRun/ava.png',
            description: 'Описание проекта 1.',
            screenshots: ['FloppaRun/screenshot1.jpg', 'FloppaRun/screenshot2.jpg', 'FloppaRun/screenshot3.jpg', 'FloppaRun/screenshot4.jpg', 'FloppaRun/3DExperementinal.png',
                'FloppaRun/screenshot5.jpg', 'FloppaRun/screenshot6.jpg', 'FloppaRun/screenshot7.jpg', 'FloppaRun/screenshot8.jpg',
                'FloppaRun/screenshot9.jpg', 'FloppaRun/screenshot10.jpg', 'FloppaRun/screenshot11.jpg', 'FloppaRun/screenshot12.jpg',
                'FloppaRun/screenshot13.jpg', 'FloppaRun/screenshot14.jpg', 'FloppaRun/screenshot15.jpg',
            ],
            download: 'FloppaRun/Flopparun.apk'
        },
        'project2': {
            title: 'Multitoilet',
            icon: 'icon2.png',
            description: 'Описание проекта 2.',
            screenshots: ['screenshot2-1.jpg', 'screenshot2-2.jpg', 'screenshot2-3.jpg'],
            download: 'Multitoilet/Multitoilet.apk'
        },
        'project3': {
            title: 'Проект 3',
            icon: 'icon3.png',
            description: 'Описание проекта 3.',
            screenshots: ['screenshot3-1.jpg', 'screenshot3-2.jpg', 'screenshot3-3.jpg'],
            download: 'project3.zip'
        },
        'project4': {
            title: 'Проект 4',
            icon: 'icon4.png',
            description: 'Описание проекта 4.',
            screenshots: ['screenshot4-1.jpg', 'screenshot4-2.jpg', 'screenshot4-3.jpg'],
            download: 'project4.zip'
        }
    };

    const project = projectData[projectId];
    projectTitle.textContent = project.title;
    projectIcon.src = project.icon;
    projectDescription.textContent = project.description;
    projectScreenshots.innerHTML = '';
    project.screenshots.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Скриншот';
        projectScreenshots.appendChild(img);
    });

    downloadLink.href = project.download;

    projectDetail.style.display = 'block';
}

function closeProject() {
    const projectDetail = document.getElementById('project-detail');
    projectDetail.style.display = 'none';
}


// Скрипт для карты Google
function initMap() {
    const location = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = function() {
    showSlide(currentSlide);
};