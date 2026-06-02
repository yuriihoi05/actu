import Link from "next/link";
import Image from "next/image";

const products = [
  {
    href: "/product/shtukaturka-dekoratyvna-sylikonova-struktura-kaminczeva-pd-ss",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e5ea9f9c26a68248e9313d_pd-ss-1536x1536.avif",
    title: "Штукатурка декоративна, силіконова, структура «камінцева PD-SS»",
    description: "Штукатурка декоративна ACTUTM «PD» ДСТУ EN 1062-1:2012 E₅S₃V₂(V₁)*W₂(W₃)*A₀C₀",
    price: "1850",
  },
  {
    href: "/product/klejova-sumish-dlya-prykleyuvannya-plyt-uteplyuvacha-ti-g",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e2487af43ec367884f0f9c_ti-g-actu%E2%84%A2.avif",
    title: "Клейова суміш для приклеювання плит утеплювача TI-G",
    description: "Суміш ACTU™ «TI-G» Ц1ЗК5 згідно ДСТУ Б В.2.7-126:2011",
    price: "244",
  },
  {
    href: "/product/klejova-sumish-dlya-keramichnoyi-plytky-gt-s",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e2310467f10bd8e5201af8_gt-s-actu%E2%84%A2.avif",
    title: "Клейова суміш для керамічної плитки «GT-S»",
    description: "Суміш ACTU™ «GT-S» Ц2ЗК1 згідно ДСТУ Б В.2.7-126:2011",
    price: "223",
  },
  {
    href: "/product/klejova-sumish-dlya-keramichnoyi-plytky-ta-keramogranitugt-l",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e23332fd2139fe9b364978_gt-l-actu%E2%84%A2.avif",
    title: "Клейова суміш для керамічної плитки та керамограніту «GT-L»",
    description: "Суміш ACTU™ «GT-L» Ц1ЗК2 згідно ДСТУ Б В.2.7-126:2011",
    price: "310",
  },
  {
    href: "/product/shtukaturka-czementno-pishhana-ruchnogo-nanesennya-pl-s",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e5f093b55fe4b9638c8bdf_pl_c_1200x1200.avif",
    title: "Штукатурка цементно-піщана ручного нанесення «PL-С»",
    description: "Суміш ACTU™ «PL-С» Ц1ШТ3 згідно ДСТУ Б В.2.7-126:2011",
    price: "197",
  },
  {
    href: "/product/shtukaturka-dekoratyvna-akry-lova-struktura-kaminczeva",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e24eeb15f72091f419de90_pd-a%20(1).avif",
    title: "Штукатурка декоративна акрилова структура «Камінцева»",
    description: "Штукатурка декоративна акрилова «PD-A» ДСТУ EN 1062-1:2012 – Е5S3V1W2",
    price: "1450",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Каталог товарів</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="flex flex-col bg-white overflow-hidden group shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.14)] transition-shadow"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Info */}
              <div className="flex flex-col flex-1 p-4">
                <div className="flex-1">
                  <p className="text-base font-semibold text-gray-900 leading-snug mb-2">
                    {product.title}
                  </p>
                  <p className="text-sm text-gray-500 font-medium mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                {/* Price — two sibling spans like in original .catalog-price */}
                <div className="flex items-baseline gap-1 mt-auto">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="text-base font-bold text-gray-900">грн</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/shop"
            className="inline-block bg-[#ec6907] text-white font-semibold px-8 py-3 hover:bg-[#d45e06] transition-colors text-sm"
          >
            Більше товарів
          </Link>
        </div>
      </div>
    </section>
  );
}
