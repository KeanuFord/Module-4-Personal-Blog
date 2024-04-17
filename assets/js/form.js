document.getElementById('post-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const blogPosts = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    };

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    window.location.href = 'blog.html';
});