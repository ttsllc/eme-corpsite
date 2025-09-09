# Paul Fernandez 動画の表示オプション

## 現在の動画情報
- **元サイズ**: 1280x720 (16:9 横長)
- **回転**: -90度 (縦表示)
- **表示サイズ**: 720x1280 (9:16 縦長)

## 表示オプション

### 1. 完全ゼロ歪み（現在の設定）
```css
objectFit: 'none'
width: '100%'
height: 'auto'
maxWidth: '300px'
```
- ✅ 完全に歪みなし
- ❌ 画面サイズに応じて小さく見える場合がある

### 2. コンテイナー内フィット
```css
objectFit: 'contain'
width: '100%'
height: '100%'
aspect-ratio: '9/16'
```
- ✅ コンテナー内に完全収容
- ✅ 歪みなし
- ❌ 上下または左右に余白ができる

### 3. 中央部分クロップ
```css
objectFit: 'cover'
width: '100%'
height: '100%'
aspect-ratio: '9/16'
```
- ✅ コンテナーを完全に埋める
- ✅ 画角は自然
- ❌ 上下が少しクロップされる

### 4. カスタムサイズ（推奨）
```css
objectFit: 'contain'
width: '100%'
height: 'auto'
maxWidth: '400px'
aspectRatio: '9/16'
```
- ✅ 適度なサイズ
- ✅ 歪みなし
- ✅ レスポンシブ

### 5. 固定アスペクト比
```css
objectFit: 'contain'
aspectRatio: '9/16'
maxHeight: '500px'
maxWidth: '280px'
```
- ✅ 一定のサイズ
- ✅ 縦動画に最適化
- ✅ デザインと調和
