import { DashboardCard } from "@/components/DashboardCard";
import { budgetData } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { AlertTriangle, Info, PieChart } from "lucide-react";
import { Bar, BarChart, Cell, Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function BudgetView() {
  const budgetChartData = budgetData.items.map((item, index) => ({
    name: item.name,
    value: item.value,
    color: index === 0 ? "#00f0ff" : `rgba(0, 240, 255, ${0.9 - index * 0.1})`,
    description: item.description
  }));

  const totalBudget = budgetData.total;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <DashboardCard title="1.25兆預算分配全貌" icon={<PieChart className="w-5 h-5" />} className="lg:col-span-2 min-h-[500px]">
          <div className="h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetChartData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={180} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} 
                  interval={0}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#020b1c', borderColor: '#00f0ff', color: '#fff' }}
                  formatter={(value: number) => formatCurrency(value)}
                  cursor={{fill: 'rgba(0, 240, 255, 0.05)'}}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                  {budgetChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        {/* Analysis & Highlights */}
        <div className="space-y-6">
          <DashboardCard title="預算規模與期程" icon={<Info className="w-5 h-5" />}>
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="mb-4">
                <div className="text-5xl font-mono font-bold text-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                  NT$ 1.25 <span className="text-2xl">兆</span>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {budgetData.period} （8年）
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                國防部已公開七大品項類別，涵蓋對美軍購、與美合作研發、國造等範疇。
              </p>
              <div className="w-full bg-primary/10 border border-primary/20 p-3 rounded text-left">
                <h4 className="text-xs font-bold text-primary mb-1 flex items-center gap-1">
                  <Info className="w-3 h-3" /> 重點特色
                </h4>
                <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                  <li>約20萬架無人機、1,000餘艘無人艇</li>
                  <li>HIMARS 82套、M109A7 60門</li>
                  <li>強化彈藥產線與甲車組裝線</li>
                </ul>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="重點項目解析" icon={<Info className="w-5 h-5" />}>
            <div className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
              {budgetChartData.filter(i => !i.color.includes("ff2a2a")).map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-3 last:border-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-primary">{item.name}</h4>
                    <span className="text-xs font-mono text-white/70">{formatCurrency(item.value)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
