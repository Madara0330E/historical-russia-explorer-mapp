
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { CommentList } from "@/components/CommentList";
import { events } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);
  
  useEffect(() => {
    if (!event) {
      navigate("/events");
    }
  }, [event, navigate]);
  
  if (!event) return null;
  
  const categoryLabel = {
    'battle': 'Сражение',
    'political': 'Политика',
    'cultural': 'Культура'
  };
  
  const categoryColorMap = {
    'battle': 'bg-russia-red text-white',
    'political': 'bg-russia-blue text-white',
    'cultural': 'bg-russia-gold text-black'
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-6">
        <Button 
          onClick={() => navigate(-1)} 
          variant="ghost" 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Назад
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold font-display">{event.title}</h1>
              <Badge className={categoryColorMap[event.category]}>
                {categoryLabel[event.category]}
              </Badge>
            </div>
            
            <p className="text-lg text-muted-foreground">{event.date}</p>
            
            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="media">Медиа</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <Card className="p-6">
                  <p className="whitespace-pre-line text-lg">{event.description}</p>
                </Card>
              </TabsContent>
              <TabsContent value="media" className="mt-4 space-y-6">
                {event.images && event.images.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-3">Фотографии</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {event.images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-md border">
                          <img 
                            src={image} 
                            alt={`${event.title} - изображение ${index + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {event.videos && event.videos.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-3">Видео</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {event.videos.map((video, index) => (
                        <div key={index} className="aspect-video overflow-hidden rounded-md border">
                          <iframe
                            src={video}
                            title={`${event.title} - видео ${index + 1}`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <CommentList eventId={event.id} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetailPage;
