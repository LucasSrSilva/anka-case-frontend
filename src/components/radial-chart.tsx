"use client"

import { TrendingUp } from "lucide-react"
import {
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


export function RadialChart({ clientWithPlannerPercentual, totalClients }: { clientWithPlannerPercentual: number, totalClients: number }) {
    const chartData = [
        { browser: "safari", visitors: 500, fill: "url(#meuGradient)" },
    ]
    const endAngle = (clientWithPlannerPercentual / 100) * 360
    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        safari: {
            label: "Safari",
            color: "var(--chart-2)",
        },
    } satisfies ChartConfig
    return (
        <Card className="flex flex-col bg-[#1B1B1B] w-[470px] scale-75">
            <CardHeader className="items-center border-b border-b-[#2B2B2B] p-4 m-2 ">
                <CardTitle>Clientes com planejamento</CardTitle>
            </CardHeader>
            <div className="flex items-center justify-start">
                <CardContent className="min-w-56 min-h-56 py-4 relative">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <RadialBarChart
                            data={chartData}
                            startAngle={0}
                            endAngle={endAngle}
                            innerRadius={80}
                            outerRadius={110}
                        >
                            <defs>
                                <linearGradient id="meuGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="rgba(147, 253, 103, 1)" />
                                    <stop offset="50%" stopColor="rgba(216, 255, 44, 1)" />
                                    <stop offset="100%" stopColor="rgba(103, 191, 78, 1)" />
                                </linearGradient>
                            </defs>
                            <PolarGrid
                                gridType="circle"
                                radialLines={false}
                                stroke="none"
                                className="first:fill-muted last:fill-background"
                                polarRadius={[86, 74]}
                            />
                            <circle
                                cx="50%"
                                cy="50%"
                                r="75"
                                fill="#444444"
                            />
                            <RadialBar dataKey="visitors" background cornerRadius={10} />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>

                            </PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                    <TrendingUp size={48} color="#93FD67" className="absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2" />
                </CardContent>
                <CardDescription>
                    <p className="text-5xl font-bold text-white">{clientWithPlannerPercentual.toFixed(0)}%</p>
                    <p className="text-3xl ">{totalClients} clientes</p>
                </CardDescription>
            </div>
        </Card>
    )
}
