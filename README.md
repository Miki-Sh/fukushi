## なぜこのアプリを作ったのか

&emsp;日本の社会保障制度は、知られていないだけでとても手厚いです。ただし、そのどれもが**申請制**で、自分で理解して自分で申請をしないと利用できません。今まで、福祉に関する仕事に携わってきた中で、「こんな制度があるなんて知らなかった。知っていたらあの時あそこまで苦労しなくて済んだのに...」「何となく知ってはいたけど、説明が難しすぎてよくわからなったから今まで利用できなかった」という人たちに何人も出会ってきました。  
&emsp;知識は、生きていく上でとても大事な武器だと私は思っています。今、何かしらの助けを必要としている人たちが、「どこを探せばいいかわからない」「言い回しが難しすぎてわからない」という理由で、受けられたはずの支援を受けられずに埋もれてしまうのを防ぐ。今は必要なくとも、いつか必要になった時「そういえば、こういう時に使えるものがあったはず」と記憶のフックになる。このアプリがそういったことの手助けになって、ほんの少しでも世の中が良くなってほしいと願ってこのアプリを作成しています。

## アプリURL
https://odekake-ls.vercel.app/

## 目次

- [なぜこのアプリを作ったのか](#なぜこのアプリを作ったのか)
- [アプリURL](#アプリurl)
- [目次](#目次)
- [機能](#機能)
- [開発環境](#開発環境)
- [本番環境](#本番環境)
- [使用技術](#使用技術)

## 機能

- 扶養について
  - 税金の扶養に入れられるか診断！
  - 年金の扶養に入れられるか診断！
  - 健康保険の扶養に入れられるか診断！
- 退職時に使える制度
- 病気やけがで働けなくなった時の制度
  - 障害基礎年金もらえるか診断！
  - 障害厚生年金もらえるか診断！

## 開発環境

シングルページアプリケーション (SPA) として作成しており、開発言語に**TypeScript**、ライブラリに**React**、フレームワークに**Next.js**、インフラには、**Vercel**を使用しています。 (括弧内の数字はバージョン)  

- [Create Next App](https://ja.next-community-docs.dev/docs/app-router/api-reference/create-next-app)
  - [npm](https://www.npmjs.com/) (9.5.0)
  - [Node.js](https://nodejs.org/) (19.7.0)
  - [TypeScript](https://www.typescriptlang.org/) (5.2.2)
  - [React](https://reactjs.org) (18.2.0)

動作確認のブラウザには、Chrome (Mac) を使用しています。

## 本番環境

- [Vercel](https://vercel.com/)

## 使用技術

- [Next.js](https://nextjs.org/) (13.5.2) - サーバーサイドレンダリング（SSR）、静的サイト生成（SSG）フレームワーク
- [TypeScript](https://www.typescriptlang.org/) (5.2.2) - 開発言語、静的型付け
- [React](https://reactjs.org) (18.2.0) - SPA構築ライブラリ
- [ReactDOM](https://ja.react.dev/reference/react-dom/components) (18.2.0)
- [ESLint](https://eslint.org) (8.49.0) - JavaScript/TypeScriptコードの静的解析ツール
- [ESLint-config-next](https://www.npmjs.com/package/eslint-config-next) (13.5.2) - Next.js用のESLint設定
- [PostCSS](https://postcss.org) (8.4.30) - CSSを解析して変換するツール
- [Autoprefixer](https://github.com/postcss/autoprefixer) (10.4.16) - CSSにベンダープレフィックスを自動で追加するためのプラグイン
- [TailwindCSS](https://tailwindcss.com) (3.3.3) - CSSフレームワーク
