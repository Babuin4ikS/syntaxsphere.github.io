
const galleryData = [
    'Image/project1.jpg',
    'Image/project2.jpg',
    'Image/project3.jpg',
    
];


document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');

    
    const blogPostsData = [
        { title: 'Post header 1', content: 'Post text 1 .' },
        { title: 'Post header 2', content: 'Post text 2.' },
        // More posts
    ];

    // Dinamic add post blogs
    blogPostsData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content.substring(0, 100)}... <button class="read-more">Read more</button></p>`;
        blogPostsContainer.appendChild(postElement);
    });

    
    blogPostsContainer.addEventListener('click', function (event) {
        const targetButton = event.target;
        
        if (targetButton.classList.contains('read-more')) {
            const postParagraph = targetButton.previousElementSibling;
           
            if (postParagraph) {
                const postContent = blogPostsData.find(post => post.content.startsWith(postParagraph.textContent));
                
                if (postContent) {
                    postParagraph.innerHTML = `${postContent.content} <button class="collapse">Collapse</button>`;
                }
            }
        } else if (targetButton.classList.contains('collapse')) {
            const postParagraph = targetButton.previousElementSibling;
            
            if (postParagraph) {
                postParagraph.innerHTML = `${postParagraph.textContent.substring(0, 100)}... <button class="read-more">Read more</button>`;
            }
        }  
    });
    

    const recentPostsData = [
        { title: 'Post 1', date: '2023-01-15' },
        { title: 'Post 2', date: '2023-01-10' },
        // More
    ];

    const tagCloudData = ['Tech', 'JavaScript', 'Web-Dev', 'CSS', 'HTML', 'Blog'];

    
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

    // PgUp croll
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
 
    scrollToTopButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    const galleryContainer = document.querySelector('.image-gallery');
    

    galleryData.forEach(imagePath => {
        const thumbnail = document.createElement('img');
        thumbnail.src = imagePath;
        thumbnail.alt = 'Gallery Image';
        thumbnail.classList.add('thumbnail');

        // Full_Image
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

    
    fullscreenImage.addEventListener('click', function () {
        fullscreenContainer.remove();
    });

    fullscreenContainer.appendChild(fullscreenImage);
    document.body.appendChild(fullscreenContainer);
}