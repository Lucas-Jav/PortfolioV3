import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language, Translation } from "./translations";
import { MenuItem, Select } from "@mui/material";

interface LanguageContextData {
    language: Language;
    t: Translation;
    toggleLanguage: (lang: Language) => void;
}

const LANGUAGE_STORAGE_KEY = "preferred-language";

function getInitialLanguage(): Language {
    if (typeof window === "undefined") return "pt";

    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;

    if (stored === "pt" || stored === "en") {
        return stored;
    }

    const browserLanguage = navigator.language.toLowerCase();

    if (browserLanguage.startsWith("pt")) return "pt";
    if (browserLanguage.startsWith("en")) return "en";

    return "pt";
}

const LanguageContext = createContext<LanguageContextData | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => getInitialLanguage());

    function toggleLanguage(lang: Language) {
        setLanguage(lang);
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                t: translations[language],
                toggleLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}

export function LanguageSwitch({
    language,
    toggleLanguage,
}: {
    language: Language;
    toggleLanguage: (lang: Language) => void;
}) {
    return (
        <Select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value as Language)}
            variant="standard"
            disableUnderline
            sx={{
                color: "#fff",
                marginLeft: 2,
                fontSize: 14,
                minWidth: 70,
                "& .MuiSelect-icon": {
                    color: "#fff",
                },
            }}
        >
            <MenuItem value="pt">
                <img
                    loading="lazy"
                    src="/images/i18n/brazil-flag.png"
                    alt="Brazil flag"
                    width={12}
                    height={12}
                    style={{ marginRight: 6 }}
                />
                PT
            </MenuItem>

            <MenuItem value="en">
                <img
                    loading="lazy"
                    src="/images/i18n/united-kingdom-flag.png"
                    alt="United Kingdom flag"
                    width={12}
                    height={12}
                    style={{ marginRight: 6 }}
                />
                EN
            </MenuItem>
        </Select>
    );
}
