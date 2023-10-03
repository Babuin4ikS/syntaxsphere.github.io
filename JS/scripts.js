// Пример данных для галереи (пути к изображениям)
const galleryData = [
    'images/project1.jpg',
    'images/project2.jpg',
    'images/project3.jpg',
    // Добавьте пути к изображениям по мере необходимости
];


document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Пример данных для постов блога (можно изменить)
    const blogPostsData = [
        { title: 'Заголовок поста 1', content: 'Содержание поста 1, который может быть довольно длинным текстом.' },
        { title: 'Заголовок поста 2', content: 'Содержание поста 2, еще один пример текста.' },
        // Добавьте больше постов по мере необходимости
    ];

    // Динамическое добавление постов блога
    blogPostsData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content.substring(0, 100)}... <button class="read-more">Читать далее</button></p>`;
        blogPostsContainer.appendChild(postElement);
    });

    // Добавление обработчика событий для кнопки "Читать далее"
    blogPostsContainer.addEventListener('click', function (event) {
        const targetButton = event.target;
        
        if (targetButton.classList.contains('read-more')) {
            const postParagraph = targetButton.previousElementSibling;

            // Добавьте проверку наличия postParagraph
            if (postParagraph) {
                const postContent = blogPostsData.find(post => post.content.startsWith(postParagraph.textContent));

                // Проверка, чтобы убедиться, что postContent найден
                if (postContent) {
                    postParagraph.innerHTML = `${postContent.content} <button class="collapse">Свернуть</button>`;
                }
            }
        } else if (targetButton.classList.contains('collapse')) {
            const postParagraph = targetButton.previousElementSibling;

            // Добавьте проверку наличия postParagraph
            if (postParagraph) {
                postParagraph.innerHTML = `${postParagraph.textContent.substring(0, 100)}... <button class="read-more">Читать далее</button>`;
            }
        }  
    });

    // Пример данных для виджетов (можно изменить)
    const recentPostsData = [
        { title: 'Пост 1', date: '2023-01-15' },
        { title: 'Пост 2', date: '2023-01-10' },
        // Добавьте больше постов по мере необходимости
    ];

    const tagCloudData = ['Технологии', 'JavaScript', 'Веб-разработка', 'CSS', 'HTML', 'Блог'];

    // Динамическое добавление данных для виджетов
    const recentPostsContainer = document.getElementById('recent-posts');
    recentPostsData.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${post.title}</a> <span>${post.date}</span>`;
        recentPostsContainer.appendChild(li);
    });

    const tagCloudContainer = document.getElementById('tag-cloud');
    tagCloudData.forEach(tag => {
        const span = document.createElement('span');
        span.innerHTML = `<a href="#">${tag}</a>`;
        tagCloudContainer.appendChild(span);
    });

    // Отслеживание прокрутки страницы и показ/скрытие кнопки "Вверх"
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Обработчик события для возвращения вверх при клике на кнопку
    scrollToTopButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    const galleryContainer = document.querySelector('.image-gallery');

    // Динамическое добавление миниатюр галереи
    galleryData.forEach(imagePath => {
        const thumbnail = document.createElement('img');
        thumbnail.src = imagePath;
        thumbnail.alt = 'Gallery Image';
        thumbnail.classList.add('thumbnail');

        // Добавление обработчика событий для открытия полноразмерного изображения
        thumbnail.addEventListener('click', function () {
            openFullscreenImage(imagePath);
        });

        galleryContainer.appendChild(thumbnail);
    });
});

function openFullscreenImage(imagePath) {
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');

    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = imagePath;
    fullscreenImage.alt = 'Fullscreen Image';

    // Добавление обработчика событий для закрытия полноразмерного изображения
    fullscreenImage.addEventListener('click', function () {
        fullscreenContainer.remove();
    });

    fullscreenContainer.appendChild(fullscreenImage);
    document.body.appendChild(fullscreenContainer);
}