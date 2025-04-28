
import { Header } from "@/components/Header";
import { Timeline } from "@/components/Timeline";
import { RulerCard } from "@/components/RulerCard";
import { rulers } from "@/data/rulers";

const TimelinePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-6">
        <h1 className="text-3xl font-bold font-display mb-6">История правителей России</h1>
        
        <div className="mb-10">
          <Timeline />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rulers.map(ruler => (
            <RulerCard key={ruler.id} ruler={ruler} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TimelinePage;
