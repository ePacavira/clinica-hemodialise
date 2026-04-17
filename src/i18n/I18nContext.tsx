import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Language = 'pt' | 'en'

type I18nContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
}

const STORAGE_KEY = 'chpa_language'

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  const browser = window.navigator.language.toLowerCase()
  return browser.startsWith('en') ? 'en' : 'pt'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage: (lang: Language) => setLanguageState(lang),
    }),
    [language],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used inside I18nProvider')
  }
  return ctx
}

