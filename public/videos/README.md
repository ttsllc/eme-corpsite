# 動画ファイルの設置について

## 必要な動画ファイル

EMEサイトの背景動画として、以下のファイルを配置してください：

### heavy-equipment-bg.mp4
- **サイズ**: 1920x1080 または 1280x720 以上推奨
- **長さ**: 10-30秒（ループ再生されます）
- **内容**: 重機（ダンプトラック、ローダー、バックホウなど）が作業している動画
- **フォーマット**: MP4 (H.264エンコード)
- **推奨設定**:
  - ビットレート: 5-10 Mbps
  - フレームレート: 30fps
  - 音声: 不要（無音でOK）

## 動画素材の入手先

### 無料素材サイト
- **Pexels**: https://www.pexels.com/search/videos/construction%20equipment/
- **Pixabay**: https://pixabay.com/videos/search/heavy%20equipment/
- **Unsplash**: https://unsplash.com/s/videos/construction

### 検索キーワード例
- "heavy equipment"
- "construction machinery"
- "dump truck"
- "excavator"
- "loader"
- "construction site"

## ファイル配置方法

1. 動画ファイルを `heavy-equipment-bg.mp4` という名前で保存
2. このフォルダ（`public/videos/`）に配置
3. ファイルサイズは10MB以下を推奨（読み込み速度のため）

## 注意事項

- 動画が読み込めない場合は、自動的にフォールバック背景が表示されます
- スローモーション効果（0.5倍速）が自動で適用されます
- 動画は暗めのフィルターがかかります（brightness: 0.4）

## 現在の設定

### Paul Fernandez 社長紹介動画
- ファイル: `IMG_0475.MOV` (53MB)
- 使用箇所: About ページの Leadership セクション
- フォーマット: QuickTime MOV

### HEROセクション背景動画
現在はサンプル動画が表示されます。
実際の重機動画に置き換えることで、よりプロフェッショナルな見た目になります。

## 動画変換について

MOVファイルをより広範なブラウザでサポートするため、MP4形式への変換を推奨します：

### ffmpeg を使用した変換（推奨）
```bash
# Homebrewでffmpegをインストール
brew install ffmpeg

# MOVをMP4に変換
ffmpeg -i IMG_0475.MOV -vcodec h264 -acodec aac paul-fernandez-intro.mp4
```

### オンライン変換ツール
- CloudConvert: https://cloudconvert.com/mov-to-mp4
- Convertio: https://convertio.co/mov-mp4/

### 変換後の設定
MP4ファイルが作成されたら、videoタグに以下を追加：
```html
<source src="/videos/paul-fernandez-intro.mp4" type="video/mp4" />
```
