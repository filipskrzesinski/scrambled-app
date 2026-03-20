"use client";

import { useState, useEffect } from "react";

export function CurrentDateTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!now) return null;

  const dateStr = now.toLocaleDateString("en-US");
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="flex items-center gap-2">
      <span className="text-data-body font-data-body text-white">
        {dateStr}
      </span>
      <span className="text-data-h5 font-data-h5 text-white">&bull;</span>
      <span className="text-data-body font-data-body text-white">
        {timeStr}
      </span>
    </div>
  );
}
