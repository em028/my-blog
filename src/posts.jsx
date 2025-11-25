// src/posts.js (コンテンツをコンポーネントとして定義する例)

import React from 'react';
import {Post1Content} from './components/posts/Post1Content.jsx';

const Post2Content = () => (
  <div>
  <pre><code class="language-javascript">
{`
import {Post2Content} from '...jsx';
const Post3Content = () => (
`}
  </code></pre>
  </div>
);

export const posts = [
    {
        id: '1',
        title: 'Reactで書くブログ',
        date: '2025-11-25',
	excerpt: 'else',
        // content プロパティにコンポーネントを格納
        content: Post1Content 
    },
  {
	id: '2',
	title: 'test',
	date: '2025/11/26',
	excerpt: 'test',
	content: Post2Content
  }
];

