"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Lightbulb, TrendingUp, AlertTriangle, CheckCircle, Clock, Target, Zap } from "lucide-react"

interface Recommendation {
  id: string
  type: "improvement" | "warning" | "suggestion" | "achievement"
  title: string
  description: string
  priority: "high" | "medium" | "low"
  category: string
  actionText: string
  confidence: number
  impact: "high" | "medium" | "low"
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    type: "warning",
    title: "Sleep Schedule Needs Attention",
    description: "Your sleep habit has only 57% completion rate this week. Poor sleep affects other habits negatively.",
    priority: "high",
    category: "Health",
    actionText: "Set Sleep Reminder",
    confidence: 92,
    impact: "high",
  },
  {
    id: "2",
    type: "suggestion",
    title: "Optimal Exercise Time",
    description: "Based on your completion patterns, you perform best when exercising in the morning between 7-9 AM.",
    priority: "medium",
    category: "Fitness",
    actionText: "Schedule Morning Workout",
    confidence: 78,
    impact: "medium",
  },
  {
    id: "3",
    type: "improvement",
    title: "Reading Habit Enhancement",
    description: "Consider pairing your reading habit with your coffee routine to increase consistency.",
    priority: "medium",
    category: "Learning",
    actionText: "Create Habit Stack",
    confidence: 85,
    impact: "medium",
  },
  {
    id: "4",
    type: "achievement",
    title: "Excellent Water Intake",
    description:
      "Your hydration habit is performing exceptionally well. This positive momentum can boost other health habits.",
    priority: "low",
    category: "Health",
    actionText: "Maintain Momentum",
    confidence: 95,
    impact: "low",
  },
]

const getRecommendationIcon = (type: Recommendation["type"]) => {
  switch (type) {
    case "warning":
      return <AlertTriangle className="w-5 h-5 text-destructive" />
    case "suggestion":
      return <Lightbulb className="w-5 h-5 text-accent" />
    case "improvement":
      return <TrendingUp className="w-5 h-5 text-primary" />
    case "achievement":
      return <CheckCircle className="w-5 h-5 text-secondary" />
  }
}

const getRecommendationColor = (type: Recommendation["type"]) => {
  switch (type) {
    case "warning":
      return "border-destructive/20 bg-destructive/5"
    case "suggestion":
      return "border-accent/20 bg-accent/5"
    case "improvement":
      return "border-primary/20 bg-primary/5"
    case "achievement":
      return "border-secondary/20 bg-secondary/5"
  }
}

const getPriorityBadge = (priority: Recommendation["priority"]) => {
  switch (priority) {
    case "high":
      return <Badge variant="destructive">High Priority</Badge>
    case "medium":
      return <Badge variant="secondary">Medium Priority</Badge>
    case "low":
      return <Badge variant="outline">Low Priority</Badge>
  }
}

const getImpactIcon = (impact: Recommendation["impact"]) => {
  switch (impact) {
    case "high":
      return <Zap className="w-4 h-4 text-destructive" />
    case "medium":
      return <Target className="w-4 h-4 text-accent" />
    case "low":
      return <Clock className="w-4 h-4 text-muted-foreground" />
  }
}

export function SPKRecommendations() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            AI-Powered Recommendations
          </CardTitle>
          <CardDescription>
            Smart insights based on your habit patterns and behavioral analysis using decision support algorithms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Active Insights</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">87%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">+23%</div>
              <div className="text-sm text-muted-foreground">Improvement Potential</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {recommendations.map((rec) => (
          <Card key={rec.id} className={`transition-all hover:shadow-md ${getRecommendationColor(rec.type)}`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getRecommendationIcon(rec.type)}
                  <div>
                    <CardTitle className="text-lg">{rec.title}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {rec.category}
                    </Badge>
                  </div>
                </div>
                {getPriorityBadge(rec.priority)}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{rec.description}</p>

              {/* Confidence and Impact Metrics */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Confidence Level</span>
                  <span className="font-medium">{rec.confidence}%</span>
                </div>
                <Progress value={rec.confidence} className="h-2" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getImpactIcon(rec.impact)}
                    <span className="text-sm text-muted-foreground">
                      {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)} Impact
                    </span>
                  </div>
                  <Button size="sm" variant="outline">
                    {rec.actionText}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SPK Algorithm Info */}
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Brain className="w-5 h-5" />
            How Our SPK Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium">Data Collection</h4>
              <p className="text-xs text-muted-foreground">
                Analyzes your habit completion patterns, timing, and correlations
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-medium">Pattern Recognition</h4>
              <p className="text-xs text-muted-foreground">
                Identifies trends and behavioral patterns using machine learning
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-medium">Decision Analysis</h4>
              <p className="text-xs text-muted-foreground">Applies decision support algorithms to generate insights</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium">Recommendations</h4>
              <p className="text-xs text-muted-foreground">
                Provides personalized, actionable recommendations for improvement
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
