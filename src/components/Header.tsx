
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            to="/"
            className={cn(
              "text-xl font-bold font-display",
              "bg-gradient-to-r from-russia-blue to-russia-red bg-clip-text text-transparent"
            )}
          >
            История России
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Карта
          </Link>
          <Link to="/timeline" className="text-sm font-medium transition-colors hover:text-primary">
            Правители
          </Link>
          <Link to="/events" className="text-sm font-medium transition-colors hover:text-primary">
            События
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
