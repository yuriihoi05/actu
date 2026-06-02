import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Контакти компанії ACTU",
  description:
    "Контакти компанії ACTU ☎ +380 67 300 82 01 ✔ Український бренд сухих будівельних сумішей ☝ Інноваційні технології ⭐ Відповідність міжнародним стандартам якості",
  openGraph: { title: "Контакти компанії ACTU" },
};

const contacts = [
  {
    title: "Відділ кадрів",
    desc: "Хочете приєднатися до нашої команди?",
    href: "mailto:hr@actu.com.ua",
    label: "hr@actu.com.ua",
    type: "email",
  },
  {
    title: "Бухгалтерія",
    desc: "Маєте питання щодо оплат або документів?",
    href: "mailto:accounting@actu.com.ua",
    label: "accounting@actu.com.ua",
    type: "email",
  },
  {
    title: "Відділ продажу",
    desc: "Хочете придбати наші товари або задати запитати про наші послуги?",
    href: "mailto:sales@actu.com.ua",
    label: "sales@actu.com.ua",
    type: "email",
  },
  {
    title: "Відділ партнерств",
    desc: "Хочете придбати наші товари або задати запитати щодо наших послуг?",
    href: "mailto:partnerships@actu.com.ua",
    label: "partnerships@actu.com.ua",
    type: "email",
  },
  {
    title: "Відділ підтримки клієнтів",
    desc: "Маєте питання або потрібна інформація про нас?",
    href: "mailto:info@actu.com.ua",
    label: "info@actu.com.ua",
    type: "email",
  },
  {
    title: "Телефон",
    desc: "Потрібна швидка консультація або допомога?",
    href: "tel:+380739203644",
    label: "+380 73 920 36 44",
    type: "phone",
  },
];

function MailIcon() {
  return (
    <svg className="w-5 h-[18px] flex-shrink-0" viewBox="0 0 24 18" fill="none">
      <path d="M21.75 0C22.9688 0 24 1.03125 24 2.25V15.75C24 17.0156 22.9688 18 21.75 18H2.25C0.984375 18 0 17.0156 0 15.75V2.25C0 1.03125 0.984375 0 2.25 0H21.75ZM21.75 2.25H2.25V4.17188C3.28125 5.0625 4.96875 6.375 8.53125 9.1875C9.32812 9.79688 10.875 11.2969 12 11.25C13.0781 11.2969 14.625 9.79688 15.4219 9.1875C18.9844 6.375 20.6719 5.0625 21.75 4.17188V2.25ZM2.25 15.75H21.75V7.07812C20.6719 7.92188 19.125 9.14062 16.8281 10.9688C15.75 11.7656 13.9688 13.5469 12 13.5C9.98438 13.5469 8.15625 11.7656 7.125 10.9688C4.82812 9.14062 3.28125 7.92188 2.25 7.07812V15.75Z" fill="#EC6907" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M23.2969 16.9688C23.6719 17.1562 23.9531 17.5781 23.9531 18.0469C23.9531 18.0938 23.9531 18.1875 23.9531 18.2812L22.8281 23.1562C22.6875 23.6719 22.2656 24 21.75 24C9.70312 24 0 14.2969 0 2.25C0 1.73438 0.328125 1.3125 0.84375 1.17188L5.71875 0.046875C5.8125 0.046875 5.90625 0 5.95312 0C6.42188 0 6.84375 0.28125 7.03125 0.703125L9.28125 5.95312C9.32812 6.09375 9.375 6.23438 9.375 6.375C9.375 6.75 9.1875 7.07812 8.95312 7.26562L6.09375 9.60938C7.82812 13.2656 10.7344 16.1719 14.3906 17.9062L16.7344 15.0469C16.9219 14.8125 17.25 14.625 17.5781 14.625C17.7656 14.625 17.9062 14.6719 18.0469 14.7188L23.2969 16.9688Z" fill="#EC6907" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Contact info + form */}
        <section className="py-12 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <Link href="/" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
                Головна
              </Link>
              <span className="text-[#ec6907] font-bold">/ Контакти</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">

              {/* Left: contact grid + socials */}
              <div className="w-full lg:flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Контактна інформація</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {contacts.map((item) => (
                    <div key={item.title} className="flex flex-col gap-3">
                      <div>
                        <p className="text-base font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        {item.type === "phone" ? <PhoneIcon /> : <MailIcon />}
                        <span className="text-base font-bold text-[#ec6907]">{item.label}</span>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/actudrymixes" target="_blank" rel="noopener noreferrer"
                    className="text-[#ec6907] hover:opacity-70 transition-opacity">
                    <svg className="w-5 h-8" viewBox="0 0 22 40" fill="none">
                      <path d="M20.0781 22.5H14.2187V40H6.4062V22.5H-4.86374e-05V15.3125H6.4062V9.76562C6.4062 3.51562 10.1562 0 15.8593 0C18.5937 0 21.4843 0.546875 21.4843 0.546875V6.71875H18.2812C15.1562 6.71875 14.2187 8.59375 14.2187 10.625V15.3125H21.1718L20.0781 22.5Z" fill="#EC6907" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/actu-dry-mixes/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer"
                    className="text-[#ec6907] hover:opacity-70 transition-opacity">
                    <svg className="w-7 h-7" viewBox="0 0 35 35" fill="none">
                      <path d="M7.81255 34.9219H0.546925V11.5625H7.81255V34.9219ZM4.14067 8.4375C1.87505 8.4375 4.95911e-05 6.48438 4.95911e-05 4.14062C4.95911e-05 1.875 1.87505 0 4.14067 0C6.48442 0 8.35942 1.875 8.35942 4.14062C8.35942 6.48438 6.48442 8.4375 4.14067 8.4375ZM34.9219 34.9219H27.7344V23.5938C27.7344 20.8594 27.6563 17.4219 23.9063 17.4219C20.1563 17.4219 19.6094 20.3125 19.6094 23.3594V34.9219H12.3438V11.5625H19.2969V14.7656H19.375C20.3907 12.9688 22.7344 11.0156 26.25 11.0156C33.5938 11.0156 35 15.8594 35 22.1094V34.9219H34.9219Z" fill="#EC6907" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/actudrymixes/" target="_blank" rel="noopener noreferrer"
                    className="text-[#ec6907] hover:opacity-70 transition-opacity">
                    <svg className="w-7 h-7" viewBox="0 0 36 36" fill="none">
                      <path d="M17.5782 8.51562C22.5 8.51562 26.5625 12.5781 26.5625 17.5C26.5625 22.5 22.5 26.4844 17.5782 26.4844C12.5782 26.4844 8.5938 22.5 8.5938 17.5C8.5938 12.5781 12.5782 8.51562 17.5782 8.51562ZM17.5782 23.3594C20.7813 23.3594 23.3594 20.7812 23.3594 17.5C23.3594 14.2969 20.7813 11.7188 17.5782 11.7188C14.2969 11.7188 11.7188 14.2969 11.7188 17.5C11.7188 20.7812 14.375 23.3594 17.5782 23.3594ZM28.9844 8.20312C28.9844 9.375 28.0469 10.3125 26.875 10.3125C25.7032 10.3125 24.7657 9.375 24.7657 8.20312C24.7657 7.03125 25.7032 6.09375 26.875 6.09375C28.0469 6.09375 28.9844 7.03125 28.9844 8.20312ZM34.9219 10.3125C35.0782 13.2031 35.0782 21.875 34.9219 24.7656C34.7657 27.5781 34.1407 30 32.1094 32.1094C30.0782 34.1406 27.5782 34.7656 24.7657 34.9219C21.875 35.0781 13.2032 35.0781 10.3125 34.9219C7.50005 34.7656 5.07817 34.1406 2.9688 32.1094C0.93755 30 0.31255 27.5781 0.1563 24.7656C4.95911e-05 21.875 4.95911e-05 13.2031 0.1563 10.3125C0.31255 7.5 0.93755 5 2.9688 2.96875C5.07817 0.9375 7.50005 0.3125 10.3125 0.15625C13.2032 0 21.875 0 24.7657 0.15625C27.5782 0.3125 30.0782 0.9375 32.1094 2.96875C34.1407 5 34.7657 7.5 34.9219 10.3125ZM31.1719 27.8125C32.1094 25.5469 31.875 20.0781 31.875 17.5C31.875 15 32.1094 9.53125 31.1719 7.1875C30.5469 5.70312 29.375 4.45312 27.8907 3.90625C25.5469 2.96875 20.0782 3.20312 17.5782 3.20312C15 3.20312 9.5313 2.96875 7.26567 3.90625C5.70317 4.53125 4.5313 5.70312 3.9063 7.1875C2.9688 9.53125 3.20317 15 3.20317 17.5C3.20317 20.0781 2.9688 25.5469 3.9063 27.8125C4.5313 29.375 5.70317 30.5469 7.26567 31.1719C9.5313 32.1094 15 31.875 17.5782 31.875C20.0782 31.875 25.5469 32.1094 27.8907 31.1719C29.375 30.5469 30.625 29.375 31.1719 27.8125Z" fill="#EC6907" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div className="w-full lg:flex-1">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-5 pb-16">
            <div className="flex flex-col lg:flex-row gap-0">

              {/* Google Maps iframe */}
              <div className="w-full lg:flex-1 h-[400px]">
                <iframe
                  src="https://maps.google.com/maps?q=Тростянець,+Стрийський+район,+Львівська+область,+вул.+Зелена+3Г&output=embed&z=14"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ACTU на карті"
                />
              </div>

              {/* Map info */}
              <div className="w-full lg:w-72 flex-shrink-0 bg-gray-50 p-8 flex flex-col justify-center gap-4">
                <p className="text-lg font-semibold text-gray-900 leading-snug">
                  Lviv region, Stryi district, Trostianets village, 3G Zelena str.
                </p>
                <p className="text-sm text-gray-500">
                  Work schedule: <strong className="text-gray-900">10:00–18:00</strong>
                </p>
                <a href="tel:+380673008201" className="text-base font-semibold text-[#ec6907] hover:opacity-80 transition-opacity">
                  +380 67 300 82 01
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
