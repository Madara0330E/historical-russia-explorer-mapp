
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ruler } from "@/types";

interface RulerCardProps {
  ruler: Ruler;
}

export function RulerCard({ ruler }: RulerCardProps) {
  const initials = ruler.name
    .split(' ')
    .map(part => part.charAt(0))
    .slice(0, 2)
    .join('');

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="flex flex-row gap-4 items-center">
        <Avatar className="h-14 w-14 border border-primary/20">
          <AvatarImage src={ruler.image} alt={ruler.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-bold font-display text-lg">{ruler.name}</h3>
          <p className="text-sm text-muted-foreground">{ruler.title}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Период правления: {ruler.startYear} — {ruler.endYear}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <Link to={`/ruler/${ruler.id}`}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
