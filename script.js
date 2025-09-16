import { Chart } from "@/components/ui/chart"
// Sample data
const habits = [
  {
    id: 1,
    title: "Minum Air 8 Gelas",
    description: "Minum minimal 8 gelas air putih setiap hari",
    category: "Kesehatan",
    completed: true,
    streak: 12,
    weeklyProgress: 85,
    color: "primary",
  },
  {
    id: 2,
    title: "Olahraga 30 Menit",
    description: "Berolahraga minimal 30 menit setiap hari",
    category: "Fitness",
    completed: false,
    streak: 5,
    weeklyProgress: 71,
    color: "accent",
  },
  {
    id: 3,
    title: "Membaca Buku",
    description: "Membaca buku minimal 20 halaman",
    category: "Pendidikan",
    completed: true,
    streak: 8,
    weeklyProgress: 92,
    color: "secondary",
  },
  {
    id: 4,
    title: "Meditasi",
    description: "Meditasi selama 10 menit setiap pagi",
    category: "Mental",
    completed: true,
    streak: 15,
    weeklyProgress: 78,
    color: "primary",
  },
  {
    id: 5,
    title: "Tidur 8 Jam",
    description: "Tidur minimal 8 jam setiap malam",
    category: "Kesehatan",
    completed: false,
    streak: 3,
    weeklyProgress: 64,
    color: "accent",
  },
  {
    id: 6,
    title: "Jurnal Harian",
    description: "Menulis jurnal refleksi harian",
    category: "Mental",
    completed: true,
    streak: 7,
    weeklyProgress: 89,
    color: "secondary",
  },
]

const recommendations = [
  {
    type: "warning",
    title: "Perhatian: Konsistensi Olahraga Menurun",
    description:
      "Tingkat penyelesaian olahraga Anda turun 15% minggu ini. Pertimbangkan untuk menyesuaikan jadwal atau intensitas.",
    priority: "Tinggi",
    confidence: 87,
    impact: "Sedang",
  },
  {
    type: "suggestion",
    title: "Saran: Tambah Kebiasaan Nutrisi",
    description:
      "Berdasarkan pola Anda, menambah kebiasaan makan buah dapat meningkatkan kesehatan secara keseluruhan.",
    priority: "Sedang",
    confidence: 73,
    impact: "Tinggi",
  },
  {
    type: "achievement",
    title: "Pencapaian: Streak Meditasi Terbaik!",
    description: "Selamat! Anda telah mencapai streak meditasi terpanjang (15 hari). Pertahankan momentum ini!",
    priority: "Rendah",
    confidence: 100,
    impact: "Tinggi",
  },
]

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  renderHabitCards()
  renderRecommendations()
  initializeCharts()
  updateTodayStats()

  // Theme toggle
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)
})

function renderHabitCards() {
  const container = document.getElementById("habitCards")
  container.innerHTML = ""

  habits.forEach((habit) => {
    const card = createHabitCard(habit)
    container.appendChild(card)
  })
}

function createHabitCard(habit) {
  const card = document.createElement("div")
  card.className = "bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"

  const colorClasses = {
    primary: "text-primary-600 bg-primary-100",
    accent: "text-accent-600 bg-accent-100",
    secondary: "text-secondary-600 bg-secondary-100",
  }

  card.innerHTML = `
        <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
                <h4 class="text-lg font-semibold text-gray-900 mb-1">${habit.title}</h4>
                <p class="text-sm text-gray-600 mb-2">${habit.description}</p>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[habit.color]}">
                    ${habit.category}
                </span>
            </div>
            <button onclick="toggleHabit(${habit.id})" class="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
                ${
                  habit.completed
                    ? '<svg class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
                    : '<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>'
                }
            </button>
        </div>
        
        <div class="space-y-3">
            <div>
                <div class="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress Mingguan</span>
                    <span>${habit.weeklyProgress}%</span>
                </div>
                <div class="bg-gray-200 rounded-full h-2">
                    <div class="bg-${habit.color}-500 h-2 rounded-full transition-all duration-300" style="width: ${habit.weeklyProgress}%"></div>
                </div>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex items-center text-sm text-gray-600">
                    <svg class="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.5 2c1.54.02 3.09.75 4.07 1.14l-1.9 1.9c-.3-.15-.64-.25-1-.25-.83 0-1.58.34-2.12.88-.54.54-.88 1.29-.88 2.12 0 .36.1.7.25 1l-1.9 1.9C8.75 9.09 8.02 7.54 8 6c0-2.21 1.79-4 4-4 .17 0 .33.01.5.02zM21 12c0 2.21-1.79 4-4 4-.17 0-.33-.01-.5-.02-1.54-.02-3.09-.75-4.07-1.14l1.9-1.9c.3.15.64.25 1 .25.83 0 1.58-.34 2.12-.88.54-.54.88-1.29.88-2.12 0-.36-.1-.7-.25-1l1.9-1.9c.39.98 1.12 2.53 1.14 4.07.01.17.02.33.02.5z"/>
                    </svg>
                    <span>${habit.streak} hari berturut-turut</span>
                </div>
            </div>
        </div>
    `

  return card
}

function toggleHabit(habitId) {
  const habit = habits.find((h) => h.id === habitId)
  if (habit) {
    habit.completed = !habit.completed
    if (habit.completed) {
      habit.streak += 1
    }
    renderHabitCards()
    updateTodayStats()
  }
}

function renderRecommendations() {
  const container = document.getElementById("recommendations")
  container.innerHTML = ""

  recommendations.forEach((rec) => {
    const card = createRecommendationCard(rec)
    container.appendChild(card)
  })
}

function createRecommendationCard(rec) {
  const card = document.createElement("div")

  const typeStyles = {
    warning: "border-red-200 bg-red-50",
    suggestion: "border-blue-200 bg-blue-50",
    achievement: "border-green-200 bg-green-50",
  }

  const iconStyles = {
    warning: "text-red-500",
    suggestion: "text-blue-500",
    achievement: "text-green-500",
  }

  const icons = {
    warning:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>',
    suggestion:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
    achievement:
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  }

  card.className = `border rounded-xl p-6 ${typeStyles[rec.type]}`
  card.innerHTML = `
        <div class="flex items-start">
            <div class="flex-shrink-0">
                <svg class="w-6 h-6 ${iconStyles[rec.type]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${icons[rec.type]}
                </svg>
            </div>
            <div class="ml-4 flex-1">
                <h4 class="text-lg font-semibold text-gray-900 mb-2">${rec.title}</h4>
                <p class="text-gray-700 mb-4">${rec.description}</p>
                <div class="flex items-center space-x-4 text-sm text-gray-600">
                    <span class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                        Prioritas: ${rec.priority}
                    </span>
                    <span class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                        Confidence: ${rec.confidence}%
                    </span>
                    <span class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                        Impact: ${rec.impact}
                    </span>
                </div>
            </div>
        </div>
    `

  return card
}

function updateTodayStats() {
  const completed = habits.filter((h) => h.completed).length
  const total = habits.length
  const rate = Math.round((completed / total) * 100)

  document.getElementById("completedToday").textContent = completed
  document.getElementById("totalHabits").textContent = total
  document.getElementById("completionRate").textContent = rate + "%"
  document.getElementById("progressBar").style.width = rate + "%"
}

function initializeCharts() {
  // Weekly trend chart
  const weeklyCtx = document.getElementById("weeklyChart").getContext("2d")
  new Chart(weeklyCtx, {
    type: "line",
    data: {
      labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
      datasets: [
        {
          label: "Kebiasaan Selesai",
          data: [4, 6, 5, 7, 5, 6, 5],
          borderColor: "#22c55e",
          backgroundColor: "rgba(34, 197, 94, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 8,
        },
      },
    },
  })

  // Category distribution chart
  const categoryCtx = document.getElementById("categoryChart").getContext("2d")
  new Chart(categoryCtx, {
    type: "doughnut",
    data: {
      labels: ["Kesehatan", "Fitness", "Mental", "Pendidikan"],
      datasets: [
        {
          data: [2, 1, 2, 1],
          backgroundColor: ["#22c55e", "#f59e0b", "#64748b", "#3b82f6"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  })
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark")
}
