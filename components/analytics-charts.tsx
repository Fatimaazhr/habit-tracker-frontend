"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Calendar, Target, Award } from "lucide-react"

const weeklyData = [
  { day: "Mon", completed: 6, total: 8, percentage: 75 },
  { day: "Tue", completed: 7, total: 8, percentage: 87.5 },
  { day: "Wed", completed: 5, total: 8, percentage: 62.5 },
  { day: "Thu", completed: 8, total: 8, percentage: 100 },
  { day: "Fri", completed: 6, total: 8, percentage: 75 },
  { day: "Sat", completed: 7, total: 8, percentage: 87.5 },
  { day: "Sun", completed: 6, total: 8, percentage: 75 },
]

const monthlyTrend = [
  { week: "Week 1", completion: 78 },
  { week: "Week 2", completion: 82 },
  { week: "Week 3", completion: 75 },
  { week: "Week 4", completion: 85 },
]

const categoryData = [
  { name: "Health", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Fitness", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Learning", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Mental Health", value: 15, color: "hsl(var(--chart-4))" },
  { name: "Nutrition", value: 5, color: "hsl(var(--chart-5))" },
]

const habitStreaks = [
  { habit: "Water", streak: 15 },
  { habit: "Exercise", streak: 12 },
  { habit: "Reading", streak: 8 },
  { habit: "Meditation", streak: 7 },
  { habit: "Sleep", streak: 5 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Weekly Completion Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Weekly Completion
          </CardTitle>
          <CardDescription>Your habit completion rate over the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="day" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
              <YAxis className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="percentage"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Monthly Progress
          </CardTitle>
          <CardDescription>Average completion rate by week this month</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="week" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
              <YAxis className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="completion"
                stroke="hsl(var(--secondary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Habit Categories
          </CardTitle>
          <CardDescription>Distribution of your habits by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                <span className="text-xs text-muted-foreground">{category.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Habit Streaks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Current Streaks
          </CardTitle>
          <CardDescription>Your longest active streaks by habit</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={habitStreaks} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis type="number" className="text-xs fill-muted-foreground" axisLine={false} tickLine={false} />
              <YAxis
                type="category"
                dataKey="habit"
                className="text-xs fill-muted-foreground"
                axisLine={false}
                tickLine={false}
                width={60}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="streak" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
