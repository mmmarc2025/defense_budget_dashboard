import { DashboardCard } from "@/components/DashboardCard";
import { budgetData } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { AlertTriangle, Info, PieChart } from "lucide-react";
import { Bar, BarChart, Cell, Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function BudgetView() {
  const budgetChartData = budgetData.items.map(item => ({
    name: item.name,
    value: item.value,
    color: item.isUnspecified ? "#ff2a2a" : "#00f0ff",
    description: item.description
  }));

  const totalBudget = budgetData.total;
  const unspecifiedBudget = budgetData.items.find(i => i.isUnspecified)?.value || 0;
  const unspecifiedPercentage = ((unspecifiedBudget / totalBudget) * 100).toFixed(1);

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
          <DashboardCard title="預算透明度警示" icon={<AlertTriangle className="w-5 h-5" />} variant="danger">
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="relative w-40 h-40 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={[
                        { name: "未說明", value: unspecifiedBudget, color: "#ff2a2a" },
                        { name: "已說明", value: totalBudget - unspecifiedBudget, color: "#00f0ff" }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#ff2a2a" />
                      <Cell fill="rgba(0, 240, 255, 0.2)" />
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-destructive">{unspecifiedPercentage}%</span>
                  <span className="text-xs text-muted-foreground">未詳細說明</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                預算中約有 <span className="text-destructive font-bold">{formatCurrency(unspecifiedBudget)}</span> 被列為「未詳細說明項目」或機密預算，缺乏具體用途說明。
              </p>
              <div className="w-full bg-destructive/10 border border-destructive/20 p-3 rounded text-left">
                <h4 className="text-xs font-bold text-destructive mb-1 flex items-center gap-1">
                  <Info className="w-3 h-3" /> 潛在風險
                </h4>
                <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                  <li>國會監督困難</li>
                  <li>資金流向不明</li>
                  <li>可能包含爭議性採購</li>
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
