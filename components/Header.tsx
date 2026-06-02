"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo + phone */}
          <div className="flex items-center gap-6">
            <Link href="/" aria-label="home">
              <Image
                src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69ddfd9f863af24f8725ad4e_logo.svg.svg"
                alt="ACTU"
                width={120}
                height={56}
                className="h-14 w-auto"
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
              <div className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#ec6907] cursor-pointer transition-colors">
                <Link href="/about-us">Про нас</Link>
                <svg className="w-3 h-3" viewBox="0 0 10 6" fill="currentColor">
                  <path d="M0 0l5 6 5-6z" />
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
              <div className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#ec6907] cursor-pointer transition-colors">
                <Link href="/shop">Каталог продукції</Link>
                <svg className="w-3 h-3" viewBox="0 0 10 6" fill="currentColor">
                  <path d="M0 0l5 6 5-6z" />
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
            <Link href="/kontakty" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#ec6907] transition-colors">
              Контакти
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-transform" style={mobileOpen ? { transform: "translateY(8px) rotate(-45deg)" } : {}} />
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-transform" style={mobileOpen ? { transform: "translateY(-8px) rotate(45deg)" } : {}} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t py-4 space-y-1">
            <div className="px-3 py-2 mb-3">
              <a href="tel:+380673008201" className="text-sm font-semibold text-gray-900">+380 67 300 82 01</a>
              <p className="text-xs text-gray-500">Графік роботи з 10:00 до 18:00</p>
            </div>
            <Link href="/#perevagu" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ec6907]">Наші переваги</Link>
            <Link href="/about-us" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ec6907]">Про нас</Link>
            <Link href="/shop" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ec6907]">Каталог продукції</Link>
            <Link href="/blog" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ec6907]">Блог</Link>
            <Link href="/de-kupyty" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ec6907]">Де купити</Link>
            <Link href="/dyleram" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ec6907]">Дилерам</Link>
            <Link href="/kontakty" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ec6907]">Контакти</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
