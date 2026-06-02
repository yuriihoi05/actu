import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Про ACTU</h2>
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-500 leading-relaxed">
                Компанія ACTU входить до складу ONUR GROUP, яка інвестує значні ресурси у сектори
                видобування та виробництва України та сприяє переходу від сировинної економіки до
                створення якісної доданої вартості.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Виробництво сухих будівельних сумішей відбувається в умовах партнерської співпраці з
                компанією «Агробудсервіс» на території кар&apos;єру Південно-Тростянецького родовища у
                Львівській області. Продукція ACTU відповідає міжнародним стандартам якості.
              </p>
            </div>
            <Link
              href="/about-us"
              className="inline-block bg-[#ec6907] text-white font-semibold px-8 py-3 hover:bg-[#d45e06] transition-colors text-sm"
            >
              Детальніше
            </Link>
          </div>

          {/* Right */}
          <div className="flex-1">
            <Image
              src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69de177f5ec2e51250cf5c14_64a2f9f78e4d6bc6c7f2bae28f9d37377773c4e7.avif"
              alt="Про ACTU"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
