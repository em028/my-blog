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
    content: '## SPA (Single Page Application)\nReactが実現するSPAでは、ユーザー体験（UX）を向上させるために、画面遷移をスムーズに行うことが重要です。`react-router-dom` はその核となるライブラリです。',
  },
];
