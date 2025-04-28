import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { events } from "@/data/events";
import { HistoricalEvent } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CommentList } from "@/components/CommentList";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

declare global {
  interface Window {
    ymaps: any;
  }
}

export function YandexMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(
    null
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (!document.getElementById("yandex-maps")) {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=499b20b5-e13c-43ae-b359-44680ddaed75&lang=ru_RU";
      script.id = "yandex-maps";
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }

    return () => {
      if (mapInstance) {
        mapInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(mapRef.current, {
        center: [55.76, 37.64],
        zoom: 5,
        controls: ["zoomControl", "fullscreenControl"],
      });

      setMapInstance(map);

      const isDarkTheme = document.documentElement.classList.contains("dark");

      if (isDarkTheme) {
        map.panes.get("ground").getElement().style.filter =
          "invert(100%) hue-rotate(180deg) brightness(0.8)";
      }

      const clusterer = new window.ymaps.Clusterer({
        preset: "islands#darkBlueClusterIcons",
        groupByCoordinates: false,
        clusterDisableClickZoom: false,
      });

      const placemarks = events.map((event: HistoricalEvent) => {
        const placemark = new window.ymaps.Placemark(
          [event.location.lat, event.location.lon],
          {
            hintContent: event.title,
          },
          {
            preset:
              event.category === "battle"
                ? "islands#redDotIcon"
                : event.category === "political"
                ? "islands#darkBlueDotIcon"
                : "islands#yellowDotIcon",
          }
        );

        placemark.events.add("click", () => {
          setSelectedEvent(event);
          setIsSheetOpen(true);
        });

        return placemark;
      });

      clusterer.add(placemarks);
      map.geoObjects.add(clusterer);
    });
  }, [isLoaded]);

  useEffect(() => {
    if (!mapInstance) return;

    const observer = new MutationObserver(() => {
      const isDarkTheme = document.documentElement.classList.contains("dark");
      const groundPane = mapInstance.panes.get("ground").getElement();

      if (isDarkTheme) {
        groundPane.style.filter =
          "invert(100%) hue-rotate(180deg) brightness(0.8)";
      } else {
        groundPane.style.filter = "";
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [mapInstance]);

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

                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white dark:bg-[#0077FF] dark:hover:bg-[#0077FF]/90 dark:text-white"
                    onClick={() => {
                      const url = `https://vk.com/share.php?url=${encodeURIComponent(
                        window.location.href
                      )}&title=${encodeURIComponent(
                        selectedEvent.title
                      )}&description=${encodeURIComponent(
                        selectedEvent.description
                      )}`;
                      window.open(url, "_blank");
                    }}
                  >
                    <img
                      src="/vk.svg"
                      alt="VK"
                      className="w-4 h-4 mr-2 brightness-0 invert"
                    />
                    ВКонтакте
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-[#26A5E4] hover:bg-[#26A5E4]/90 text-white dark:bg-[#26A5E4] dark:hover:bg-[#26A5E4]/90 dark:text-white"
                    onClick={() => {
                      const url = `https://t.me/share/url?url=${encodeURIComponent(
                        window.location.href
                      )}&text=${encodeURIComponent(
                        `${selectedEvent.title}\n${selectedEvent.description}`
                      )}`;
                      window.open(url, "_blank");
                    }}
                  >
                    <img
                      src="/telegram.svg"
                      alt="Telegram"
                      className="w-4 h-4 mr-2 brightness-0 invert"
                    />
                    Telegram
                  </Button>
                </div>

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
