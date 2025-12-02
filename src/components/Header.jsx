// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Linkをインポート
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title"><Link to="/">Termux奮闘記</Link></h1>
      <nav>
        {/* aタグをLinkコンポーネントに置き換える */}
        <Link to="/">ホーム</Link>
        <Link to="/about">概要</Link>
      </nav>
    </header>
  );
}

export default Header;
