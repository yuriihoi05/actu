import Image from "next/image";

const advantages = [
  {
    icon: "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69de085ecf0d66fd6a2317dc_Container.svg",
    title: "Висока якість",
    description:
      "Виготовляємо продукцію з української сировини, 80% з якої надає партнерська компанія «AGROBUDSERVICE»",
  },
  {
    icon: "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69de095005d95b87963e34a7_SVG.svg",
    title: "Надійна експлуатація",
    description:
      "Сухі будівельні суміші ACTU прості у використанні та ідеально виконують задачі професійного будівництва та ремонту.",
  },
  {
    icon: "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69de09470458b00a93d6576d_SVG.svg",
    title: "Оптимальна вартість",
    description:
      "Розташування виробництва поряд з місцем видобутку сировини оптимізує собівартість продукції та дозволяє пропонувати доступні ціни.",
  },
];

export default function AdvantagesSection() {
  return (
    <section id="perevagu" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Наші переваги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((item) => (
            <div key={item.title} className="flex items-start gap-5">
              <Image
                src={item.icon}
                alt={item.title}
                width={56}
                height={56}
                className="w-14 h-14 flex-shrink-0 object-contain"
              />
              <div>
                <p className="text-base font-semibold text-gray-900 mb-2">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
