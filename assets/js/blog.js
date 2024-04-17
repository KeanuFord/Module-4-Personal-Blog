function renderPosts() {
    // Get the blog posts from local storage
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if(!blogPosts) blogPosts = [];

    // Clear current blog posts
    const postContainer = document.querySelector('#post-container');
    if(postContainer) postContainer.remove();

    // Create a new container for the blog posts
    let postList = document.createElement('div');
    postList.setAttribute('id', 'post-container');
    document.querySelector('#post-cards');
    console.log(blogPosts);

    // Loop through the blog posts and create a card for each post
    for(let i=0; i < blogPosts.length; i++) {
        let postCard = document.createElement('section');
        postCard.setAttribute('class', 'card');

        let postHeader = document.createElement('h3');
        postHeader.setAttribute('class', 'card-header');
        postHeader.textContent = blogPosts[i].title;
        
        let postContent = document.createElement('p');
        postContent.setAttribute('class', 'card-content');
        postContent.textContent = blogPosts[i].content;

        let postFooter = document.createElement('footer');
        postFooter.setAttribute('class', 'card-footer');
        postFooter.textContent = `Posted by: ${blogPosts[i].username}`;


        postCard.appendChild(postHeader);
        postCard.appendChild(postContent);
        postCard.appendChild(postFooter);
        document.querySelector('#post-cards').appendChild(postCard);
        
    }
}

renderPosts();

//Back Button
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});