import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4 mt-4">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Карта
          </Link>
          <Link
            to="/timeline"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Правители
          </Link>
          <Link
            to="/events"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            События
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
