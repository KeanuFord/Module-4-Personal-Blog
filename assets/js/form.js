document.getElementById('post-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let blogPost = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    };

    let posts = JSON.parse(localStorage.getItem('blogPosts'));
    if(!posts) posts = [];
    console.log(posts);
    
    posts.push(blogPost);
    console.log(posts);

    localStorage.setItem('blogPosts', JSON.stringify(posts));
    window.location.href = 'blog.html';
});

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    let html = document.querySelector('html');
    html.classList.toggle('dark-mode');
    
    let header = document.querySelector('header');
    header.classList.toggle('dark-mode');

    let h1 = document.querySelector('h1');
    h1.classList.toggle('dark-mode');

    let body = document.querySelector('body');
    body.classList.toggle('dark-mode');

    let form = document.querySelector('#post-form');
    form.classList.toggle('dark-mode');
    
    let main = document.querySelector('main');
    main.classList.toggle('dark-mode');
    
    let formUser = document.querySelector('#form-user');
    formUser.classList.toggle('dark-mode');

    let formTitle = document.querySelector('#form-title');
    formTitle.classList.toggle('dark-mode');

    let formContent = document.querySelector('#form-content');
    formContent.classList.toggle('dark-mode');
    
});