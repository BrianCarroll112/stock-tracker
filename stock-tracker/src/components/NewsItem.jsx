import React from 'react';

export default (props) => (
  <div className="news-item">
    <h5>{props.news.headline} - {props.news.source}</h5>
    <p>{props.news.summary}</p>
    <p>{props.news.datetime} <a href={props.news.url} rel="noopener noreferrer" target="_blank" >Link</a></p>
  </div>
)
