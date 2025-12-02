import React from 'react';

const Post4Content = () => (
	<div>
	<h3>次のステップは…</h3>
	<strong>現在はダミーのテキストを表示していますが、ここではまず、Reactプロジェクト内で記事データを管理する最も簡単な方法を導入し、それを Home.jsx（記事一覧）と PostDetail.jsx（記事詳細）で表示できるようにします。</strong>
	<p>なるほど。</p>
	<p>データベースや外部サービスを使う前に、配列として記事データを用意するとの事。</p>
	<p><span class="highlight-pink">src</span>フォルダの直下に、posts.js というファイルを作成しろとの事。</p>
	<pre><code class="language-javascript">{`
// src/posts.js
// 記事データの配列（リスト）
export const posts = [
  {
    id: '1',
    title: 'Reactブログ立ち上げの旅',
    date: '2025年11月18日',
    excerpt: 'ViteとReact Router DOMを使って、ブログの骨組みを作るまでの道のりをまとめました。',
    content: '## Reactのパワー\nReactのコンポーネント指向は、ブログのような構造的なサイトを作るのに最適です。HeaderやFooter、PostDetailといった部品を組み合わせることで、再利用性の高いコードになります。',
  },
  {
    id: '2',
    title: 'CSSのレスポンシブ対応について',
    date: '2025年11月19日',
    excerpt: 'スマホ対応のためのViewport設定や、max-widthでのコンテナ制御について解説します。',
    content: '## レスポンシブの基本\nCSSで画面幅に応じてレイアウトを変えるには、**メディアクエリ**を使用します。モバイルファーストで設計し、徐々にPC向けに広げていくのが現代の主流です。',
  },
  {
    id: '3',
    title: 'ルーティングの魔法：react-router-dom',
    date: '2025年11月20日',
    excerpt: 'LinkとRouteを使って、ページ全体のリロードなしにコンテンツを切り替える方法を紹介します。',
    content: '## SPA (Single Page Application)Reactが実現するSPAでは、ユーザー体験（UX）を向上させるために、画面遷移をスムーズに行うことが重要です。react-router-domはその核となるライブラリです。',
  },
];
`}</code></pre>
	<p>（ちなみに拡張子がjsになっとりますが、後々jsxに変更します）</p>
	<p>そんでHome.jsx でこの posts データを読み込み、リスト表示（ループ処理）を行いますだそうで。</p>
	<pre><code class="language-javascript">{`
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
            <Link to={\`/post/`}{`$`}{`{post.id}\`>{post.title}</Link>
          </h3>
          <p className="post-date">{post.date}</p>
          <p>{post.excerpt}</p>
          <Link to={\`/post/`}{`$`}{`{post.id}\`>続きを読む &rarr;</Link>
        </article>
      ))}
      
    </main>
  );
}

export default Home;
`}</code></pre>
	<h3>最後に</h3>
	<strong>PostDetail.jsx では、URLから取得し`た id を使って、posts データの中から該当する記事を見つけ出し（検索）、その詳細な content を表示します。</strong>
	<pre><code class="language-javascript">{`
// src/components/PostDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../posts'; // ★ データをインポート

function PostDetail() {
  // 1. URLから /post/:id の :id 部分を取得
  const { id } = useParams(); 

  // 2. 記事データの中からIDが一致するものを探す
  // find() は条件に合う最初の要素を返します。
  const post = posts.find(p => p.id === id); 

  // 3. 記事が見つからなかった場合の処理 (404エラーなど)
  if (!post) {
    return (
      <main className="main-content">
        <h2>記事が見つかりませんでした</h2>
        <p>指定されたID ({id}) の記事は存在しません。</p>
      </main>
    );
  }

  // 4. 記事が見つかった場合、その内容を表示
  return (
    <main className="main-content">
      <h1>{post.title}</h1>
      <p className="post-date">公開日: {post.date}</p>
      <hr />
      
      {/* ★ 記事本文を表示 ★ */}
      <div className="post-content">
        {/* contentをそのまま表示。本来はMarkdownをHTMLに変換する処理が必要です。 */}
        {post.content} 
      </div>
    </main>
  );
}

export default PostDetail;
`}</code></pre>
	<p>コレで完成。</p>
	<h3>AIのゆうとおり。</h3>
	<p>Gemini氏の提示するコードをコピペして、実行する分にはなんも問題ないっス。</p>
	<p>提示されてる範囲内で「ここはこうして、そこはああして」って言う分には事がすんなり進みます。</p>
	<p>ベースを作る分には何の苦労もいらない。</p>
	<p>しかし、こっからよ。ハマったのは。</p>
	<p>要求が複雑になればなるほどコチラの知識が問われルンです。</p>
	<p>そんなハマりっぷりを次回のブログで書いておりますんで、笑い飛ばしてやって下さい。</p>
	</div>
);

export {Post4Content};
