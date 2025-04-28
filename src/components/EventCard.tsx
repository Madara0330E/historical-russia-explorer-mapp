
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HistoricalEvent } from "@/types";

interface EventCardProps {
  event: HistoricalEvent;
  compact?: boolean;
}

export function EventCard({ event, compact = false }: EventCardProps) {
  const categoryColorMap = {
    'battle': 'bg-russia-red text-white',
    'political': 'bg-russia-blue text-white',
    'cultural': 'bg-russia-gold text-black'
  };
  
  const categoryColor = categoryColorMap[event.category];
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      {!compact && event.images && event.images.length > 0 && (
        <div className="relative h-40 overflow-hidden">
          <img 
            src={event.images[0]}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <Badge className={`absolute top-2 right-2 ${categoryColor}`}>
            {event.category === 'battle' ? 'Сражение' : 
             event.category === 'political' ? 'Политика' : 'Культура'}
          </Badge>
        </div>
      )}
      <CardHeader className={compact ? "p-3" : ""}>
        <CardTitle className="line-clamp-2 font-display">{event.title}</CardTitle>
        <CardDescription>{event.date}</CardDescription>
      </CardHeader>
      {!compact && (
        <CardContent>
          <p className="line-clamp-3">{event.description}</p>
        </CardContent>
      )}
      <CardFooter className={compact ? "p-4 pt-0" : ""}>
        <Button asChild variant="outline" size={compact ? "sm" : "default"}>
          <Link to={`/event/${event.id}`}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
