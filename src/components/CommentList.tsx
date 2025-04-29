import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Comment as CommentType } from "@/types";
import { useToast } from "@/hooks/use-toast";

interface CommentListProps {
  eventId: string;
}

export function CommentList({ eventId }: CommentListProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(!!Cookies.get("authToken"));
  const { toast } = useToast();
  const commentsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchComments();
  }, [eventId]);

  const fetchComments = async () => {
    try {
      const token = Cookies.get("authToken");
      const response = await axios.get(
        `http://localhost:5000/api/comments/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setComments(response.data.comments);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось загрузить комментарии.",
      });
    }
  };

  const handleSendCode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/send-code",
        email,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        toast({
          title: "Код отправлен",
          description: "Проверьте вашу почту для получения кода.",
        });
        setIsCodeSent(true);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось отправить код. Попробуйте снова.",
      });
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-code",
        { email, code },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        Cookies.set("authToken", response.data.token, { expires: 7 });
        setIsAuthorized(true);
        toast({
          title: "Успех",
          description: "Вы успешно авторизовались.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Неверный код. Попробуйте снова.",
      });
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthorized) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Вы должны авторизоваться, чтобы оставить комментарий.",
      });
      return;
    }

    if (!author.trim() || !text.trim()) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Заполните все поля!",
      });
      return;
    }

    try {
      const token = Cookies.get("authToken");
      const response = await axios.post(
        "http://localhost:5000/api/comments",
        { postId: eventId, body: text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setComments([...comments, response.data.comment]);
        setText("");
        toast({
          title: "Комментарий добавлен",
          description: "Ваш комментарий успешно опубликован",
        });

        // Прокрутка к новому комментарию
        setTimeout(() => {
          if (commentsContainerRef.current) {
            commentsContainerRef.current.scrollTop =
              commentsContainerRef.current.scrollHeight;
          }
        }, 100);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось отправить комментарий.",
      });
    }
  };

  return (
    <div className="space-y-6">
      {!isAuthorized ? (
        <Card>
          <CardHeader>
            <CardTitle>Авторизация</CardTitle>
          </CardHeader>
          <CardContent>
            {!isCodeSent ? (
              <div className="space-y-4">
                <Input
                  placeholder="Введите ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-md"
                />
                <Button onClick={handleSendCode}>Отправить код</Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Input
                  placeholder="Введите код из почты"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="max-w-md"
                />
                <Button onClick={handleVerifyCode}>Подтвердить</Button>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <>
          <h3 className="text-xl font-bold font-display">
            Комментарии ({comments.length})
          </h3>

          <div
            ref={commentsContainerRef}
            className="space-y-4 mb-6"
            style={{
              maxHeight: "350px",
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#888 #f1f1f1",
            }}
          >
            {comments.map((comment) => (
              <Card key={comment.id} className="bg-muted/30">
                <CardHeader className="py-3 px-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base">
                      {comment.author}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground">
                      {new Date(comment.createdAtUtc).toLocaleDateString()}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="py-2 px-4">
                  <p
                    className="text-sm break-words whitespace-pre-wrap"
                    style={{ wordBreak: "break-word" }}
                  >
                    {comment.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Добавить комментарий</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitComment} className="space-y-4">
                {!author && ( 
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      onBlur={(e) => {
                        if (e.target.value.trim()) {
                          setAuthor(e.target.value.trim());
                        }
                      }}
                      className="max-w-md"
                    />
                  </div>
                )}
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
        </>
      )}
    </div>
  );
}
