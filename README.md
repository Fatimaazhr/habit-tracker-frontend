# HabitFlow - Smart Habit Tracker

Frontend dashboard untuk aplikasi habit tracker dengan sistem pendukung keputusan (SPK) yang dibangun menggunakan Next.js dan TailwindCSS.

## Fitur

- 📊 **Dashboard Analytics** - Visualisasi progress habit dengan charts interaktif
- 🎯 **Habit Tracking** - Track kebiasaan harian dengan streak counter
- 🧠 **SPK Recommendations** - Rekomendasi cerdas berdasarkan data habit
- 📱 **Responsive Design** - Optimized untuk desktop dan mobile
- 🎨 **Modern UI** - Clean design dengan TailwindCSS dan shadcn/ui

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## Deployment ke GitHub Pages

### Setup Repository

1. Push kode ke GitHub repository dengan nama `habit-tracker-frontend`
2. Go to repository Settings > Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` / `root`

### Automatic Deployment

GitHub Actions workflow sudah dikonfigurasi untuk automatic deployment:
- Setiap push ke branch `main` akan trigger build dan deploy
- Build output akan di-deploy ke branch `gh-pages`
- Website akan tersedia di: `https://[username].github.io/habit-tracker-frontend/`

### Manual Deployment

\`\`\`bash
# Build static export
npm run build

# Deploy folder 'out' ke GitHub Pages
\`\`\`

## Konfigurasi

Project sudah dikonfigurasi untuk GitHub Pages dengan:
- Static export enabled (`output: 'export'`)
- Base path configuration untuk GitHub Pages
- Unoptimized images untuk static hosting
- GitHub Actions workflow untuk automatic deployment

## Struktur Project

\`\`\`
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── habit-card.tsx    # Habit tracking cards
│   ├── analytics-charts.tsx # Charts dan visualisasi
│   └── spk-recommendations.tsx # SPK recommendations
├── .github/workflows/    # GitHub Actions
└── public/              # Static assets
\`\`\`

## Customization

Untuk mengubah base path (jika nama repository berbeda):
1. Update `basePath` dan `assetPrefix` di `next.config.mjs`
2. Update workflow file di `.github/workflows/deploy.yml`
