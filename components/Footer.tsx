import Link from "next/link";
import Image from "next/image";

const catalogLinks = [
  { href: "/shop?category=kleyovi-sumishi", label: "Клейові суміші" },
  { href: "/shop?category=sumish-vlashtuvannya-pidlog", label: "Суміш влаштування підлог" },
  { href: "/shop?category=sumish-dlya-system-teploizolyacziyi", label: "Суміш для систем теплоізоляції" },
  { href: "/shop?category=sumishi-dlya-shtukaturnyh-robit", label: "Суміші для штукатурних робіт" },
  { href: "/shop?category=gruntovka", label: "Ґрунтовка" },
];

const emails = [
  "info@actu.com.ua",
  "sales@actu.com.ua",
  "hr@actu.com.ua",
  "partnerships@actu.com.ua",
  "accounting@actu.com.ua",
];

const helpLinks = [
  { href: "/sertifikati", label: "Сертифікати" },
  { href: "/press-kit", label: "Press Kit" },
  { href: "/umovy-oplaty", label: "Оплата" },
];

function MailIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <mask id="mail-mask" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path d="M23.4286 0H0.571426V24H23.4286V0Z" fill="white" />
      </mask>
      <g mask="url(#mail-mask)">
        <path d="M23.4286 21.2858C23.4286 21.881 23.2202 22.387 22.8035 22.8036C22.3869 23.2203 21.8809 23.4287 21.2857 23.4287H2.71428C2.11905 23.4287 1.61309 23.2203 1.19643 22.8036C0.77976 22.387 0.571426 21.881 0.571426 21.2858V9.54474C0.571426 8.83046 0.839284 8.26499 1.375 7.84832C2.59523 6.89593 5.05059 5.08046 8.74107 2.40189C8.74107 2.40189 8.9494 2.25308 9.36607 1.95546C9.78274 1.62808 10.0952 1.40487 10.3036 1.28582C10.5119 1.13701 10.7798 0.9882 11.1071 0.83939C11.4643 0.660819 11.7619 0.571533 12 0.571533C12.2381 0.571533 12.5208 0.660819 12.8482 0.83939C13.2054 0.9882 13.4881 1.13701 13.6965 1.28582C13.9048 1.40487 14.2173 1.62808 14.6339 1.95546C15.0506 2.25308 15.259 2.40189 15.259 2.40189C18.9494 5.08046 21.4048 6.89593 22.625 7.84832C23.1607 8.26499 23.4286 8.83046 23.4286 9.54474V21.2858ZM20.4822 12.4912C20.3631 12.3126 20.1994 12.2828 19.9911 12.4019C18.9494 13.2055 17.372 14.3662 15.259 15.884C15.259 15.884 15.0506 16.0478 14.6339 16.3751C14.2173 16.6727 13.9048 16.896 13.6965 17.0448C13.4881 17.1638 13.2054 17.3126 12.8482 17.4912C12.5208 17.64 12.2381 17.7144 12 17.7144C11.7917 17.7144 11.5685 17.6697 11.3304 17.5804C11.0923 17.4912 10.8393 17.3721 10.5714 17.2233C10.3333 17.0448 10.1101 16.896 9.90178 16.7769C9.72321 16.6281 9.5 16.4495 9.23214 16.2411C8.96428 16.0328 8.80059 15.9138 8.74107 15.884C6.62797 14.3662 5.05059 13.2055 4.00892 12.4019C3.80059 12.2828 3.6369 12.3126 3.51785 12.4912L3.11607 13.1162C3.05655 13.1756 3.02679 13.2352 3.02679 13.2947C3.02679 13.4138 3.07143 13.5179 3.16071 13.6072C4.23214 14.381 5.80952 15.512 7.89286 17.0001C7.95238 17.0596 8.14583 17.2233 8.47321 17.4912C8.80059 17.7292 9.06845 17.9227 9.27679 18.0715C9.48512 18.2203 9.75297 18.399 10.0804 18.6072C10.4375 18.7858 10.7649 18.9198 11.0625 19.009C11.3899 19.0983 11.7024 19.143 12 19.143C12.2976 19.143 12.5952 19.0983 12.8928 19.009C13.2202 18.9198 13.5477 18.7858 13.875 18.6072C14.2321 18.399 14.5149 18.2203 14.7232 18.0715C14.9315 17.9227 15.1994 17.7292 15.5267 17.4912C15.8542 17.2233 16.0477 17.0596 16.1072 17.0001C18.1905 15.512 19.7679 14.381 20.8393 13.6072C20.9286 13.5179 20.9733 13.4138 20.9733 13.2947C20.9733 13.2352 20.9434 13.1756 20.8839 13.1162L20.4822 12.4912Z" fill="#EC6907" />
      </g>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M22.759 16.7322C23.2054 16.9108 23.4286 17.2382 23.4286 17.7144C23.4286 17.8036 23.4137 17.878 23.3839 17.9376L22.3125 22.5804C22.1935 23.1459 21.8512 23.4287 21.2857 23.4287C15.5714 23.4287 10.6905 21.4049 6.64286 17.3572C2.59523 13.3096 0.571426 8.42868 0.571426 2.71439C0.571426 2.14892 0.854165 1.80665 1.41964 1.6876L6.0625 0.616176C6.12202 0.586414 6.19643 0.571533 6.28571 0.571533C6.76191 0.571533 7.08928 0.794747 7.26786 1.24118L9.41072 6.24118C9.47024 6.36022 9.5 6.49415 9.5 6.64296C9.5 6.97035 9.36607 7.25308 9.09822 7.49118L6.41964 9.67868C8.08631 13.2799 10.7202 15.9138 14.3214 17.5804L16.5089 14.9019C16.747 14.634 17.0297 14.5001 17.3571 14.5001C17.5059 14.5001 17.6399 14.5298 17.759 14.5894L22.759 16.7322Z" fill="#EC6907" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M11.1071 22.9823C10.3929 21.9406 9.5744 20.765 8.65179 19.4554C7.75893 18.1459 7.11905 17.2233 6.73214 16.6876C6.34524 16.1519 5.89881 15.4971 5.39286 14.7233C4.88691 13.9198 4.54464 13.3543 4.36607 13.0268C4.21726 12.6995 4.03869 12.2828 3.83036 11.7769C3.65179 11.2709 3.53274 10.8394 3.47322 10.4823C3.44345 10.0953 3.42857 9.64892 3.42857 9.14296C3.42857 6.76201 4.26191 4.7382 5.92857 3.07153C7.59524 1.40487 9.61905 0.571533 12 0.571533C14.381 0.571533 16.4048 1.40487 18.0714 3.07153C19.7381 4.7382 20.5714 6.76201 20.5714 9.14296C20.5714 9.64892 20.5417 10.0953 20.4822 10.4823C20.4523 10.8394 20.3334 11.2709 20.125 11.7769C19.9464 12.2828 19.7679 12.6995 19.5893 13.0268C19.4405 13.3543 19.1131 13.9198 18.6071 14.7233C18.1011 15.4971 17.6547 16.1519 17.2679 16.6876C16.8809 17.2233 16.2262 18.1459 15.3035 19.4554C14.4107 20.765 13.6071 21.9406 12.8929 22.9823C12.6845 23.2799 12.3869 23.4287 12 23.4287C11.6131 23.4287 11.3155 23.2799 11.1071 22.9823ZM9.45536 11.6876C10.1696 12.3721 11.0179 12.7144 12 12.7144C12.9822 12.7144 13.8155 12.3721 14.5 11.6876C15.2143 10.9733 15.5714 10.1251 15.5714 9.14296C15.5714 8.16081 15.2143 7.32749 14.5 6.64296C13.8155 5.92868 12.9822 5.57153 12 5.57153C11.0179 5.57153 10.1696 5.92868 9.45536 6.64296C8.77084 7.32749 8.42857 8.16081 8.42857 9.14296C8.42857 10.1251 8.77084 10.9733 9.45536 11.6876Z" fill="#EC6907" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M12.5 2C10.4233 2 8.39323 2.61581 6.66652 3.76957C4.9398 4.92332 3.59399 6.5632 2.79927 8.48182C2.00455 10.4004 1.79661 12.5116 2.20176 14.5484C2.6069 16.5852 3.60693 18.4562 5.07538 19.9246C6.54383 21.3931 8.41475 22.3931 10.4516 22.7982C12.4884 23.2034 14.5996 22.9955 16.5182 22.2007C18.4368 21.406 20.0767 20.0602 21.2304 18.3335C22.3842 16.6068 23 14.5767 23 12.5C22.9967 9.71623 21.8894 7.04743 19.921 5.07901C17.9526 3.11059 15.2838 2.00328 12.5 2ZM16.0385 16.0385C15.8595 16.2174 15.6167 16.318 15.3636 16.318C15.1105 16.318 14.8678 16.2174 14.6888 16.0385L11.8251 13.1749C11.6461 12.9959 11.5455 12.7531 11.5455 12.5V6.77273C11.5455 6.51957 11.646 6.27677 11.825 6.09776C12.004 5.91875 12.2468 5.81818 12.5 5.81818C12.7532 5.81818 12.996 5.91875 13.175 6.09776C13.354 6.27677 13.4545 6.51957 13.4545 6.77273V12.1048L16.0385 14.6888C16.2175 14.8678 16.318 15.1105 16.318 15.3636C16.318 15.6167 16.2175 15.8595 16.0385 16.0385Z" fill="#EC6907" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M18.9772 4.44141C18.656 4.44141 18.3945 4.70283 18.3945 5.02406C18.3945 5.3453 18.656 5.60672 18.9772 5.60672C19.2985 5.60672 19.5598 5.34534 19.5598 5.02406C19.5598 4.70278 19.2985 4.44141 18.9772 4.44141Z" fill="#EC6907" />
      <path d="M12.0014 6.83398C9.15316 6.83398 6.83594 9.1512 6.83594 11.9994C6.83594 14.8476 9.15316 17.1649 12.0014 17.1649C14.8496 17.1649 17.1669 14.8477 17.1669 11.9995C17.1669 9.15125 14.8496 6.83398 12.0014 6.83398Z" fill="#EC6907" />
      <path d="M17.4208 0H6.57923C2.95144 0 0 2.95144 0 6.57928V17.4208C0 21.0486 2.95144 24 6.57923 24H17.4208C21.0486 24 24 21.0486 24 17.4208V6.57928C24 2.95144 21.0486 0 17.4208 0ZM12 18.5828C8.37023 18.5828 5.4173 15.6298 5.4173 12C5.4173 8.37023 8.37028 5.41734 12 5.41734C15.6297 5.41734 18.5828 8.37028 18.5828 12C18.5828 15.6297 15.6297 18.5828 12 18.5828ZM18.9765 7.02356C17.8737 7.02356 16.9765 6.12637 16.9765 5.02359C16.9765 3.92081 17.8737 3.02358 18.9765 3.02358C20.0792 3.02358 20.9764 3.92077 20.9764 5.02355C20.9764 6.12633 20.0792 7.02356 18.9765 7.02356Z" fill="#EC6907" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M20.7273 0H3.27273C1.46429 0 0 1.46429 0 3.27273V20.7273C0 22.5357 1.46429 24 3.27273 24H20.7273C22.5357 24 24 22.5357 24 20.7273V3.27273C24 1.46429 22.5357 0 20.7273 0ZM8.18182 18.9927H5.01273V9.95455H8.18182V18.9927ZM6.59727 8.59091C5.53643 8.59091 4.67727 7.73175 4.67727 6.67091C4.67727 5.61007 5.53643 4.75091 6.59727 4.75091C7.65811 4.75091 8.51727 5.61007 8.51727 6.67091C8.51727 7.73175 7.65811 8.59091 6.59727 8.59091ZM19.4509 18.9927H16.2818V14.4545C16.2818 13.2655 16.2573 11.7273 14.6182 11.7273C12.9545 11.7273 12.7036 13.0364 12.7036 14.3682V18.9927H9.53455V9.95455H12.5782V11.3727H12.6218C13.05 10.5627 14.1109 9.70909 15.7009 9.70909C18.9109 9.70909 19.4509 11.8145 19.4509 14.5964V18.9927Z" fill="#EC6907" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-5 flex-shrink-0" viewBox="0 0 13 24" fill="none">
      <path d="M12.0469 13.5H8.53125V24H3.84375V13.5H0V9.1875H3.84375V5.85938C3.84375 2.10938 6.09375 0 9.51562 0C11.1562 0 12.8906 0.328125 12.8906 0.328125V4.03125H10.9688C9.09375 4.03125 8.53125 5.15625 8.53125 6.375V9.1875H12.7031L12.0469 13.5Z" fill="#EC6907" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: logo + social links */}
          <div className="flex flex-col gap-6 lg:w-56 flex-shrink-0">
            <Image
              src="https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df5415d91dba61ede40787_logo_footer.svg.svg"
              alt="ACTU"
              width={140}
              height={64}
              className="h-16 w-auto self-start"
            />
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/actudrymixes/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <InstagramIcon />
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/actu-dry-mixes/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href="https://www.facebook.com/actudrymixes" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <FacebookIcon />
                Facebook
              </a>
            </div>
          </div>

          {/* Right: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">

            {/* Каталог продукції */}
            <div>
              <p className="text-base font-medium text-white mb-5">Каталог продукції</p>
              <ul className="space-y-3">
                {catalogLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Електронні пошти */}
            <div>
              <p className="text-base font-medium text-white mb-5">Електронні пошти</p>
              <ul className="space-y-3">
                {emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                      <MailIcon />
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контакти */}
            <div>
              <p className="text-base font-medium text-white mb-5">Контакти</p>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+380673008201"
                    className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <PhoneIcon />
                    +380 67 300 82 01
                  </a>
                </li>
                <li>
                  <a href="mailto:info@actu.com.ua"
                    className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <MailIcon />
                    info@actu.com.ua
                  </a>
                </li>
                <li>
                  <a href="#"
                    className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <MapPinIcon />
                    Львівська обл., Стрийський р-н, с.Тростянець, вул. Зелена, 3Г
                  </a>
                </li>
                <li>
                  <a href="#"
                    className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <ClockIcon />
                    Понеділок-субота з 9:00 до 18:00
                  </a>
                </li>
              </ul>
            </div>

            {/* Допомога */}
            <div>
              <p className="text-base font-medium text-white mb-5">Допомога</p>
              <ul className="space-y-3">
                {helpLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">Copyright © 2026 ACTU. All Rights Reserved.</p>
          <Link href="/pravyla-korystuvannya-veb-sajtom" className="text-xs text-gray-500 hover:text-white transition-colors">
            Правила користування веб-сайтом
          </Link>
        </div>
      </div>
    </footer>
  );
}
