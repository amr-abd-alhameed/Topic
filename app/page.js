"use client";
import Discover from "@/components/Discover";
import Fqs from "@/components/Fqs";
import Touch from "@/components/Touch";
import Work from "@/components/Work";

export default function Home({ children }) {
  return (
    <main>
      <Discover />

      <Work />
      <Fqs />
      <Touch />
    </main>
  );
}
