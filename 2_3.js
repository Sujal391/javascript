// Function to fetch and display posts
async function fetchPosts() {
    const postsContainer = document.getElementById('posts');
    
    // Show loading message
    postsContainer.innerHTML = '<div class="loading">Loading posts...</div>';

    try {
        // Fetch data from JSONPlaceholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const posts = await response.json();

        // Clear loading message and display posts
        postsContainer.innerHTML = '';
        
        // Display first 10 posts
        posts.slice(0, 10).forEach((post) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postElement);
        });

    } catch (error) {
        postsContainer.innerHTML = `
            <div class="error">
                Error: ${error.message}
            </div>
        `;
    }
}

// Call the function when page loads
fetchPosts();