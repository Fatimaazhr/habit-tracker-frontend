# HabitFlow - Smart Habit Tracker

Frontend dashboard untuk aplikasi habit tracker dengan sistem pendukung keputusan (SPK) yang dibangun menggunakan HTML, CSS, dan JavaScript vanilla.

## Fitur

- 📊 **Dashboard Analytics** - Visualisasi progress habit dengan Chart.js
- 🎯 **Habit Tracking** - Track kebiasaan harian dengan streak counter
- 🧠 **SPK Recommendations** - Rekomendasi cerdas berdasarkan data habit
- 📱 **Responsive Design** - Optimized untuk desktop dan mobile
- 🎨 **Modern UI** - Clean design dengan TailwindCSS

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: TailwindCSS (CDN)
- **Charts**: Chart.js
- **Icons**: SVG icons
- **Deployment**: GitHub Pages

## Development

Untuk development lokal, cukup buka file `index.html` di browser atau gunakan live server:

\`\`\`bash
# Menggunakan Python (jika tersedia)
python -m http.server 8000

# Menggunakan Node.js live-server
npx live-server

# Atau langsung buka index.html di browser
\`\`\`

## Deployment ke GitHub Pages

### Setup Repository

1. Push kode ke GitHub repository dengan nama `habit-tracker-frontend`
2. Go to repository Settings > Pages
3. Source: Deploy from a branch
4. Branch: `main` / `root`

### Automatic Deployment

GitHub Pages akan otomatis serve file `index.html`:
- Push file ke branch `main`
- Website akan tersedia di: `https://[username].github.io/habit-tracker-frontend/`
- Tidak perlu build process karena menggunakan HTML murni

### Manual Deployment

\`\`\`bash
# Cukup upload file index.html dan script.js ke repository
git add .
git commit -m "Deploy habit tracker dashboard"
git push origin main
\`\`\`

## Konfigurasi

Project menggunakan:
- TailwindCSS via CDN untuk styling
- Chart.js via CDN untuk visualisasi data
- Vanilla JavaScript untuk interaktivity
- Responsive design dengan Tailwind utilities

## Struktur Project

\`\`\`
├── index.html              # Main HTML file
├── script.js              # JavaScript functionality
└── README.md              # Documentation
\`\`\`

## Fitur Dashboard

### Habit Cards
- Toggle completion status
- Weekly progress bars
- Streak counters
- Category badges

### Analytics
- Weekly completion trends (Line chart)
- Category distribution (Doughnut chart)
- Real-time progress updates

### SPK Recommendations
- Warning alerts untuk habits yang menurun
- Suggestions untuk improvement
- Achievement celebrations
- Priority dan confidence scoring

## Customization

Untuk mengubah tema atau menambah fitur:
1. Edit `script.js` untuk menambah data atau functionality
2. Modify `index.html` untuk mengubah layout
3. Gunakan Tailwind classes untuk styling adjustments

## Browser Support

Compatible dengan semua modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
