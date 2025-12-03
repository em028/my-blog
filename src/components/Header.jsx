// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Linkをインポート
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title"><Link to="/">どうしても寝ながらプログラミングしたい！！</Link></h1>
      <nav>
        {/* aタグをLinkコンポーネントに置き換える */}
			<ul>
				<li><Link to="/">ホーム</Link></li>
        <li><Link to="/about">概要</Link></li>
			</ul>
      </nav>
    </header>
  );
}

export default Header;
