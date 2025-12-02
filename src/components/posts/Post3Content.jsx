import React from 'react';

const Post3Content = () => (
	<div>
		<h3>AI的指導法</h3>
		<p>でもAIって順序立てて説明するのが上手よね。</p>
		<p><strong>「それでは次のステップへ進みますか？」</strong>なんて創作意欲を掻き立てるような教え方。</p>
		<p>もちろん進ませて頂きましたさ。</p>
		<p></p>
		<strong>現在は「記事一覧（Home.jsx）」しか表示されていませんが、ブログには「記事詳細ページ」や「概要ページ」など、URLによって表示を切り替える機能が必要です。Reactでは、一般的に react-router-dom というライブラリを使ってこれを実現します。</strong>
		<p>と説明され、いよいよSPA（シングルページアプリケーション）の基本部分へ突入。</p>
		<p>まずは</p>
		<pre>npm install react-router-dom</pre>
		<p>でライブラリをインストール。</p>
		<p><span class="highlight-pink">src/components</span> フォルダ内に PostDetail.jsx、About.jsxを作成してと。</p>
		<pre><code class="language-javascript"> {`
// src/components/PostDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  // URLのパスから記事IDなどの情報を取り出すフック
  const { id } = useParams();

  return (
    <main>
      <h2>記事詳細ページ</h2>
      <p>現在表示しているのは、ID: **{id}** の記事です。</p>
      <p>ここに記事の本文が入ります。</p>
    </main>
  );
}

export default PostDetail;
		`} </code></pre>
		<pre><code class="language-javascript">{`
// src/components/About.jsx

import React from 'react';

function About() {
  return (
    <main>
      <h2>ブログについて</h2>
      <p>このブログはReactとViteを使って制作しています。</p>
    </main>
  );
}

export default About;
		`} </code></pre>
		<p>そしたらApp.jsxを大幅に書き換えてっと…？いや、今まで置いてあったApp.jsxと全然違うんか〜い！</p>
		<pre><code class="languayyge-javascript">{`
// src/App.jsx

import React from 'react';
// 必要なルーティングコンポーネントをインポート
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 作成したコンポーネントをインポート
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';        // トップページ（記事一覧）
import PostDetail from './components/PostDetail'; // 記事詳細
import About from './components/About';      // 概要ページ

import './App.css'; 

function App() {
  return (
    // ★ 1. BrowserRouterで全体を囲う ★
    <BrowserRouter> 
      <div className="app-container">
        {/* HeaderとFooterは全ページ共通なので、Routesの外に置く */}
        <Header /> 
        
        {/* ★ 2. Routesでルーティングを定義する ★ */}
        <Routes>
          {/* path="/" のとき、Homeコンポーネントを表示 */}
          <Route path="/" element={<Home />} />
          
          {/* path="/about" のとき、Aboutコンポーネントを表示 */}
          <Route path="/about" element={<About />} />
          
          {/* path="/post/1" や "/post/abc" のように、可変のIDを持つ場合 */}
          <Route path="/post/:id" element={<PostDetail />} />

          {/* どのパスにもマッチしなかった場合 (404 Not Found) */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
		`} </code></pre>
		<p>最後にHeader.jsxとHome.jsxの{`<a href="...">`}タグの代わりに、react-router-dom の{`<Link to="...">`}に変更っと。</p>
		<pre><code class="languayyge-javascript">{`
// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Linkをインポート
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title"><Link to="/">My React Blog</Link></h1>
      <nav>
        {/* aタグをLinkコンポーネントに置き換える */}
        <Link to="/">ホーム</Link>
        <Link to="/about">概要</Link>
      </nav>
    </header>
  );
}

export default Header;
		`} </code></pre>
		<pre><code class="languayyge-javascript">{`
// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Linkをインポート

function Home() {
  return (
    <main className="main-content">
      <h2>記事一覧</h2>
      <article className="post-preview">
        <h3>ブログ記事タイトル 1</h3>
        <p>これは最初の記事のプレビューです...</p>
        {/* 記事詳細ページへのリンクもLinkに置き換える */}
        <Link to="/post/1">続きを読む</Link> 
      </article>
      <article className="post-preview">
        <h3>ブログ記事タイトル 2</h3>
        <p>これは2番目の記事のプレビューです...</p>
        <Link to="/post/2">続きを読む</Link>
      </article>
    </main>
  );
}

export default Home;
		`} </code></pre>
		<h3>上手く行ってる時は誰もがテンション高め</h3>
		<p>前回のブログよりサクサクコピペで済んでるんでテンション爆上がりでした。Gemini氏に『完璧です！次のステップお願いします！』って質問飛ばしてますよ。後から冷静になって読み返すと「俺って単純やん」と思う。</p>
		<p>そうさ！だからAI頼みの企画なんか考えるのさ！</p>
		<p>でもね、考え無しの方が挑戦出来る時もあるのよ。</p>
		<p>…と言っても考え無しじゃない方が利口なんですが…</p>
	</div>
);

export {Post3Content};
