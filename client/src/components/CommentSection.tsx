import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { zhTW } from "date-fns/locale";

export function CommentSection() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Hidden field for bot detection

  const { data: comments, isLoading, refetch } = trpc.comments.list.useQuery();
  const createComment = trpc.comments.create.useMutation({
    onSuccess: () => {
      toast.success("留言已發布");
      setName("");
      setContent("");
      setHoneypot("");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || "留言失敗，請稍後再試");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error("請輸入留言內容");
      return;
    }

    createComment.mutate({
      name: name.trim() || undefined,
      content: content.trim(),
      honeypot,
    });
  };

  return (
    <div className="relative">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-primary/20">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">
          網友留言 <span className="text-primary">COMMENTS</span>
        </h2>
        <span className="ml-auto text-sm text-muted-foreground">
          {comments?.length || 0} 則留言
        </span>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-background/30 border border-primary/20 rounded-lg backdrop-blur-sm">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
              暱稱 (選填)
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="匿名網友"
              maxLength={100}
              className="bg-background/50 border-primary/30 focus:border-primary text-white"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
              留言內容 *
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="分享您對國防預算的看法..."
              maxLength={1000}
              rows={4}
              className="bg-background/50 border-primary/30 focus:border-primary text-white resize-none"
              required
            />
            <div className="text-xs text-muted-foreground mt-1 text-right">
              {content.length} / 1000
            </div>
          </div>

          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <Button
            type="submit"
            disabled={createComment.isPending}
            className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            {createComment.isPending ? (
              "發布中..."
            ) : (
              <>
                <Send className="w-4 h-4" /> 發布留言
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-8 text-muted-foreground">
            載入留言中...
          </div>
        ) : comments && comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="group p-4 bg-background/20 border border-white/5 hover:border-primary/30 rounded-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-bold text-white group-hover:text-primary transition-colors">
                      {comment.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {comment.createdAt
                        ? formatDistanceToNow(new Date(comment.createdAt), {
                            addSuffix: true,
                            locale: zhTW,
                          })
                        : "剛剛"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap break-words">
                    {comment.content}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground border border-dashed border-primary/20 rounded-lg">
            <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>尚無留言，成為第一個發表意見的人！</p>
          </div>
        )}
      </div>
    </div>
  );
}
