"use client";
import {
  useEffect,
  useState,
  useContext,
  createContext,
  ReactNode,
} from "react";
import Lenis from "lenis";
import { JSX } from "react";

type SmoothScrollContextType = Lenis | null;

// Create a context for the Lenis instance
const SmoothScrollContext = createContext<SmoothScrollContextType>(null);

// Hook to use the Lenis instance
export function useScroll(): SmoothScrollContextType {
  return useContext(SmoothScrollContext);
}

// Props type for the ScrollContext component
interface ScrollContextProps {
  children: ReactNode;
}

// ScrollContext component
export default function ScrollContext({
  children,
}: ScrollContextProps): JSX.Element {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);
    setLenisInstance(lenis);

    return () => {
      // Cleanup: destroy Lenis instance to avoid memory leaks
      lenis.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisInstance}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
