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