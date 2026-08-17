# React 100 Knock

React と TypeScript の基礎を、小さなアプリや段階的な課題を実装しながら学習するためのリポジトリです。

ルート直下には、テーマごとに分かれた `day01`〜`day05` の React アプリと、`Knock01`〜`Knock50` を収録した `udemy-react-100` があります。各ディレクトリはそれぞれ独立した Vite プロジェクトであり、ルートは npm workspace にはなっていません。

## ディレクトリ構成

```text
react-100knock/
├── day01-counter/         # 単一カウンター
├── day02-dashBoard/       # コンポーネント分割したダッシュボード
├── day03-eventhandler/    # イベント処理とテーマ切り替え
├── day04-formInput/       # 複数項目のフォーム入力
├── day05-multiCounter/    # 複数カウンターと共通ボタン
├── udemy-react-100/       # React 100本ノック（現在は01〜50を収録）
├── memo.txt               # プロジェクト作成コマンドとブランチ命名メモ
└── package-lock.json      # ルートのロックファイル（依存パッケージの登録なし）
```

各 React アプリには、主に次のファイル・ディレクトリがあります。

```text
<app>/
├── public/                # そのまま配信される静的ファイル
├── src/
│   ├── assets/            # 画像などのアセット
│   ├── components/        # 分割したコンポーネント（該当アプリのみ）
│   ├── App.tsx            # アプリ本体
│   ├── main.tsx           # React のエントリーポイント
│   └── *.css              # スタイル
├── package.json           # 依存関係と npm scripts
├── vite.config.ts         # Vite の設定
├── eslint.config.js       # ESLint の設定
└── tsconfig*.json         # TypeScript の設定
```

## 各ディレクトリの学習内容

| ディレクトリ | 実装内容 | 主な学習テーマ |
| --- | --- | --- |
| `day01-counter` | ボタンを押すと値が1増えるカウンター | `useState`、関数形式の state 更新、クリックイベント |
| `day02-dashBoard` | ユーザー情報と歩数・睡眠・水分量を表示するダッシュボード | コンポーネント分割、Props の型定義、スプレッド構文、配列の `map` |
| `day03-eventhandler` | カウントアップ、入力値の反映、ライト／ダークテーマ切り替え | 親コンポーネントでの状態管理、イベントハンドラーを Props で渡す方法、`ChangeEvent`、条件分岐とインラインスタイル |
| `day04-formInput` | 氏名・メールアドレス・メッセージを入力し、画面とアラートに反映するフォーム | 制御コンポーネント、複数入力をオブジェクトで管理する方法、計算されたプロパティ名、`onChange` |
| `day05-multiCounter` | A・Bの独立したカウンター、合計値、全リセット | 複数 state、state から導出する値、共通ボタンコンポーネント、コールバックを Props で渡す方法、`memo` |
| `udemy-react-100` | `Knock01.tsx`〜`Knock50.tsx` の段階的な演習 | JSX からカスタムフックまでの React 基礎・応用 |

### `udemy-react-100` の課題範囲

`src/components/basic/` に課題コンポーネントが配置されています。実装内容はおおむね次の流れです。

- `Knock01`〜`Knock05`: JSX、式の埋め込み、型付き変数、スタイル、画像属性
- `Knock06`〜`Knock10`: コンポーネント分割、Props、デフォルト値、`children`、再利用可能な入力部品
- `Knock11`〜`Knock19`: `useState`、カウンター、入力、トグル、Todo、マウス・ドラッグ・キーボードイベント
- `Knock20`〜`Knock25`: `useRef`、制御／非制御フォーム、バリデーション、動的フォーム、複数ステップフォーム
- `Knock26`〜`Knock30`: ログイン状態、テーマ、権限別表示、動的クラス、表示モードの条件分岐
- `Knock31`〜`Knock35`: 配列の描画、カード一覧、絞り込み、カテゴリー展開、検索と並べ替え
- `Knock36`〜`Knock42`: `useEffect`、状態監視、派生計算、`localStorage`、デバウンス、タイマー、イベントリスナーの後片付け
- `Knock43`〜`Knock45`: Fetch API、ローディング／エラー処理、GitHub リポジトリ検索、WebSocket チャット
- `Knock46`〜`Knock50`: カウンター、`localStorage`、データ取得、トグル、デバウンスを題材にしたカスタムフック

`udemy-react-100/src/App.tsx` が表示対象の課題を import する構成です。現在は `Knock50` が指定されています。別の課題を表示する場合は、同ファイルの import 先（例: `./components/basic/Knock49`）を変更します。

## 使用技術

- React 19
- React DOM 19
- TypeScript（`day01`〜`day05` は 5.9 系、`udemy-react-100` は 6.0 系）
- Vite（`day01`〜`day03` は 7.1 系、`day04`〜`day05` は 7.2 系、`udemy-react-100` は 8.1 系）
- ESLint / typescript-eslint
- `@vitejs/plugin-react`
- UUID（`udemy-react-100` の Todo のID生成で使用）
- ブラウザ API（Fetch API、WebSocket、Local Storage など）

バージョンは各 `package.json` に記載された範囲に基づきます。

## セットアップ

Node.js と npm を用意してください。必要なバージョンを固定する `engines` や `.nvmrc` は、このリポジトリにはありません。

依存関係は各アプリで個別に管理されているため、学習したいアプリのディレクトリへ移動してインストールします。

```bash
git clone <repository-url>
cd react-100knock
cd day01-counter # 起動したいアプリに置き換える
npm install
```

各アプリには `package-lock.json` があるため、ロックファイルどおりに再現可能なインストールを行う場合は `npm install` の代わりに `npm ci` も利用できます。ルートで `npm install` を実行しても各アプリの依存関係はインストールされません。

## 各 React アプリの起動方法

起動したいアプリのディレクトリで依存関係をインストールし、開発サーバーを起動します。

```bash
cd day01-counter
npm install
npm run dev
```

他のアプリも同様です。最初の `cd` を次のいずれかに置き換えてください。

```text
day01-counter
day02-dashBoard
day03-eventhandler
day04-formInput
day05-multiCounter
udemy-react-100
```

ルートから一度に指定して起動する場合は、次の形式も利用できます。

```bash
npm --prefix day01-counter install
npm --prefix day01-counter run dev
```

`day01-counter` の部分を目的のディレクトリ名に置き換えてください。開発サーバーが表示したローカル URL をブラウザで開くとアプリを確認できます。

全アプリ共通の npm scripts は次のとおりです。

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | Vite 開発サーバーを起動 |
| `npm run build` | TypeScript のビルドチェック後、プロダクション用にビルド |
| `npm run lint` | ESLint を実行 |
| `npm run preview` | ビルド結果をローカルでプレビュー |

## 学習目的

このリポジトリの目的は、React の機能を小さな単位で繰り返し実装し、次の内容を段階的に身につけることです。

- JSX と TypeScript を使った UI の記述
- コンポーネントの分割・再利用と型安全な Props 設計
- state、イベント、フォームを使ったインタラクティブな画面の実装
- 条件分岐、リスト操作、検索、絞り込み、並べ替え
- `useEffect` とブラウザ API を使う副作用、およびクリーンアップ
- 外部 API や WebSocket と連携する非同期 UI
- 共通ロジックをカスタムフックとして切り出す設計

`day01`〜`day05` で個別テーマを小さなアプリとして試し、`udemy-react-100` で基礎から応用までを連続した課題として反復できる構成になっています。
