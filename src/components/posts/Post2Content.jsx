import React from 'react';

const Post2Content = () => (
	<div>
		<h3>備忘録開始</h3>
		<p>ひたすら<span class="highlight-pink">AIに質問しまくって</span>ある程度見栄えは良くなったものの、何でエラーが起きてどう解決したかイマイチ理解出来てないので一旦これまでのAIとのやり取りを整理してみる。</p>
		<p>まずReactのサンプルページを表示出来た後のやり取りまで戻るとしよう。</p>
		<p>その後に指示されたのは<span class="highlight-pink">src</span>フォルダに<span class="highlight-pink">components</span>フォルダを作り、Header.jsx、Footer.jsx、Home.jsxを追加しろとの事、srcフォルダにあるApp.jsxを修正する事だった。</p>
		<p>AIが提示してきたコード群↓</p>
		<pre><code class="language-javascript"> {`
// src/components/Header.jsx

import React from 'react';
import './Header.css'; // あとでスタイルを当てるためにCSSファイルを読み込む

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">My React Blog</h1>
      <nav>
        <a href="/">ホーム</a>
        <a href="/about">概要</a>
      </nav>
    </header>
  );
}

export default Header;
		`} </code></pre>
		<pre><code class="language-javascript"> {`
// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; // スタイル用

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; 2025 My React Blog. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
		`} </code></pre>
		<pre><code class="language-javascript"> {`
// src/components/Home.jsx

import React from 'react';

function Home() {
  return (
    <main className="main-content">
      <h2>記事一覧</h2>
      <article className="post-preview">
        <h3>ブログ記事タイトル 1</h3>
        <p>これは最初の記事のプレビューです...</p>
        <a href="/post/1">続きを読む</a>
      </article>
      <article className="post-preview">
        <h3>ブログ記事タイトル 2</h3>
        <p>これは2番目の記事のプレビューです...</p>
        <a href="/post/2">続きを読む</a>
      </article>
    </main>
  );
}

export default Home;
		`} </code></pre>
		<pre><code class="language-javascript"> {`
// src/App.jsx (ここを書き換えます)

import React from 'react';
import Header from './components/Header'; // 作成したHeaderを読み込む
import Footer from './components/Footer'; // 作成したFooterを読み込む
import Home from './components/Home';     // 作成したHomeを読み込む

// App.cssはViteの初期スタイルをリセットするために残しても良いし、
// 中身を空にしてもOKです。
import './App.css'; 

function App() {
  // returnの中身を、作ったコンポーネントに置き換えます
  return (
    <div className="app-container">
      <Header /> {/* ヘッダーをここに配置 */}
      
      <Home />   {/* ホーム（記事一覧）をここに配置 */}
      
      <Footer /> {/* フッターをここに配置 */}
    </div>
  );
}

export default App;
		`} </code></pre>
		<p>それと味気ない見た目を良くするために、Header.css、Footer.cssを<span class="highlight-pink">src</span>フォルダに作り、App.cssを一旦空にすると仰るので作成する。</p>
		<pre><code class="language-javascript"> {`
/* src/Header.css */
.site-header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}
.site-title {
  margin: 0;
  font-size: 2rem;
}
.site-header nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
.site-header nav a:hover {
  text-decoration: underline;
}
		`} </code></pre>
		<pre><code class="language-javascript"> {`
/* src/Footer.css */
.site-footer {
  background-color: #f4f4f4;
  color: #555;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
}
		`} </code></pre>
		<pre><code class="language-javascript"> {`
/* src/App.css */
//empty
		`} </code></pre>
		<p>でもコードをよく見ると<span class="highlight-pink">src</span>フォルダに作るのではなく<span class="highlight-pink">components</span>フォルダに置くようになっとる（汗）。そういえばGemini氏も回答の最後の方にちっちゃく注意書きで不完全さを訴えておったね。危ない危ない。</p>
		<h3>見た目についてのすったもんだ</h3>
		<p>cssの修正はその後かなり苦戦する事になりました。</p>
		<p>Gemini氏の提案によりマークダウンの導入を受け入れて色々試してみたものの、マークダウンのライブラリとHighLight.jsの相性が悪かったらしく上手く表示されない。</p>
		<p>結局マークダウンは使わずReact本来のHTMLをJavaScriptに組み込んで書く方向にした。個人的にはコチラの方が後で見やすい。</p>
		<p>cssの最終形態はまた後程まとめて掲載するので少々お待ち下さいまし〜。</p>
	</div>
);

export {Post2Content};
