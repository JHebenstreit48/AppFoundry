import { useLocation } from "react-router-dom";
import { useVisitTracker } from "@/hooks/storage/useVisitTracker";

export default function RouteTracker() {
  const { pathname } = useLocation();
  useVisitTracker(pathname); // tracks EVERY page, not just Home
  return null;
}