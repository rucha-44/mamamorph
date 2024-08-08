// src/components/ExpertResources.js
import React from 'react';

const ExpertResources = () => {
  const articles = [
    { id: 1, title: 'Expert Advice on Postpartum Care', content: 'Read this article to learn about postpartum care...' },
    // Add more articles
  ];

  const videos = [
    { id: 1, title: 'Postpartum Recovery Tips', videoUrl: 'https://www.example.com/video1' },
    // Add more videos
  ];

  return (
    <div className="expert-resources">
      <h2>Expert Articles and Videos</h2>
      <div className="articles">
        <h3>Articles</h3>
        {articles.map(article => (
          <div key={article.id} className="article">
            <h4>{article.title}</h4>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
      <div className="videos">
        <h3>Videos</h3>
        {videos.map(video => (
          <div key={video.id} className="video">
            <h4>{video.title}</h4>
            <iframe src={video.videoUrl} title={video.title} frameBorder="0"></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertResources;
