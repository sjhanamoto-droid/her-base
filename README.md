# HER BASE

アスリートを支える人のための、審査制クローズドコミュニティ「HER BASE」のランディングページ。同じ立場の仲間と安心してつながり、孤独を感じず前向きな一歩を踏み出せる居場所を届けます。

`first-class_LP` のデザイン・レイアウトをベースに、HER BASE のロゴ（ゴールド × アイボリー × クラシックセリフ）の世界観へ再構築したものです。**Vercel** で公開する前提で構成しています。

## 技術スタック

- Vite 6 + React 19 + TypeScript
- Tailwind CSS（CDN・`index.html` 内で設定）
- lucide-react（アイコン）
- フォント: Cinzel / Playfair Display / Zen Kaku Gothic New / Shippori Mincho（Google Fonts）

## 開発

```bash
npm install      # 依存関係のインストール
npm run dev      # http://localhost:3000 で開発サーバー
npm run build    # dist/ に本番ビルド
npm run preview  # ビルド結果のプレビュー
```

## Vercel へのデプロイ

このプロジェクトは Vite の静的サイトとして Vercel にそのままデプロイできます（`vercel.json` 設定済み）。

```bash
# 初回（プロジェクトのリンク〜本番公開）
npx vercel        # プレビュー環境へ
npx vercel --prod # 本番公開
```

- Framework Preset: **Vite**（自動検出）
- Build Command: `npm run build` / Output Directory: `dist`

## セクション構成（`App.tsx`）

Hero → Concept（課題提起＋3つの柱：安心／つながり／一歩）→ Message（代表挨拶）→ Members（運営メンバー紹介カルーセル）
→ Service（提供する6つのサービス＋運営の考え方）→ Voices（共感の声）→ Join（入会申し込み）→ Flow（申込→面談→審査→本入会）→ FAQ → Footer

## コンテンツの編集ポイント

- **導線URL・連絡先**: `constants.ts`
  - `PREREGISTER_URL`（現在は `mailto:`。公式LINE / フォームが決まり次第差し替え）
  - `REP_NAME`（**代表者名。現在プレースホルダー `◯◯　◯◯`。実名に差し替えてください**）
- **メンバー情報**: `components/Members.tsx` の `members` 配列
  - 名前・役割・自己紹介・タグは仮テキストです。自由に編集してください。
  - 画像は `public/images/photo/member/<ファイル名>.jpg` を参照します。
- **代表挨拶の写真**: `public/images/photo/ceo.jpg`
- **文言**: 各 `components/*.tsx`

## 画像について

- ロゴは背景を透過処理し `public/images/logo.png`、favicon 各種は `public/` に生成済み。
- 掲載写真は Web 表示用に圧縮・リサイズ済みです。
  **圧縮前のオリジナルは `photo-originals/`（デプロイ対象外）にバックアップしています。**

## 差し替え待ちのプレースホルダー

- [ ] 代表者名（`constants.ts` の `REP_NAME`）
- [ ] メンバーの氏名・肩書・自己紹介（`components/Members.tsx`）
- [ ] 入会申し込みの導線（公式LINE / フォーム URL。現在は `mailto:`）
- [ ] 特定商取引法に基づく表記の事業者情報（`components/LegalModal.tsx`）
