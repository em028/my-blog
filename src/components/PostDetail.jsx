// src/components/PostDetail.jsx

import React, { useEffect } from 'react'; // ★ useEffectをインポート
import { useParams } from 'react-router-dom';
import hljs from 'highlight.js'; // ★ highlight.js をインポート
import 'highlight.js/styles/github.css'; // ★ テーマCSSをインポート

import { posts } from '../posts.jsx'; 

function PostDetail() {
  const { id } = useParams(); 
  const post = posts.find(p => p.id === id); 

  // ★ ライフサイクル処理の追加 ★
  useEffect(() => {
    // 記事の内容がDOMに描画された後、ハイライト処理を実行
    // highlightAll() は、DOM内のすべての <pre><code> 要素を検索します。
    hljs.highlightAll();

    // クリーンアップ関数は不要ですが、依存配列に id を含めます。
  }, [id]); // idが変わる（別の記事に遷移する）たびに再実行

  // content はコンポーネントなので、大文字で始めてタグとして呼び出す
  const ContentComponent = post.content; 

  return (
    <main className="main-content">
        {/* ... */}
        <div className="post-content">
            <ContentComponent /> {/* コンポーネントとして呼び出す */}
        </div>
    </main>
  );
}

export default PostDetail;
