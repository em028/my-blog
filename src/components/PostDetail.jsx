// src/components/PostDetail.jsx (修正後)

import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // ★ 追加
import remarkGfm from 'remark-gfm';       // ★ 追加
import { posts } from '../posts'; 

function PostDetail() {
  const { id } = useParams(); 
  const post = posts.find(p => p.id === id); 

  if (!post) {
    return (
      <main className="main-content">
        <h2>記事が見つかりませんでした</h2>
      </main>
    );
  }

  return (
    <main className="main-content">
      <h1>{post.title}</h1>
      <p className="post-date">公開日: {post.date}</p>
      <hr />
      
      <div className="post-content">
        {/* ▼ ここを <ReactMarkdown> に置き換えます ▼ */}
        <ReactMarkdown 
          // contentプロパティ(Markdownテキスト)を渡す
          children={post.content} 
          // Markdownの拡張機能（テーブル、チェックボックスなど）を有効化
          remarkPlugins={[remarkGfm]} 
        />
        {/* ▲ 置き換えここまで ▲ */}
      </div>
    </main>
  );
}

export default PostDetail;
