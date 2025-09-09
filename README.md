# EME Corporate Website

A modern, professional corporate website for EME Corporation - Heavy Equipment & Hauling Services.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🏗️ Project Structure

```
EME/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About Us page
│   ├── services/page.tsx  # Services page
│   ├── equipment/page.tsx # Equipment page
│   ├── mission/page.tsx   # Mission & Vision page
│   └── contact/page.tsx   # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Homepage hero section
│       ├── Services.tsx   # Services overview
│       ├── Equipment.tsx  # Equipment showcase
│       ├── About.tsx      # About section
│       └── Contact.tsx    # Contact section
├── requirements.md        # Project requirements document
└── README.md             # This file
```

## 🎨 Design Features

- **Modern & Professional**: Clean, contemporary design with construction industry aesthetics
- **Dark Theme**: Black/grey base with yellow/orange accent colors
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth transitions and hover effects
- **Typography**: Inter + Poppins font combination for readability and impact

## 🏢 Company Information

- **Company**: EME Corporation
- **Location**: #38 Sampanguita St. Aranzazu Subd. Burgos Rodriguez Rizal
- **President**: Paul Fernandez (also Rock Castles Records & Eagles Club President)
- **Vice President**: Jenny Fernandez

### Services
- Hauling Services
- Equipment Rentals
- Truck Parts Sales
- Heavy Equipment Dealership

### Equipment
- Loader
- Backhoe
- 10 Wheeler Dump Truck
- 12 Wheeler Dump Truck
- Mini Dump Truck

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **Home** (`/`) - Landing page with hero video background, services overview, equipment showcase, about, and contact
- **About** (`/about`) - Company overview and leadership team
- **Services** (`/services`) - Detailed service descriptions
- **Equipment** (`/equipment`) - Equipment catalog with specifications
- **Mission & Vision** (`/mission`) - Company mission, vision, and values
- **Contact** (`/contact`) - Contact form and company information

## 🎬 動画背景の設定

HEROセクションには重機の動画背景が設定されています：

- **動画ファイル**: `public/videos/heavy-equipment-bg.mp4`
- **効果**: スローモーション（0.5倍速）再生
- **フィルター**: 暗めの設定で文字を読みやすく調整
- **フォールバック**: 動画が読み込めない場合はグラデーション背景

### 動画ファイルの準備

1. 重機作業の動画（MP4形式、1920x1080推奨）を準備
2. `public/videos/heavy-equipment-bg.mp4` として保存
3. 現在はサンプル動画が表示されます

詳細は `public/videos/README.md` を参照してください。

## 🎯 Key Features

- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized images and efficient loading
- **Accessibility**: ARIA labels and keyboard navigation
- **Professional Forms**: Contact forms with validation
- **Mobile Responsive**: Works perfectly on all screen sizes
- **Modern UI/UX**: Smooth animations and professional design

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 📋 Brand Message

> "We are providing high quality aggregates and merchandising trucks and heavy equipment parts."

**Mission**: To provide quality aggregates and equipment at affordable prices.
**Vision**: To become the top provider of quarry services.

## 🛠️ Development Notes

- Uses Tailwind CSS custom configuration with EME brand colors
- Responsive design patterns implemented throughout
- Modular component architecture for easy maintenance
- TypeScript for type safety and better development experience
- Custom animations and transitions for professional feel

---

Built with ❤️ for EME Corporation
