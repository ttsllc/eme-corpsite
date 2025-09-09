# 動画表示オプション

Paul Fernandez 動画の表示には以下の2つのオプションがあります：

## オプション1: 自然なアスペクト比（現在適用中）
```tsx
{/* 現在の設定: 縦型動画を自然な比率で表示 */}
<div className="relative bg-dark-900 rounded-lg overflow-hidden max-w-xs mx-auto">
  <div className="aspect-[9/16]">
    <video className="w-full h-full object-contain" ... >
```

**特徴**:
- ✅ 歪みなし
- ✅ 動画全体が見える
- ✅ 縦型動画に最適化
- ✅ コンパクトなサイズ

## オプション2: 横長表示（上下クロップ）
```tsx
{/* 代替設定: 横長領域に合わせて上下をクロップ */}
<div className="relative aspect-video bg-dark-900 rounded-lg overflow-hidden">
  <video className="w-full h-full object-cover" ... >
```

**特徴**:
- ✅ 歪みなし
- ✅ 横長レイアウトに適合
- ⚠️ 上下が少しカットされる
- ✅ より大きな表示

## オプション3: 小さめ縦型表示
```tsx
{/* 小さめサイズの縦型表示 */}
<div className="relative bg-dark-900 rounded-lg overflow-hidden max-w-[200px] mx-auto">
  <div className="aspect-[9/16]">
    <video className="w-full h-full object-contain" ... >
```

**特徴**:
- ✅ 歪みなし
- ✅ 動画全体が見える
- ✅ 非常にコンパクト
- ✅ モバイルフレンドリー

## 切り替え方法

`app/about/page.tsx` の該当部分で以下の設定を変更：

1. **現在のオプション1を使い続ける** → そのまま
2. **オプション2に変更** → コメントアウトを入れ替え
3. **オプション3に変更** → `max-w-xs` を `max-w-[200px]` に変更
