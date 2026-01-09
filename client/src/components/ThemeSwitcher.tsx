import { Palette } from "lucide-react";
import { useState } from "react";
import { applyTheme, getStoredTheme, themes, type ThemeId } from "@/lib/themes";

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(getStoredTheme());
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (themeId: ThemeId) => {
    applyTheme(themeId);
    setCurrentTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-bold uppercase tracking-wider transition-all border border-primary/30 text-primary hover:bg-primary/10 rounded"
        aria-label="切換配色"
      >
        <Palette className="w-4 h-4" />
        <span className="hidden md:inline">{themes[currentTheme].name}</span>
      </button>

      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* 下拉選單 */}
          <div className="absolute right-0 top-full mt-2 z-50 min-w-[200px] bg-card border border-primary/30 rounded shadow-[0_0_20px_rgba(0,240,255,0.2)] overflow-hidden">
            {Object.values(themes).map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`w-full px-4 py-3 text-left text-sm font-bold uppercase tracking-wider transition-all hover:bg-primary/10 ${
                  currentTheme === theme.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full border-2"
                    style={{
                      backgroundColor: theme.colors.primary,
                      borderColor: theme.colors.border,
                    }}
                  />
                  {theme.name}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
