import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { events } from "@/data/events";
import { HistoricalEvent } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CommentList } from "@/components/CommentList";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

declare global {
  interface Window {
    google: {
      maps: typeof google.maps;
    };
  }
}

export function GoogleEarthMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(
    null
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (!document.getElementById("google-earth")) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=473264783548327458453889634783643278642&libraries=places`;
      script.id = "google-earth";
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 55.76, lng: 37.64 },
      zoom: 5,
      mapTypeId: "terrain",
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      ],
    });

    setMapInstance(map);

    const markers = events.map((event: HistoricalEvent) => {
      const marker = new window.google.maps.Marker({
        position: { lat: event.location.lat, lng: event.location.lon },
        map,
        title: event.title,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor:
            event.category === "battle"
              ? "#FF0000"
              : event.category === "political"
              ? "#0000FF"
              : "#FFFF00",
          fillOpacity: 1,
          strokeWeight: 1,
          scale: 8,
        },
      });

      marker.addListener("click", () => {
        setSelectedEvent(event);
        setIsSheetOpen(true);
      });

      return marker;
    });

    new MarkerClusterer({
      map,
      markers,
    });
  }, [isLoaded]);

  return (
    <>
      <div
        ref={mapRef}
        className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] h-[calc(70vh-4rem)]"
      />
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-xl">
          {selectedEvent && (
            <ScrollArea className="h-[calc(100vh-2rem)] pr-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-display mb-2">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-muted-foreground">{selectedEvent.date}</p>
                </div>

                <p className="text-base/relaxed">{selectedEvent.description}</p>

                {selectedEvent.images && selectedEvent.images.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-display">
                      Фотографии
                    </h3>
                    <div className="grid gap-4">
                      {selectedEvent.images.map((image, index) => (
                        <AspectRatio key={index} ratio={16 / 9}>
                          <img
                            src={image}
                            alt={`${selectedEvent.title} - изображение ${
                              index + 1
                            }`}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </AspectRatio>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEvent.videos && selectedEvent.videos.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-display">Видео</h3>
                    <div className="grid gap-4">
                      {selectedEvent.videos.map((video, index) => (
                        <AspectRatio key={index} ratio={16 / 9}>
                          <iframe
                            src={video}
                            title={`${selectedEvent.title} - видео ${
                              index + 1
                            }`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg w-full h-full"
                          />
                        </AspectRatio>
                      ))}
                    </div>
                  </div>
                )}

                <CommentList eventId={selectedEvent.id} />
              </div>
            </ScrollArea>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
