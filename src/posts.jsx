// src/posts.js (コンテンツをコンポーネントとして定義する例)

import React from 'react';
import {Post1Content} from './components/posts/Post1Content.jsx';
import {Post2Content} from './components/posts/Post2Content.jsx';
import {Post3Content} from './components/posts/Post3Content.jsx';
import {Post4Content} from './components/posts/Post4Content.jsx';
import {Post5Content} from './components/posts/Post5Content.jsx';

const Post0Content = () => (
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
    title: 'TermuxとReactとAIと〜１',
    date: '2025-11-18',
		excerpt: 'AIに聞けば無知な私でも、TermuxとReactで個人ブログを作れるのでは？と思ったのが試練の始まりだったり、じゃなかったり。',
    // content プロパティにコンポーネントを格納
    content: Post1Content 
	},
  {
		id: '2',
		title: 'TermuxとReactとAIと〜２',
		date: '2025-11-19',
		excerpt: '私も不完全、AIも不完全。マイナスとマイナス足したらマイナス、掛けたらプラス。',
		content: Post2Content
  },
	{
		id: '3',
		title: 'TermuxとReactとAIと〜３',
		date: '2025-11-20',
		excerpt: '間違い探しの様な楽しさもあると思えば、AIとのやり取りは苦にならないのかも。',
		content: Post3Content
	},
	{
		id: '4',
		title: 'TermuxとReactとAIと〜４',
		date: '2025-11-21',
		excerpt: 'あと少しでReactでの個人ブログのベースが完成。ここまではAIの指導でそこそこいけてます。',
		content: Post4Content
	},
	{
		id: '5',
		title: 'TermuxとReactとAIと〜５',
		date: '2025-11-22',
		excerpt: 'AIの傀儡と化した私は、ここから地獄をみる羽目に。',
		content: Post5Content
	}
];

