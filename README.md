# 📚 マンガサイト

複数のマンガを管理・閲覧できるWebサイトです。  
**index.html**を開くだけで動作するスタンドアロン版です。

## ✨ 特徴

- 📖 **マンガ一覧**: 複数のマンガを管理・表示
- 📱 **レスポンシブ**: PC・スマホ・タブレット対応
- 👆 **スワイプ対応**: 左右スワイプでページ送り
- ⌨️ **キーボード対応**: ←→キーとEscキー
- 🌙 **ダークテーマ**: 目に優しいデザイン
- 🚀 **スタンドアロン**: HTMLファイル1つで動作

## 🎯 使い方

### 1. 基本的な使用方法
1. `index.html`をブラウザで開く
2. ホームページでマンガを選択
3. リーダーでスワイプまたはボタンでページ送り

### 2. マンガ画像の追加方法

以下のフォルダ構造で画像を配置してください：

```
manga-site/
└── manga/
    ├── manga1/
    │   ├── cover.jpg    # 表紙画像
    │   ├── 1.jpg        # 1ページ目
    │   ├── 2.jpg        # 2ページ目
    │   └── ...
    ├── manga2/
    │   ├── cover.jpg
    │   ├── 1.jpg
    │   └── ...
    └── manga3/
        ├── cover.jpg
        ├── 1.jpg
        └── ...
```

### 3. 新しいマンガの追加・編集

#### マンガの追加
`index.html`の296行目あたりで新しいマンガカードを追加：

```html
<div class="manga-card" onclick="openManga('manga4', 'ドラゴンクエスト', 15)">
    <div class="manga-cover">
        <img src="manga/manga4/cover.jpg" alt="ドラゴンクエスト" 
             onerror="this.src='data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;200&quot; height=&quot;280&quot;><rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;%23333&quot;/><text x=&quot;50%&quot; y=&quot;45%&quot; fill=&quot;white&quot; text-anchor=&quot;middle&quot; dy=&quot;.3em&quot; font-size=&quot;16&quot;>ドラゴンクエスト</text><text x=&quot;50%&quot; y=&quot;55%&quot; fill=&quot;%23ccc&quot; text-anchor=&quot;middle&quot; dy=&quot;.3em&quot; font-size=&quot;12&quot;>15ページ</text></svg>'">
    </div>
    <div class="manga-info">
        <h3>ドラゴンクエスト</h3>
        <p>RPGゲームの漫画版。冒険とバトルが楽しめます。</p>
        <div class="manga-tags">
            <span class="tag">ゲーム</span>
            <span class="tag">ファンタジー</span>
        </div>
        <div class="manga-meta">
            <span>15ページ</span>
            <button class="read-btn">読む</button>
        </div>
    </div>
</div>
```

#### ページ数の変更
既存マンガのページ数を変更する場合：

1. **HTML内の2箇所を修正**：
   ```html
   <!-- onclick属性のページ数 -->
   onclick="openManga('manga1', 'サンプルマンガ1', 12)"  ← ここを8から12に
   
   <!-- 表示用のページ数（2箇所） -->
   <span>12ページ</span>  ← ここも変更
   ```

2. **SVGフォールバック内のページ数**：
   ```html
   <!-- onerror属性内のSVGテキストも更新 -->
   12ページ</text></svg>  ← ここも忘れずに
   ```

**🎯 簡単な変更方法**：
- 「8ページ」を「12ページ」に一括置換
- `openManga('manga1', 'サンプルマンガ1', 8)`を`openManga('manga1', 'サンプルマンガ1', 12)`に変更

#### 自動ページ数検出（高度）
固定ページ数ではなく、画像ファイル数に応じて自動検出したい場合：

```html
<!-- ページ数を-1にすると自動検出モード -->
onclick="openManga('manga1', 'サンプルマンガ1', -1)"
```

この場合、404エラーが発生するまで1.jpg、2.jpg...と順番に読み込んで総ページ数を自動判定します。ただし、読み込み時間が少し長くなる場合があります。

### 4. 操作方法

**ホームページ**
- マンガカードをクリック → リーダー起動

**リーダー**
- **スワイプ**: 左スワイプ=次ページ、右スワイプ=前ページ  
- **ボタン**: 「前のページ」「次のページ」
- **キーボード**: ←→キーでページ送り、Escでホームに戻る
- **戻るボタン**: ホームページに戻る

## 📁 フォルダ構造

```
manga-site/
├── index.html          # メインファイル（これだけで動作）
├── manga/              # マンガ画像フォルダ
│   ├── manga1/
│   │   ├── cover.jpg   # 表紙
│   │   ├── 1.jpg       # ページ画像
│   │   ├── 2.jpg
│   │   └── ...
│   ├── manga2/
│   └── manga3/
└── README.md
```

## 💡 画像について

- **対応形式**: JPG, PNG, WebP等
- **推奨サイズ**: 高さ1000px程度（自動リサイズ）
- **ファイル名**: `1.jpg`, `2.jpg`...（連番）
- **表紙**: `cover.jpg`（必須）

画像が見つからない場合は、自動でプレースホルダーが表示されます。

## 🌐 デプロイ

GitHub Pagesなどの静的ホスティングサービスで簡単にデプロイできます：

1. GitHubリポジトリに`index.html`と`manga/`フォルダをアップロード
2. GitHub Pages設定でメインブランチを選択
3. 公開URLでアクセス可能

MIT License
