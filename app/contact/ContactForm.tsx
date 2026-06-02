"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setSubmitted(true);
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-gray-50 p-8 text-center">
        <p className="text-base font-semibold text-gray-900">Дякуємо! Ваше повідомлення отримано.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {error && (
        <p className="text-sm text-red-500">Щось пішло не так. Спробуйте ще раз.</p>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
        <input
          id="name" name="name" type="text" placeholder="Ivan" maxLength={256}
          className="border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#ec6907] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone number</label>
        <input
          id="phone" name="phone" type="text" placeholder="+38 093 444 44 44" maxLength={256}
          className="border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#ec6907] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
        <input
          id="email" name="email" type="email" placeholder="test@email.com" maxLength={256} required
          className="border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#ec6907] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
        <textarea
          id="message" name="message" maxLength={5000} rows={5}
          className="border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#ec6907] transition-colors resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input id="checkbox" name="checkbox" type="checkbox" className="mt-0.5 w-4 h-4 accent-[#ec6907]" />
        <label htmlFor="checkbox" className="text-sm text-gray-500">
          Я погоджуюся з{" "}
          <Link href="/pravyla-korystuvannya-veb-sajtom" className="text-[#ec6907] hover:underline">
            Правилами користування веб-сайтом
          </Link>
        </label>
      </div>

      <button
        type="submit"
        className="cursor-pointer bg-[#ec6907] text-white font-bold w-full max-w-[20rem] h-[3.375rem] flex items-center justify-center border-2 border-transparent uppercase tracking-wide hover:bg-white hover:text-[#ec6907] hover:border-[#ec6907] transition-all duration-[400ms] text-lg"
      >
        Надіслати
      </button>
    </form>
  );
}
