function openProject(projectId) {
    const projectDetail = document.getElementById('project-detail');
    const projectTitle = document.getElementById('project-title');
    const projectIcon = document.getElementById('project-icon');
    const projectDescription = document.getElementById('project-description');
    const projectScreenshots = document.getElementById('project-screenshots');
    const downloadLink = document.getElementById('download-link');

    // Пример данных проекта
    const projectData = {
        'project1': {
            title: 'Проект 1',
            icon: 'icon1.png',
            description: 'Описание проекта 1.',
            screenshots: ['screenshot1-1.jpg', 'screenshot1-2.jpg', 'screenshot1-3.jpg'],
            download: 'project1.zip'
        },
        'project2': {
            title: 'Проект 2',
            icon: 'icon2.png',
            description: 'Описание проекта 2.',
            screenshots: ['screenshot2-1.jpg', 'screenshot2-2.jpg', 'screenshot2-3.jpg'],
            download: 'project2.zip'
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

    downloadLink.href = 'download.php?file=' + project.download;

    projectDetail.style.display = 'block';
}

function closeProject() {
    const projectDetail = document.getElementById('project-detail');
    projectDetail.style.display = 'none';
}
