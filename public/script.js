document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/news')
      .then(response => response.json())
      .then(data => {
        const newsContainer = document.getElementById('news-container');
        data.articles.forEach(article => {
          const articleElement = document.createElement('div');
          articleElement.className = 'news-card'; // Apply the news-card class

          // Log image URL to verify it's correct
          console.log('Image URL:', article.urlToImage || 'path/to/placeholder-image.jpg');
  
          // Create article content
          const articleContent = `
            <img src="${article.urlToImage || 'path/to/placeholder-image.jpg'}" alt="${article.title}" class="news-image">
            <h2><a href="${article.url}" class="news-title" target="_blank">${article.title}</a></h2>
            <p>${article.description}</p>
          `;
  
          articleElement.innerHTML = articleContent;
          newsContainer.appendChild(articleElement);
        });
      })
      .catch(error => console.error('Error loading news:', error));
});
