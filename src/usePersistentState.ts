"use client";

import { useEffect, useState } from "react";

export function usePersistentState<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(key);
      if (stored != null) {
        setValue(JSON.parse(stored));
      }
    } catch (err) {
      console.warn(`Failed to read localStorage key "${key}"`, err);
    }
  }, [key]);

  // Save to localStorage when value changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`Failed to write localStorage key "${key}"`, err);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
