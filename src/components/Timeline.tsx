import { Fragment, useRef, useEffect, useState } from "react";
import { rulers } from "@/data/rulers";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { CircleDot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  }, []);

  return (
    <ScrollArea className="h-[calc(94.6vh-4rem)]">
      <div className="flex flex-row relative z-10 pl-0 pr-4 pt-4 pb-4 max-w-full w-full">
        <div className="relative w-10 flex flex-col items-center justify-between">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border z-0" />
          {rulers.map((ruler) => (
            <div
              key={ruler.id}
              className="z-10 flex justify-center items-center h-24"
            >
              <CircleDot className="h-5 w-5 text-primary bg-background" />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-8">
          {rulers.map((ruler) => (
            <Link key={ruler.id} to={`/ruler/${ruler.id}`} className="flex-1">
              <Card className="p-4 transition-all hover:shadow-md hover:bg-accent dark:hover:bg-accent/80">
                <div className="space-y-1">
                  <h3 className="font-bold font-display text-base">
                    {ruler.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{ruler.title}</p>
                  <p className="text-sm">
                    {ruler.startYear} — {ruler.endYear}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
