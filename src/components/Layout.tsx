import { Link, Outlet, useLocation } from "react-router-dom";
import { Wrench, ArrowLeft } from "lucide-react";
import { EnvBadge } from "./EnvBadge";

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg hidden sm:inline-block">DevOps Utility</span>
            </Link>
            
            {!isHomePage && (
              <div className="hidden md:flex items-center gap-1">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:bg-accent/10 hover:text-accent"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <EnvBadge />
          </div>
        </div>
      </nav>
      
      {/* Mobile nav */}
      {!isHomePage && (
        <div className="md:hidden border-b border-border/40 bg-background/95 p-2 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max px-2">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors text-muted-foreground hover:bg-accent/10 hover:text-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </Link>
          </div>
        </div>
      )}

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-10">
        <Outlet />
      </main>

      <footer className="py-6 border-t border-border/40 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-muted-foreground/60">
          Built for engineers · client-side only · no data leaves your browser
        </div>
      </footer>
    </div>
  );
};
