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
