
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { rulers } from "@/data/rulers";
import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RulerDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ruler = rulers.find(r => r.id === id);
  
  useEffect(() => {
    if (!ruler) {
      navigate("/timeline");
    }
  }, [ruler, navigate]);
  
  if (!ruler) return null;
  
  // Find events during this ruler's reign
  const rulerEvents = events.filter(
    event => event.year >= ruler.startYear && event.year <= ruler.endYear
  );
  
  const initials = ruler.name
    .split(' ')
    .map(part => part.charAt(0))
    .slice(0, 2)
    .join('');
  
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
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Avatar className="h-24 w-24 border border-primary/20">
                <AvatarImage src={ruler.image} alt={ruler.name} />
                <AvatarFallback className="text-xl">{initials}</AvatarFallback>
              </Avatar>
              
              <div>
                <h1 className="text-3xl font-bold font-display">{ruler.name}</h1>
                <p className="text-lg text-muted-foreground">{ruler.title}</p>
                <p className="mt-2">
                  Период правления: <strong>{ruler.startYear} — {ruler.endYear}</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-display">
            События в период правления
          </h2>
          
          {rulerEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rulerEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              События в этот период не найдены.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default RulerDetailPage;
