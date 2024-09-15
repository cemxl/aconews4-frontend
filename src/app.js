// src/app.js
import React, { useEffect, useState } from 'react';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news from the backend
    fetch('/api/news')
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">aconews</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to Aconews</h1>
        <p>Your one-stop destination for the latest news from around the world.</p>
      </section>

      <main id="news-container" className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage || 'images/placeholder.jpg'} alt={article.title} className="news-image" />
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-title">{article.title}</a>
            <p>{article.description}</p>
            <div className="date">{new Date(article.publishedAt).toDateString()} • {article.source.name}</div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
