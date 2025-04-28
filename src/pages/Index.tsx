import { Header } from "@/components/Header";
import { YandexMap } from "@/components/YandexMap";
import { Timeline } from "@/components/Timeline";
import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-[1fr_400px] h-[calc(100vh-4rem)]">
        <YandexMap />
        <div className="">
          <Tabs defaultValue="timeline" className="h-full">
            <TabsList className="w-full justify-evenly rounded-none border-b p-0 h-12">
              <TabsTrigger
                value="timeline"
                className="flex h-[34px] px-3 py-[7px] justify-center items-center gap-[10px] rounded-[8px] border-b-2 border-[#E2E8F0] bg-background shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-foreground text-center font-inter text-[14px] font-medium leading-[20px] dark:border-border dark:bg-background dark:text-foreground"
              >
                Правители
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="flex h-[34px] px-3 py-[7px] justify-center items-center gap-[10px] rounded-[8px] border-b-2 border-[#E2E8F0] bg-background shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-foreground text-center font-inter text-[14px] font-medium leading-[20px] dark:border-border dark:bg-background dark:text-foreground"
              >
                События
              </TabsTrigger>
            </TabsList>

            <TabsContent value="timeline" className="h-[calc(100%-3rem)] m-0">
              <ScrollArea className="h-full">
                <div className="">
                  <Timeline />
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="events" className="h-[calc(100%-3rem)] m-0">
              <ScrollArea className="h-[calc(94.6vh-4rem)]">
                <div className="p-4 grid gap-4">
                  {events.map((event) => (
                    <EventCard key={event.id} event={event} compact />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
