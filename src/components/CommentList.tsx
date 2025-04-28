
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Comment as CommentType } from "@/types";
import { comments as initialComments } from "@/data/comments";
import { useToast } from "@/hooks/use-toast";

interface CommentListProps {
  eventId: string;
}

export function CommentList({ eventId }: CommentListProps) {
  const [comments, setComments] = useState<CommentType[]>(
    initialComments.filter(comment => comment.eventId === eventId)
  );
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!author.trim() || !text.trim()) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Заполните все поля!"
      });
      return;
    }
    
    const newComment: CommentType = {
      id: `local-${Date.now()}`,
      eventId,
      author,
      text,
      date: new Date().toISOString().split('T')[0]
    };
    
    setComments([...comments, newComment]);
    setAuthor("");
    setText("");
    
    toast({
      title: "Комментарий добавлен",
      description: "Ваш комментарий успешно опубликован"
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold font-display">Комментарии ({comments.length})</h3>
      
      {comments.map((comment) => (
        <Card key={comment.id} className="bg-muted/30">
          <CardHeader className="py-3 px-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base">{comment.author}</CardTitle>
              <span className="text-xs text-muted-foreground">{comment.date}</span>
            </div>
          </CardHeader>
          <CardContent className="py-2 px-4">
            <p className="text-sm">{comment.text}</p>
          </CardContent>
        </Card>
      ))}
      
      <Card>
        <CardHeader>
          <CardTitle>Добавить комментарий</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div>
              <Input
                placeholder="Ваше имя"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="max-w-md"
              />
            </div>
            <div>
              <Textarea
                placeholder="Ваш комментарий..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit">Отправить</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
