import React from 'react';

const Post1Content = () => (
 <div>
 <h3>何でTermux？</h3>
 <p>だって<span class="highlight-pink">寝ながら操作</span>出来るんですもの。</p>
 <p>楽チンなんです。</p>
 <p>そりゃぁPCの方が速いし、入力だってキーボードの方がサクサク打てるしで良いですよ。</p>
 <p>…でも、疲れます（笑）</p>
 <p>肩は凝るし腰に来るしで<span class="highlight-pink">寝ながら出来るって天国</span>ですよね。</p>
 <p>寝返りも簡単よ。</p>
 <p>そんな怠惰な人間にオススメなのがTermuxですよ（笑）</p>
 <p>しかもTermuxが公開されてから10年経った今、結構色んな事が出来るようになっとります。</p>
 <p>そんなこんなでNode.jsやReactを使って、このブログをTermuxとAndroidスマホで作った事を備忘録として残そうかと...</p>
 <h3>とりあえずNode.jsインストール</h3>
<p>と言う訳で早速TermuxにNode.jsをインストール。</p>
 <p><pre>pkg install nodejs-lts</pre></p>
 <p>いけます。</p>
 <p>LTS版の方がなんとなく安心なんで入れました。</p>
 <p>最新版が欲しければ</p>
 <p><pre>pkg install nodejs</pre></p>
 <p>でいいと思う。</p>
 <p>そこは好みで。</p>
 <p>そしたら適当なディレクトリで</p>
 <p><pre>npm create vite@latest my-blog -- --template react</pre></p>
 <p>my-blogの箇所は自分のviteプロジェクト名にするなりして下さい。</p>
 <p>そしたら出来上がったmy-blogという名のフォルダに移動して</p>
 <p><pre>npm install</pre></p>
 <p>と打てばviteプロジェクトの基盤が出来上がり。
</p>
 <p><pre>npm run dev</pre></p>
 <p>と打てばReactのサンプルページが表示されます。（Termuxは終了させずにgoogle chromeでlocalhost:xxxx（xはターミナルに表示されてるアドレス）と入力で）。</p>
 <h3>あとはAIに<strong>丸投げ</strong>です。</h3>
 <p>と言っても中々上手いようには行かないんですが…</p>
 <p>とりあえずグーグル先生のジェミニ助手に</p>
 <p>「Reactを使って個人ブログを作りたいけど何から始めればいい？」</p>
 <p>って聞いたら物凄く詳しいやり方を教えて下さいまして</p>
 <p>10回くらいのやり取りで完成。</p>
 <p>すんごいシンプルな物だけど3時間弱で出来た。</p>
 <p>AI恐るべし。</p>
 <p>もちろん全部コピペで済んだ訳ではないけれどTermux（とスマホ）でここまで行けるとは思ってなかった。</p>
 </div>
);

export {Post1Content};
