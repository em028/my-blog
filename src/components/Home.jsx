// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../posts'; // ★ データをインポート

function Home() {
  return (
    <main className="main-content">
      <h2>最新記事一覧</h2>
      
      {/* ★ posts配列をループ処理 (map) して、記事プレビューを生成 ★ */}
      {posts.map((post) => (
        <article className="post-preview" key={post.id}>
          {/* 記事タイトルは詳細ページへのリンクにする */}
          <h3>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h3>
          <p className="post-date">{post.date}</p>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`}>続きを読む &rarr;</Link>
        </article>
      ))}
      
    </main>
  );
}

export default Home;
