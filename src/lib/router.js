import { useState, useEffect } from "react";

/** Get the current path from the URL hash, e.g., "#/chat" -> "/chat" */
function getHashPath() {
  return window.location.hash.slice(1) || "/";
}

/** 
 * Programmatically navigate to a path.
 * Usage: navigate("/chat")
 */
export function navigate(path) {
  window.location.hash = path;
}

/**
 * React hook that returns the current route and automatically updates 
 * the component when the route changes.
 */
export function useRoute() {
  const [route, setRoute] = useState(getHashPath());

  useEffect(() => {
    const onHashChange = () => setRoute(getHashPath());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}
