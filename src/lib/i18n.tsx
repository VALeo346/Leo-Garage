"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Lang } from "@/data/content";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggleLang: () => {},
});

const STORAGE_KEY = "leo-garage-lang";

let listeners: Array<() => void> = [];

function subscribe(listener: () => void): () => void {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot(): Lang {
  return window.localStorage.getItem(STORAGE_KEY) === "pt" ? "pt" : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggleLang = useCallback(() => {
    const next: Lang = getSnapshot() === "en" ? "pt" : "en";
    window.localStorage.setItem(STORAGE_KEY, next);
    for (const listener of listeners) listener();
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}
