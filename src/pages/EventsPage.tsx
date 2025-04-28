import { useState } from "react";
import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";
import { events } from "@/data/events";
import { Input } from "@/components/ui/input";
import { EventCategory } from "@/types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const EventsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<EventCategory[]>(
    []
  );
  const [startYear, setStartYear] = useState<string>("");
  const [endYear, setEndYear] = useState<string>("");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      search === "" ||
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(event.category);

    const matchesYearRange =
      (startYear === "" || event.year >= parseInt(startYear)) &&
      (endYear === "" || event.year <= parseInt(endYear));

    return matchesSearch && matchesCategory && matchesYearRange;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-6">
        <h1 className="text-3xl font-bold font-display mb-6">
          Исторические события
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Поиск по событиям..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />

          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Год от..."
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              className="w-28"
            />
            <Input
              type="number"
              placeholder="Год до..."
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              className="w-28"
            />
          </div>

          <ToggleGroup
            type="multiple"
            value={selectedCategories}
            onValueChange={(value) =>
              setSelectedCategories(value as EventCategory[])
            }
          >
            <ToggleGroupItem
              value="battle"
              className="data-[state=on]:bg-russia-red data-[state=on]:text-white"
            >
              Сражения
            </ToggleGroupItem>
            <ToggleGroupItem
              value="political"
              className="data-[state=on]:bg-russia-blue data-[state=on]:text-white"
            >
              Политика
            </ToggleGroupItem>
            <ToggleGroupItem
              value="cultural"
              className="data-[state=on]:bg-russia-gold data-[state=on]:text-black"
            >
              Культура
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Событий не найдено</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default EventsPage;
