"use client";
import { StatusCard } from "./components/status-card/status-card";
import { API_NAMES } from "./components/status-card/hooks/constants/api-names.const";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {API_NAMES.map((name) => (
        <StatusCard key={name} name={name} />
      ))}
    </div>
  );
}
