import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './translations';

const STORAGE_KEY = 'portfolio:lang';

function resolvePath(source, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), source);
}

function detectInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGES.includes(stored)) return stored;

  const browserLang = window.navigator.language?.slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.title = resolvePath(translations[lang], 'meta.title') ?? document.title;
  }, [lang]);

  const setLang = (next) => {
    if (SUPPORTED_LANGUAGES.includes(next)) setLangState(next);
  };

  // t() aceita chaves com "." (ex.: "hero.ctaPrimary"). Se a chave não existir
  // no idioma atual — conteúdo ainda não traduzido — cai para o idioma
  // default em vez de quebrar a UI mostrando a chave crua.
  const t = useMemo(() => {
    return (path) => {
      const value = resolvePath(translations[lang], path);
      if (value === undefined) {
        return resolvePath(translations[DEFAULT_LANGUAGE], path) ?? path;
      }
      return value;
    };
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t, supportedLanguages: SUPPORTED_LANGUAGES }),
    [lang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
