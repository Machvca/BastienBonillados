import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/": {
      en: "/",
      es: "/",
      fr: "/",
    },
    "/about": {
      en: "/about",
      es: "/quien-soy",
      fr: "/qui-suis-je",
    },
    "/contact": {
      en: "/contact",
      es: "/contacto",
      fr: "/contact",
    },
  },
  // Add more pathnames as needed
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
