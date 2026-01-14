import { DashboardCard } from "@/components/DashboardCard";
import { WeaponDetailModal } from "@/components/WeaponDetailModal";
import { armsSales2025 } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { CheckCircle2, Clock, ExternalLink, Shield, Target } from "lucide-react";
import { useState } from "react";

export function SalesView() {
  const totalAmount = armsSales2025.reduce((acc, item) => acc + item.amountTWD, 0);
  const [selectedWeapon, setSelectedWeapon] = useState<typeof armsSales2025[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (weapon: typeof armsSales2025[0]) => {
    setSelectedWeapon(weapon);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedWeapon(null), 300);
  };
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="text-primary" /> 2025 年度軍售總覽
              </h2>
              <p className="text-muted-foreground mt-1">
                包含HIMARS、M109A7自走砲等8項關鍵不對稱戰力裝備，創下單年度軍售金額歷史新高。
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">總金額</div>
              <div className="text-4xl font-mono font-bold text-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                {formatCurrency(totalAmount)}
              </div>
            </div>
          </div>
        </div>

        {armsSales2025.map((item) => (
          <DashboardCard 
            key={item.id} 
            title={item.name} 
            icon={<Shield className="w-4 h-4" />}
            className="group hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {item.status}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 交付: {item.deliveryDate}
                </span>
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  {item.details}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs border-b border-white/5 pb-1">
                    <span className="text-muted-foreground">美金金額</span>
                    <span className="font-mono text-white/50">USD {(item.amountUSD / 100000000).toFixed(2)} 億</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">新台幣金額</span>
                    <span className="font-mono font-bold text-primary">{formatCurrency(item.amountTWD)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/5">
                <button 
                  onClick={() => handleViewDetails(item)}
                  className="w-full py-2 text-xs text-center border border-white/10 hover:bg-white/5 hover:border-primary/30 hover:text-primary transition-all rounded flex items-center justify-center gap-2"
                >
                  查看詳細規格 <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </DashboardCard>
        ))}
      </div>

      <WeaponDetailModal 
        weapon={selectedWeapon}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
