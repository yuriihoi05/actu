import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f%2F69df949a8756f8987aed26aa_YTDown.com_YouTube_Media_Dqyr2ReV8LA_001_1080p_poster.0000000.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f%2F69df949a8756f8987aed26aa_YTDown.com_YouTube_Media_Dqyr2ReV8LA_001_1080p_mp4.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f%2F69df949a8756f8987aed26aa_YTDown.com_YouTube_Media_Dqyr2ReV8LA_001_1080p_webm.webm"
          type="video/webm"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        <div className="py-32 md:py-40 max-w-2xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
            Актуальний виробник сухих будівельних сумішей
          </h1>
          <p className="text-sm font-bold text-white mb-8 leading-relaxed">
            ACTU — український бренд якісних клеїв, штукатурок, сумішей для влаштування підлог.
            Використовуємо інноваційні технології та перевірену сировину для одержання ідеального
            результату. Нам довіряють професіонали!
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#ec6907] text-white font-semibold px-8 py-3 hover:bg-[#d45e06] transition-colors text-sm"
          >
            Наші товари
          </Link>
        </div>
      </div>
    </section>
  );
}
