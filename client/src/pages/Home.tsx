import { useAuth } from "@/_core/hooks/useAuth";
import { CommentSection } from "@/components/CommentSection";
import { DashboardCard } from "@/components/DashboardCard";
import { ShareButton } from "@/components/ShareButton";
import { BacklogView } from "@/components/views/BacklogView";
import { BudgetView } from "@/components/views/BudgetView";
import { SalesView } from "@/components/views/SalesView";
import { armsSales2025, backlogData, budgetData, newsFeed, timelineEvents } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { AlertTriangle, Clock, Database, Globe, Heart, PieChart, Shield, Target, Zap } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<"overview" | "budget" | "sales" | "backlog">("overview");

  // Prepare chart data for overview
  const budgetChartData = budgetData.items.map(item => ({
    name: item.name.length > 8 ? item.name.substring(0, 8) + "..." : item.name,
    fullName: item.name,
    value: item.value,
    color: item.isUnspecified ? "#ff2a2a" : "#00f0ff"
  }));

  const backlogChartData = backlogData.items.map(item => ({
    name: item.name,
    value: item.amountTWD,
    delay: item.delayYears
  }));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-primary-foreground pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,11,28,0.9),rgba(2,11,28,0.7))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-primary/20 bg-background/80 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary animate-pulse" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white">
                TAIWAN DEFENSE <span className="text-primary">MONITOR</span>
              </h1>
              <p className="text-[10px] text-primary/70 tracking-[0.2em] uppercase">Strategic Budget Analysis System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <nav className="hidden md:flex gap-1">
            {[
              { id: "overview", label: "總覽儀表板" },
              { id: "budget", label: "預算結構" },
              { id: "sales", label: "軍售清單" },
              { id: "backlog", label: "積壓分析" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === tab.id 
                    ? "border-primary text-primary bg-primary/10" 
                    : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8 space-y-12">
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden rounded-lg border border-primary/20 bg-background/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-primary" />
              特別預算案 2026-2033
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
              1.25兆 <span className="text-primary">國防特別預算</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-white/80 mb-8 tracking-wide">
              如何打造台灣之盾與不對稱戰力
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed border-l-4 border-primary/50 pl-6">
              深入分析台灣史上最大規模國防投資，為何六度遭藍白擋下?
              透過數據視覺化，揭示國防自主與外購的真實比例，並探討<span className="text-destructive font-bold">預算細節未對國民說明</span>的潛在風險。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActiveTab("budget")}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-primary/90 transition-all clip-path-slant flex items-center gap-2 group"
              >
                探索預算分配 <Target className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveTab("sales")}
                className="px-8 py-4 bg-transparent border border-primary/50 text-primary font-bold uppercase tracking-widest hover:bg-primary/10 transition-all clip-path-slant flex items-center gap-2"
              >
                查看軍購清單 <Database className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 pointer-events-none hidden lg:block">
            <div className="w-full h-full bg-[url('/images/tactical-map.jpg')] bg-contain bg-no-repeat bg-center mix-blend-screen" />
          </div>
        </section>

        {/* Key Metrics Row */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">
              關鍵數據 <span className="text-primary">KEY METRICS</span>
            </h2>
            <ShareButton 
              title="台灣國防預算分析 - 關鍵數據"
              text="1.25兆國防特別預算深度分析：預算分配、美國軍售與未交付積壓一次看懂"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard title="總預算規模" icon={<Database className="w-5 h-5" />}>
            <div className="flex flex-col h-full justify-between">
              <div className="text-4xl font-mono font-bold text-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                NT$ 1.25 <span className="text-lg">兆</span>
              </div>
              <div className="space-y-1 mt-4">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2026-2033 (8年)</span>
                  <span className="text-green-400">+200% vs 前次</span>
                </div>
                <div className="w-full bg-secondary h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-full animate-[pulse_3s_infinite]" />
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="對美軍購占比" icon={<Globe className="w-5 h-5" />}>
            <div className="flex flex-col h-full justify-between">
              <div className="text-4xl font-mono font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                76%
              </div>
              <p className="text-sm text-muted-foreground mt-2">約 NT$ 9,500 億</p>
              <p className="text-xs text-primary/70 mt-1">高度依賴美方</p>
            </div>
          </DashboardCard>

          <DashboardCard title="最新軍售案" icon={<Target className="w-5 h-5" />}>
            <div className="flex flex-col h-full justify-between">
              <div className="text-4xl font-mono font-bold text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
                NT$ 3,500 <span className="text-lg">億</span>
              </div>
              <p className="text-sm text-green-400/80 mt-2">2025.12 批准</p>
              <p className="text-xs text-muted-foreground mt-1">史上最大單筆</p>
            </div>
          </DashboardCard>

          <DashboardCard title="未交付積壓" icon={<AlertTriangle className="w-5 h-5" />} variant="danger">
            <div className="flex flex-col h-full justify-between">
              <div className="text-4xl font-mono font-bold text-destructive drop-shadow-[0_0_10px_rgba(255,42,42,0.5)]">
                NT$ 6,880 <span className="text-lg">億</span>
              </div>
              <p className="text-sm text-destructive/80 mt-2">截至 2025.10</p>
              <p className="text-xs text-muted-foreground mt-1">產能嚴重不足</p>
            </div>
          </DashboardCard>
        </div>
        </div>

        {/* Main Content Area */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Left Column: Charts & Analysis */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Budget Breakdown */}
              <DashboardCard title="1.25兆預算分配結構" icon={<PieChart className="w-5 h-5" />} className="min-h-[400px]">
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={budgetChartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={150} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#020b1c', borderColor: '#00f0ff', color: '#fff' }}
                        formatter={(value: number) => formatCurrency(value)}
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {budgetChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded">
                  <h4 className="text-destructive font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 核心爭議點：預算透明度
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    預算中包含約1000億元的「未詳細說明項目」，引發在野黨強烈質疑。國防部表示部分為機密預算，但立法院要求更詳細的說明。
                  </p>
                </div>
              </DashboardCard>

              {/* Backlog Analysis */}
              <DashboardCard title="未交付軍購積壓分析 (Top Items)" icon={<Clock className="w-5 h-5" />} variant="warning">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={backlogChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {backlogChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#ff2a2a' : `rgba(0, 240, 255, ${0.8 - index * 0.2})`} stroke="#020b1c" />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ backgroundColor: '#020b1c', borderColor: '#ff2a2a' }} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {backlogData.items.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="bg-background/50 p-3 rounded border border-white/10">
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-primary">{item.name}</h5>
                        <span className="text-xs bg-destructive text-destructive-foreground px-1 rounded">延遲 {item.delayYears} 年</span>
                      </div>
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-muted-foreground">原定: {item.originalDate}</span>
                        <span className="text-destructive">預計: {item.expectedDate}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 border-t border-white/10 pt-2">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </DashboardCard>

              {/* Timeline */}
              <DashboardCard title="關鍵時間軸" icon={<Clock className="w-5 h-5" />}>
                <div className="relative border-l-2 border-primary/30 ml-3 space-y-8 py-4">
                  {timelineEvents.map((event, idx) => (
                    <div key={idx} className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                      <span className="text-xs font-mono text-primary/70 block mb-1">{event.date}</span>
                      <h4 className="text-lg font-bold text-white">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  ))}
                </div>
              </DashboardCard>

            </div>

            {/* Right Column: Lists & News */}
            <div className="space-y-8">
              
              {/* Arms Sales List */}
              <DashboardCard title="2025 美國軍售清單" icon={<Target className="w-5 h-5" />} className="max-h-[600px] overflow-y-auto custom-scrollbar">
                <div className="space-y-4">
                  {armsSales2025.map((item) => (
                    <div key={item.id} className="group relative bg-background/30 p-4 rounded border border-white/5 hover:border-primary/50 transition-colors">
                      <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] px-2 py-1 rounded-bl">
                        {item.status}
                      </div>
                      <h4 className="font-bold text-white group-hover:text-primary transition-colors">{item.name}</h4>
                      <div className="flex justify-between items-end mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">{item.details}</p>
                          <p className="text-xs text-primary/70 mt-1">交付: {item.deliveryDate}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-mono font-bold text-white">{formatCurrency(item.amountTWD)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>

              {/* News Feed */}
              <DashboardCard title="即時戰情快訊" icon={<Globe className="w-5 h-5" />}>
                <div className="space-y-4">
                  {newsFeed.map((news) => (
                    <a key={news.id} href={news.link} className="block group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 min-w-[4px] h-[40px] bg-primary/30 group-hover:bg-primary transition-colors rounded-full" />
                        <div>
                          <h5 className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                            {news.title}
                          </h5>
                          <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground">
                            <span className="bg-white/10 px-1 rounded">{news.source}</span>
                            <span>{news.date}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2 group-hover:text-white/70 transition-colors">
                            {news.summary}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-xs text-center border border-primary/30 text-primary hover:bg-primary/10 transition-colors uppercase tracking-widest">
                  載入更多情報
                </button>
              </DashboardCard>

              {/* Controversy Highlight - Enhanced */}
              <div className="bg-gradient-to-br from-destructive/10 to-background border border-destructive/30 p-6 rounded relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-destructive/10 blur-3xl rounded-full" />
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-destructive/30 pb-4">
                  <AlertTriangle className="text-destructive w-6 h-6" /> 四大核心爭議點
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-destructive/5 border border-destructive/20 p-4 rounded hover:bg-destructive/10 transition-colors">
                    <h4 className="text-destructive font-bold mb-2 flex items-center gap-2">
                      <span className="text-xs border border-destructive px-1 rounded">CRITICAL</span>
                      資訊透明度不足
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      僅用6張A4紙說明1.25兆元預算，缺乏具體採購清單與金額分配細節，引發國會強烈質疑。
                    </p>
                  </div>
                  
                  <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded hover:bg-orange-500/10 transition-colors">
                    <h4 className="text-orange-500 font-bold mb-2 flex items-center gap-2">
                      <span className="text-xs border border-orange-500 px-1 rounded">HIGH</span>
                      國防自主比例過低
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      美方獲76%預算份額，中科院與國內廠商僅占24%，技術轉移與產業效益受限。
                    </p>
                  </div>
                  
                  <div className="bg-destructive/5 border border-destructive/20 p-4 rounded hover:bg-destructive/10 transition-colors">
                    <h4 className="text-destructive font-bold mb-2 flex items-center gap-2">
                      <span className="text-xs border border-destructive px-1 rounded">CRITICAL</span>
                      維持費用黑洞
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      採購費1.25兆，未來全壽期維持費預估達4.5兆元，將對國家財政造成長期沉重負擔。
                    </p>
                  </div>
                  
                  <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded hover:bg-orange-500/10 transition-colors">
                    <h4 className="text-orange-500 font-bold mb-2 flex items-center gap-2">
                      <span className="text-xs border border-orange-500 px-1 rounded">HIGH</span>
                      交付與整合風險
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      美國產能不足導致6,880億元軍購積壓，且IBCS等新系統與現有裝備整合難度極高。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeTab === "budget" && <BudgetView />}
        {activeTab === "sales" && <SalesView />}
        {activeTab === "backlog" && <BacklogView />}

        {/* Comment Section - Always visible at bottom */}
        <section className="mt-16 pt-12 border-t border-primary/20">
          <CommentSection />
        </section>

        {/* Production Team Section */}
        <section className="mt-16 pt-12 border-t border-primary/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wider uppercase">
              製作團隊
            </h2>
            <a 
              href="https://www.youtube.com/@visionoffuture-2028" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center gap-4 p-6 bg-card/50 border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-card/70 transition-all group"
            >
              <img 
                src="/images/visionoffuture-logo.png" 
                alt="直球對決" 
                className="w-24 h-24 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors"
              />
              <div>
                <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors">
                  YouTube直球對決
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  點擊前往頻道
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Copyright Footer */}
        <footer className="mt-12 pt-8 pb-6 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            視角製作 © 2026
          </p>
        </footer>

        {/* Fixed Donate Button */}
        <a 
          href="https://donate.stripe.com/aFacN69CWeQt7nt2Xi4Ja0h" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed left-6 bottom-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center group m-0"
          title="支持我們"
        >
          <Heart className="w-7 h-7 fill-current text-primary-foreground" />
        </a>

        {/* Fixed LINE Official Account Button */}
        <a 
          href="https://lin.ee/bXqTdwr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed right-6 bottom-6 z-50 w-14 h-14 bg-[#06C755] hover:bg-[#05b34c] rounded-full shadow-[0_0_20px_rgba(6,199,85,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(6,199,85,0.6)] transition-all flex items-center justify-center group"
          title="加入LINE官方帳號"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-ping opacity-75"></span>
        </a>

      </main>
    </div>
  );
}
