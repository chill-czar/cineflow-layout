import { NavLink } from "react-router-dom";
import { Search, Bell, UserRound } from "lucide-react";

const Header = () => {
  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground";

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/40">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="/"
            aria-label="StreamBox home"
            className="flex items-center gap-2"
          >
            <div className="h-6 w-6 rounded-sm bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.6)]" />
            <span className="font-bold">StreamBox</span>
          </a>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <NavLink to="/" end className={navCls}>
              Home
            </NavLink>
            <p className="text-foreground/80 hover:text-foreground">Series</p>
            <p className="text-foreground/80 hover:text-foreground">Movies</p>
            <p className="text-foreground/80 hover:text-foreground">
              New & Popular
            </p>
            <p className="text-foreground/80 hover:text-foreground">My List</p>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="p-2 rounded-md hover:bg-muted/40"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Notifications"
            className="p-2 rounded-md hover:bg-muted/40"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="p-2 rounded-full bg-muted/40">
            <UserRound className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
  