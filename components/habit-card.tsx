import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Flame, TrendingUp } from "lucide-react"

interface HabitCardProps {
  id: string
  title: string
  description: string
  category: string
  streak: number
  completedToday: boolean
  weeklyProgress: number
  targetDays: number
  completedDays: number
  icon: React.ReactNode
  color: "primary" | "secondary" | "accent"
}

export function HabitCard({
  title,
  description,
  category,
  streak,
  completedToday,
  weeklyProgress,
  targetDays,
  completedDays,
  icon,
  color,
}: HabitCardProps) {
  const colorClasses = {
    primary: "border-primary/20 bg-primary/5",
    secondary: "border-secondary/20 bg-secondary/5",
    accent: "border-accent/20 bg-accent/5",
  }

  const iconColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  }

  return (
    <Card className={`transition-all hover:shadow-md ${colorClasses[color]}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-background ${iconColorClasses[color]}`}>{icon}</div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <Badge variant="outline" className="text-xs mt-1">
                {category}
              </Badge>
            </div>
          </div>
          <Button variant={completedToday ? "default" : "outline"} size="sm" className="shrink-0">
            {completedToday ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Weekly Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">This Week</span>
            <span className="font-medium">
              {completedDays}/{targetDays} days
            </span>
          </div>
          <Progress value={weeklyProgress} className="h-2" />
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium">{streak} day streak</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <TrendingUp className="w-3 h-3" />
            <span>{weeklyProgress}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
