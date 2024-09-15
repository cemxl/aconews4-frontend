// Replace 'YOUR_API_URL' with the actual API endpoint URL for fetching news
const apiUrl ='https://newsapi.org/v2/top-headlines?country=us&apiKey=1b52663467a34d28aed17d6a30c52436'

// Function to fetch news from API and display it
// Function to fetch news from API and display it
async function fetchNews() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const newsContainer = document.getElementById('news-container');
  
      // Clear existing news (if any)
      newsContainer.innerHTML = '';
  
      // Loop through the news data and create news cards
      data.articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
  
        newsCard.innerHTML = `
        <img src="${article.urlToImage || 'images/placeholder.jpg'}" alt="${article.title}" class="news-image">
        <a href="${article.url}" target="_blank" class="news-title">${article.title}</a>
        <p>${article.description}</p>
        <div class="date">${new Date(article.publishedAt).toDateString()} • ${article.source.name}</div>
      `;
  
        newsContainer.appendChild(newsCard);
      });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
  

fetchNews();
