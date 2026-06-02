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
      <div className="relative z-10 flex items-center min-h-screen max-w-[1200px] mx-auto px-5">
        <div className="max-w-[900px] text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
            Актуальний виробник<br />сухих будівельних сумішей
          </h1>
          <p className="text-sm font-bold text-white mb-8 leading-relaxed w-full max-w-[720px]">
            ACTU — український бренд якісних клеїв, штукатурок, сумішей для влаштування підлог.
            Використовуємо інноваційні технології та перевірену сировину для одержання ідеального
            результату. Нам довіряють професіонали!
          </p>
          <Link
            href="/shop"
            className="bg-[#ec6907] text-white font-bold w-full max-w-[20rem] h-[3.375rem] flex items-center justify-center border-2 border-transparent uppercase tracking-wide hover:bg-white hover:text-[#ec6907] hover:border-[#ec6907] transition-all duration-[400ms] text-lg"
          >
            Наші товари
          </Link>
        </div>
      </div>
    </section>
  );
}
