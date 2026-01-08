import { DashboardCard } from "@/components/DashboardCard";
import { backlogData, timelineEvents } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { AlertTriangle, Calendar, Clock, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function BacklogView() {
  const chartData = backlogData.items.map(item => ({
    name: item.name,
    original: new Date(item.originalDate).getFullYear(),
    expected: new Date(item.expectedDate).getFullYear(),
    delay: item.delayYears,
    amount: item.amountTWD
  }));

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 flex items-center gap-4">
          <div className="p-3 bg-destructive/20 rounded-full">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">積壓總金額</h3>
            <p className="text-3xl font-mono font-bold text-destructive">{formatCurrency(backlogData.totalTWD)}</p>
            <p className="text-xs text-destructive/70 mt-1">約 USD 215.4 億</p>
          </div>
        </div>
        
        <div className="bg-background/50 border border-white/10 rounded-lg p-6 flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">平均延遲時間</h3>
            <p className="text-3xl font-mono font-bold text-primary">2.8 <span className="text-lg">年</span></p>
            <p className="text-xs text-muted-foreground mt-1">主要集中於空軍裝備</p>
          </div>
        </div>

        <div className="bg-background/50 border border-white/10 rounded-lg p-6 flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 rounded-full">
            <TrendingUp className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">積壓增長趨勢</h3>
            <p className="text-3xl font-mono font-bold text-orange-500">+15%</p>
            <p className="text-xs text-muted-foreground mt-1">較去年同期增加</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Delay Analysis Chart */}
        <DashboardCard title="主要延遲項目分析" icon={<BarChart className="w-5 h-5" />} className="lg:col-span-2 min-h-[400px]">
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={120} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#020b1c', borderColor: '#ff2a2a', color: '#fff' }}
                  cursor={{fill: 'rgba(255, 42, 42, 0.05)'}}
                />
                <Legend />
                <Bar dataKey="delay" name="延遲年數" fill="#ff2a2a" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {backlogData.items.map((item, idx) => (
              <div key={idx} className="bg-background/30 p-3 rounded border-l-2 border-destructive">
                <h4 className="font-bold text-white text-sm">{item.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.reason}</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-white/50">原定: {item.originalDate}</span>
                  <span className="text-destructive font-bold">預計: {item.expectedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Timeline */}
        <DashboardCard title="關鍵事件時間軸" icon={<Calendar className="w-5 h-5" />} className="h-full">
          <div className="relative border-l-2 border-primary/30 ml-3 space-y-8 py-4 h-full overflow-y-auto custom-scrollbar pr-2">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative pl-6 group">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all" />
                <span className="text-xs font-mono text-primary/70 block mb-1">{event.date}</span>
                <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">{event.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
