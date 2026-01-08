import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonProps {
  title: string;
  text: string;
  url?: string;
}

export function ShareButton({ title, text, url }: ShareButtonProps) {
  const shareUrl = url || window.location.href;

  const handleShare = async () => {
    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
        toast.success("分享成功");
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Share error:", error);
        }
      }
      return;
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(`${title}\n${text}\n${shareUrl}`);
      toast.success("連結已複製到剪貼簿");
    } catch (error) {
      console.error("Copy error:", error);
      toast.error("分享失敗");
    }
  };

  const shareToFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(fbUrl, "_blank", "width=600,height=400");
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleShare}
        variant="outline"
        size="sm"
        className="bg-background/50 border-primary/30 hover:bg-primary/10 hover:border-primary text-primary"
      >
        <Share2 className="w-4 h-4 mr-2" />
        分享
      </Button>
      
      <Button
        onClick={shareToFacebook}
        variant="outline"
        size="sm"
        className="bg-background/50 border-primary/30 hover:bg-primary/10 hover:border-primary text-primary"
        title="分享到 Facebook"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </Button>

      <Button
        onClick={shareToTwitter}
        variant="outline"
        size="sm"
        className="bg-background/50 border-primary/30 hover:bg-primary/10 hover:border-primary text-primary"
        title="分享到 Twitter"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </Button>
    </div>
  );
}
