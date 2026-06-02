import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Про компанію ACTU",
  description:
    "Про компанію ACTU ✔ Український бренд сухих будівельних сумішей ☝ Інноваційні технології ⭐ Відповідність міжнародним стандартам якості ☎ +380 67 300 82 01",
  openGraph: {
    title: "Про компанію ACTU",
    images: [
      "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df8d94296e7e17ef6df4c2_891b0db6060a329dfdca6957c3f5f8cc5f19ad6a.avif",
    ],
  },
};

const productionSteps = [
  {
    image:
      "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df8ad32a46694349980fd4_476bae303a97196f94e21ce51e452a4768625d5f.avif",
    title: "Сировина",
    text: "Цемент та мінпорошок завантажуються у силоси за допомогою пневмотранспортера. Пісок сушиться у сушильному барабані з подальшим просіюванням та складуванням у силоси. Додаткова сировина подається з бегів чи мішків через бегорозвантажувачі безпосередньо у ваговий дозатор.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df8adc68e59bfa24366b57_6827c205157fb6b8b15e5b23c09f1acf53ae05d2.avif",
    title: "Виробництво",
    text: "Сировина з силосів та бегорозвантажувачів, згідно техкарти продукту, дозується у ваговий дозатор, звідки потрапляє у змішувач. Хімічні добавки, згідно техкарти продукту, дозуються у ваговий дозатор, звідки потрапляють до мішалки. Після цього відбувається перемішування їх до досягнення повної однорідності продукту. Весь процес повністю автоматизований та потребує мінімальної участі персоналу.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df8adbccedbf92df4605d8_a77ada14ce862c17778e445c8a9bf50300e46b4e.avif",
    title: "Фасування та складування",
    text: "Після завершення циклу перемішування, відбувається фасування продукту у мішки з подальшим направленням на зберігання.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="py-12 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <Link href="/" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
                Головна
              </Link>
              <span className="text-[#ec6907] font-bold">/ Про нас</span>
            </div>

            {/* Hero content */}
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="w-full lg:flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Про нас</h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                  ACTU — це український бренд, який спеціалізується на виробництві високоякісних клеїв, мурувальних розчинів, штукатурок, сумішей для влаштування стяжок та підлог, а також для систем теплоізоляції. Наша компанія пишається інноваційним підходом та використанням перевіреної сировини для досягнення ідеальних результатів.
                  <br /><br />
                  Довіра наших клієнтів є найважливішою. Наші продукти використовують фахівці з усієї України. ACTU — це не просто бренд. Це надійний партнер для тих, хто шукає високоякісні рішення для будівництва та ремонту.
                </p>
              </div>
              <div className="w-full lg:flex-1">
                <Image
                  src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df88e5109844e8b8877737_95a9c66c8b0dba1ee3b19c1a40f270dc6d04c7b7.avif"
                  alt="Про ACTU"
                  width={625}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:flex-1">
                <Image
                  src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df896bdc58211db1551e24_Group%202.avif"
                  alt="Історія компанії ACTU"
                  width={600}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full lg:flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Історія компанії</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  ACTU — це частина ONUR GROUP, великої групи компаній, яка активно працює в галузі Production. ONUR GROUP здобула визнання як надійний інвестор, сприяючи розвитку української економіки у сферах видобування та виробництва. Це важливий аспект нашого існування, адже ми впроваджуємо сучасні методи та технології, залучаючи для цього передовий європейський досвід.
                  <br /><br />
                  Вклад ONUR GROUP в українську економіку відкриває нові перспективи. ONUR GROUP не лише інвестують, але й діляться знаннями та досвідом, що є ключовим чинником у вдосконаленні інвестиційного клімату. Мета — допомогти Україні перейти від сировинної економіки до створення якісної доданої вартості.
                  <br /><br />
                  Ми пишаємося партнерством з компанією «Агробудсервіс». Завдяки ній ми отримуємо важливі ресурси для виробництва наших сумішей — пісок та вапняк. Агробудсервіс, яка теж входить в ONUR GROUP, добуває ці матеріали у кар&apos;єрі Південно-Тростянецького родовища у Львівській області. У взаємодії з партнерською компанією ми прагнемо не лише виготовляти високоякісні будівельні матеріали, але й сприяти стійкому та екологічно чистому розвитку регіону.
                  <br /><br />
                  ACTU — це більше, ніж просто виробник сухих будівельних сумішей. Ми — команда, яка об&apos;єднує сучасні технології та експертний досвід і прагне створювати якісну продукцію.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Production */}
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Виробництво</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productionSteps.map((step) => (
                <div key={step.title} className="flex flex-col">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={380}
                    height={280}
                    className="w-full h-[280px] object-cover mb-6"
                  />
                  <p className="text-base font-semibold text-gray-900 mb-3">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:flex-1">
                <Image
                  src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df8c454e5b7fd1896615a2_e711883b9ba69ec3f1c2705d8a6108e856aaf08a.avif"
                  alt="Місія ACTU"
                  width={560}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full lg:flex-1">
                <p className="text-base font-semibold text-gray-900 mb-6 leading-snug">
                  Місія ACTU — надавати якісні та актуальні рішення сухих будівельних сумішей для ринку України
                </p>
                <div className="text-sm text-gray-500 leading-relaxed space-y-4">
                  <p>Наші цінності:</p>
                  <div>
                    <p className="font-bold text-gray-900">Якість</p>
                    <p>Ми прагнемо виробляти сухі будівельні суміші найвищої якості, які відповідають і перевершують очікування наших клієнтів.</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Актуальність</p>
                    <p>Ми постійно шукаємо нові способи впровадження інновацій і вдосконалення наших продуктів і послуг, гарантуючи, що наші клієнти завжди отримують сучасні та якісні матеріали.</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Орієнтація на клієнта</p>
                    <p>Ми уважно прислухаємося до відгуків і пропозицій наших клієнтів і використовуємо цю інформацію для вдосконалення наших продуктів і послуг.</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Постійне вдосконалення</p>
                    <p>Ми постійно перевіряємо та вдосконалюємо наші процеси та продукти, шукаючи шляхи підвищення ефективності, якості та задоволеності клієнтів.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
