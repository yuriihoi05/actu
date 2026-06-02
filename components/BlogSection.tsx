import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    href: "/blog/actu-na-kyivbuild-2026-novynky-ta-dialog-iz-rynkom",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e2223a13ce3674b5caccc7_9d20b8d73641ea006c7296322456e932a7bb9780%20(1).avif",
    title: "ACTU на KyivBuild 2026: новинки та діалог із ринком",
    excerpt:
      "Команда ACTU взяла участь у міжнародній виставці KyivBuild 2026 – одній із головних подій року для професійної спільноти будівельної індустрії.",
  },
  {
    href: "/blog/yak-vyrivnyaty-pidlogu-praktychni-porady",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e62aac78716cbef25efe2a_depositphotos_425277300_xl-1.avif",
    title: "Як вирівняти підлогу: практичні поради",
    excerpt:
      "На око все рівно — а плитка тріскає, ламінат скрипить, двері не зачиняються як слід. Зазвичай це означає одне: основу не перевірили або зробили поверхнево. Так, щоб було.",
  },
  {
    href: "/blog/riznovydy-kleyu-dlya-plytky-yak-vybraty-zalezhno-vid-typu-plytky",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e62bd4a4073afe2f922e5b_rectangle-7%20(1).avif",
    title: "Різновиди клею для плитки: як вибрати залежно від типу плитки",
    excerpt:
      "Найчастіше люди обирають клей за принципом «що було в магазині». Або купують універсальний і кладуть його усюди — і в ванній, і на балконі, і під теплу підлогу. А потім дивуються: плитка відклеїлась, шви потемніли, з'явились тріщини.",
  },
  {
    href: "/blog/yak-zberigaty-klejovi-sumishi-porady-po-tryvalosti-zberigannya-ta-umovam",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e8a3d99882c10fa1208f84_img_1304-1.png",
    title: "Як зберігати клейові суміші: поради по тривалості зберігання та умовам",
    excerpt:
      "Щоб клейова суміш добре тримала плитку, не втратила властивостей у момент нанесення і не підвела в роботі, важливо правильно її зберігати.",
  },
  {
    href: "/blog/yaku-shtukaturku-obraty-gipsovu-chy-czementno-vapnyanu",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e8a4a568b4c7e04ce74011_depositphotos_653520188_xl-1.png",
    title: "Яку штукатурку обрати: гіпсову чи цементно-вапняну?",
    excerpt:
      "Коли доходить до вирівнювання стін, перше, що запитують у магазині або в майстра — яку штукатурку брати: гіпсову чи цементно-вапняну? На вигляд — схожі. А от поводять себе по-різному.",
  },
  {
    href: "/blog/styazhka-dlya-teployi-pidlogy-yak-vybraty-optymalnu-sumish",
    image: "https://cdn.prod.website-files.com/69de185d76112051c08d8b3e/69e8ab5bc93a320ea4efb79c_pes-na-pidlozi.png",
    title: "Стяжка для теплої підлоги: як вибрати оптимальну суміш?",
    excerpt:
      "Тепла підлога — це комфорт, який відчуваєш щодня. Але щоб ця система працювала справді ефективно, потрібно правильно обрати стяжку.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Блог</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="flex flex-col group bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[16/9] bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex-1">
                  <p className="text-base font-semibold text-gray-900 leading-snug mb-3">
                    {post.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                {/* text-more — plain link text, matches original .text-more class */}
                <span className="mt-8 text-[1.125rem] font-bold text-[#ec6907] uppercase leading-[1.375rem]">Детальніше</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="bg-[#ec6907] text-white font-bold w-full max-w-[20rem] h-[3.375rem] flex items-center justify-center border-2 border-transparent uppercase tracking-wide hover:bg-white hover:text-[#ec6907] hover:border-[#ec6907] transition-all duration-[400ms] text-lg"
          >
            Більше статей
          </Link>
        </div>
      </div>
    </section>
  );
}
