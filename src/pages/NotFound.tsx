import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: gebruiker probeerde een niet-bestaande route te bereiken:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white/50 backdrop-blur-sm px-4">
      <div className="text-center">
        <h1 className="text-5xl font-luxury font-bold text-black mb-4">404</h1>
        <p className="text-xl text-black font-elegant mb-6">
          Oeps! Deze pagina bestaat niet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-elegant"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
