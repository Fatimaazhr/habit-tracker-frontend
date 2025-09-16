import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, TrendingUp, Calendar, Award, Plus, BarChart3, Brain, Settings } from "lucide-react"
import { HabitCard } from "@/components/habit-card"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { SPKRecommendations } from "@/components/spk-recommendations"
import { Droplets, Book, Dumbbell, Moon, Apple, Radiation as Meditation } from "lucide-react"

export default function HabitTrackerDashboard() {
  const habits = [
    {
      id: "1",
      title: "Drink Water",
      description: "Stay hydrated with 8 glasses of water daily",
      category: "Health",
      streak: 15,
      completedToday: true,
      weeklyProgress: 85,
      targetDays: 7,
      completedDays: 6,
      icon: <Droplets className="w-5 h-5" />,
      color: "primary" as const,
    },
    {
      id: "2",
      title: "Read Books",
      description: "Read for at least 30 minutes every day",
      category: "Learning",
      streak: 8,
      completedToday: false,
      weeklyProgress: 71,
      targetDays: 7,
      completedDays: 5,
      icon: <Book className="w-5 h-5" />,
      color: "secondary" as const,
    },
    {
      id: "3",
      title: "Exercise",
      description: "Complete a 45-minute workout session",
      category: "Fitness",
      streak: 12,
      completedToday: true,
      weeklyProgress: 100,
      targetDays: 5,
      completedDays: 5,
      icon: <Dumbbell className="w-5 h-5" />,
      color: "accent" as const,
    },
    {
      id: "4",
      title: "Sleep Early",
      description: "Go to bed before 10 PM for better rest",
      category: "Health",
      streak: 5,
      completedToday: false,
      weeklyProgress: 57,
      targetDays: 7,
      completedDays: 4,
      icon: <Moon className="w-5 h-5" />,
      color: "primary" as const,
    },
    {
      id: "5",
      title: "Eat Fruits",
      description: "Include at least 2 servings of fruits daily",
      category: "Nutrition",
      streak: 20,
      completedToday: true,
      weeklyProgress: 85,
      targetDays: 7,
      completedDays: 6,
      icon: <Apple className="w-5 h-5" />,
      color: "secondary" as const,
    },
    {
      id: "6",
      title: "Meditate",
      description: "Practice mindfulness for 15 minutes",
      category: "Mental Health",
      streak: 7,
      completedToday: true,
      weeklyProgress: 71,
      targetDays: 7,
      completedDays: 5,
      icon: <Meditation className="w-5 h-5" />,
      color: "accent" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">HabitFlow</h1>
                <p className="text-sm text-muted-foreground">Smart Habit Tracker</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Habit
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="secondary" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  My Habits
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Insights
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Habits</span>
                  <Badge variant="secondary">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Streak</span>
                  <Badge variant="default">12 days</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Completion Rate</span>
                  <Badge variant="outline">85%</Badge>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-balance">Good morning, Alex!</h2>
                <p className="text-muted-foreground mt-1">You're doing great! Keep up the momentum with your habits.</p>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">+15% this week</span>
              </div>
            </div>

            {/* Today's Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Today's Progress
                </CardTitle>
                <CardDescription>Track your daily habits and maintain your streaks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Completion</span>
                    <span className="text-sm text-muted-foreground">6/8 habits</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Habit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {habits.map((habit) => (
                <HabitCard key={habit.id} {...habit} />
              ))}
            </div>

            {/* Analytics Charts Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Analytics Overview</h3>
              <AnalyticsCharts />
            </div>

            {/* Smart Recommendations Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Smart Recommendations</h3>
              <SPKRecommendations />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
