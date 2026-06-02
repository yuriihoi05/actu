"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo + phone */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="/" aria-label="home">
              <Image
                src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69ddfd9f863af24f8725ad4e_logo.svg.svg"
                alt="ACTU"
                width={100}
                height={48}
                className="h-10 md:h-14 w-auto"
              />
            </Link>
            <div className="hidden lg:flex flex-col">
              <a href="tel:+380673008201" className="text-sm font-semibold text-gray-900 hover:text-[#ec6907] transition-colors">
                +380 67 300 82 01
              </a>
              <span className="text-xs text-gray-500">Графік роботи з 10:00 до 18:00</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/#perevagu" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#ec6907] transition-colors">
              Наші переваги
            </Link>

            {/* Про нас dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#ec6907] cursor-pointer transition-colors">
                <Link href="/about-us">Про нас</Link>
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M1 1l5 6 5-6" />
                </svg>
              </div>
              {aboutOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 min-w-[140px] z-50">
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50">Блог</Link>
                  <Link href="/de-kupyty" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50">Де купити</Link>
                </div>
              )}
            </div>

            {/* Каталог dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCatalogOpen(true)}
              onMouseLeave={() => setCatalogOpen(false)}
            >
              <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#ec6907] cursor-pointer transition-colors">
                <Link href="/shop">Каталог продукції</Link>
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${catalogOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M1 1l5 6 5-6" />
                </svg>
              </div>
              {catalogOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 min-w-[260px] z-50">
                  <Link href="/product-category/klejovi-sumishi" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50">Клейові суміші</Link>
                  <Link href="/product-category/sumish-vlashtuvannya-pidlog" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50">Суміш влаштування підлог</Link>
                  <Link href="/product-category/sumish-dlya-system-teploizolyacziyi" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50">Суміш для систем теплоізоляції</Link>
                  <Link href="/product-category/sumishi-dlya-shtukaturnyh-robit" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50">Суміші для штукатурних робіт</Link>
                  <Link href="/product-category/gruntovka" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50">Ґрунтовка</Link>
                </div>
              )}
            </div>

            <Link href="/dyleram" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#ec6907] transition-colors">
              Дилерам
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#ec6907] transition-colors">
              Контакти
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="menu"
          >
            <div className="relative w-6 h-[18px]">
              <span className={`absolute left-0 block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center top-0 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 block w-6 h-0.5 bg-gray-800 transition-all duration-300 top-2 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center top-[16px] ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen border-t" : "max-h-0"}`}>
          <div className="py-4 space-y-1">
            <div className="px-4 py-3 mb-2 border-b border-gray-100">
              <a href="tel:+380673008201" className="text-sm font-semibold text-gray-900">+380 67 300 82 01</a>
              <p className="text-xs text-gray-500 mt-0.5">Графік роботи з 10:00 до 18:00</p>
            </div>

            <Link href="/#perevagu" className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
              Наші переваги
            </Link>

            {/* Mobile Про нас accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                Про нас
                <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`} viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1l5 6 5-6" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? "max-h-40" : "max-h-0"}`}>
                <Link href="/blog" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#ec6907] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Блог</Link>
                <Link href="/de-kupyty" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#ec6907] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Де купити</Link>
              </div>
            </div>

            {/* Mobile Каталог accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
              >
                Каталог продукції
                <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${mobileCatalogOpen ? "rotate-180" : ""}`} viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1l5 6 5-6" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileCatalogOpen ? "max-h-60" : "max-h-0"}`}>
                <Link href="/product-category/klejovi-sumishi" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#ec6907] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Клейові суміші</Link>
                <Link href="/product-category/sumish-vlashtuvannya-pidlog" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#ec6907] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Суміш влаштування підлог</Link>
                <Link href="/product-category/sumish-dlya-system-teploizolyacziyi" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#ec6907] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Суміш для систем теплоізоляції</Link>
                <Link href="/product-category/sumishi-dlya-shtukaturnyh-robit" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#ec6907] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Суміші для штукатурних робіт</Link>
                <Link href="/product-category/gruntovka" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#ec6907] hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Ґрунтовка</Link>
              </div>
            </div>

            <Link href="/dyleram" className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
              Дилерам
            </Link>
            <Link href="/contact" className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#ec6907] hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
              Контакти
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
