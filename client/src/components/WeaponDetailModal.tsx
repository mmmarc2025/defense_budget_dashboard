import { X, Shield, Target, Zap } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface WeaponSpec {
  label: string;
  value: string;
}

interface WeaponDetail {
  id: number;
  name: string;
  image?: string;
  amountUSD: number;
  amountTWD: number;
  details: string;
  status: string;
  deliveryDate: string;
  fullDescription: string;
  specifications: WeaponSpec[];
  tacticalValue: string;
}

interface WeaponDetailModalProps {
  weapon: WeaponDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WeaponDetailModal({ weapon, isOpen, onClose }: WeaponDetailModalProps) {
  if (!isOpen || !weapon) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-primary/20 rounded-lg shadow-2xl shadow-primary/10 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-primary/20 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-white">{weapon.name}</h2>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 font-bold border border-green-500/20">
                  {weapon.status}
                </span>
                <span className="text-muted-foreground">
                  預計交付：{weapon.deliveryDate}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Weapon Image */}
          {weapon.image && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-primary/20">
              <img 
                src={weapon.image} 
                alt={weapon.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Amount Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">美金金額</div>
              <div className="text-2xl font-mono font-bold text-white">
                USD {(weapon.amountUSD / 100000000).toFixed(2)} 億
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">新台幣金額</div>
              <div className="text-2xl font-mono font-bold text-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                {formatCurrency(weapon.amountTWD)}
              </div>
            </div>
          </div>

          {/* Basic Details */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-2">採購內容</h3>
            <p className="text-white/90">{weapon.details}</p>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              系統介紹
            </h3>
            <p className="text-white/80 leading-relaxed">{weapon.fullDescription}</p>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              技術規格
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {weapon.specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-primary/30 transition-colors"
                >
                  <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                  <div className="text-sm font-mono text-white">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tactical Value */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              戰術價值
            </h3>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-white/90 leading-relaxed">{weapon.tacticalValue}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-primary/20 p-4">
          <button
            onClick={onClose}
            className="w-full py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary text-primary font-bold rounded-lg transition-all"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
}
