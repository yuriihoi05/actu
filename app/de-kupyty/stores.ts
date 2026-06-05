export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  region: string;
  lat: number;
  lng: number;
}

export interface Region {
  id: string;
  name: string;
  center: [number, number];
  zoom: number;
}

export const regions: Region[] = [
  { id: "kyiv",       name: "Київська область",          center: [50.45, 30.52],  zoom: 11 },
  { id: "lviv",       name: "Львівська область",          center: [49.84, 24.03],  zoom: 11 },
  { id: "kharkiv",   name: "Харківська область",         center: [49.99, 36.23],  zoom: 11 },
  { id: "dnipro",    name: "Дніпропетровська область",   center: [48.46, 35.04],  zoom: 11 },
  { id: "odesa",     name: "Одеська область",            center: [46.48, 30.72],  zoom: 11 },
  { id: "zaporizhia",name: "Запорізька область",         center: [47.83, 35.14],  zoom: 11 },
  { id: "vinnytsia", name: "Вінницька область",          center: [49.23, 28.47],  zoom: 11 },
  { id: "poltava",   name: "Полтавська область",         center: [49.59, 34.55],  zoom: 11 },
];

export const stores: Store[] = [
  // Київська
  { id: "k1", region: "kyiv",    name: "Епіцентр К (Бориспільська)",   address: "вул. Бориспільська, 9, Київ",            phone: "+380 800 300 500", lat: 50.412, lng: 30.656 },
  { id: "k2", region: "kyiv",    name: "Епіцентр К (Позняки)",          address: "просп. Бажана, 8, Київ",                 phone: "+380 800 300 500", lat: 50.393, lng: 30.617 },
  { id: "k3", region: "kyiv",    name: "Нова Лінія (Столичне шосе)",    address: "Столичне шосе, 103, Київ",               phone: "+380 800 505 070", lat: 50.361, lng: 30.493 },

  // Львівська
  { id: "l1", region: "lviv",    name: "Епіцентр К (Пасічна)",         address: "вул. Пасічна, 169, Львів",               phone: "+380 800 300 500", lat: 49.806, lng: 24.023 },
  { id: "l2", region: "lviv",    name: "Нова Лінія Львів",             address: "вул. Городоцька, 357, Львів",            phone: "+380 800 505 070", lat: 49.847, lng: 23.937 },
  { id: "l3", region: "lviv",    name: "Будівельний двір",             address: "вул. Зелена, 3Г, Тростянець",           phone: "+380 673 008 201", lat: 49.32,  lng: 23.41  },

  // Харківська
  { id: "h1", region: "kharkiv", name: "Епіцентр К (Харків)",          address: "просп. Гагаріна, 187, Харків",           phone: "+380 800 300 500", lat: 49.960, lng: 36.286 },
  { id: "h2", region: "kharkiv", name: "Нова Лінія Харків",            address: "вул. Клочківська, 192, Харків",          phone: "+380 800 505 070", lat: 49.981, lng: 36.194 },

  // Дніпро
  { id: "d1", region: "dnipro",  name: "Епіцентр К (Дніпро)",          address: "вул. Набережна Перемоги, 32, Дніпро",   phone: "+380 800 300 500", lat: 48.467, lng: 34.998 },
  { id: "d2", region: "dnipro",  name: "Нова Лінія Дніпро",            address: "вул. Робоча, 23А, Дніпро",              phone: "+380 800 505 070", lat: 48.481, lng: 35.068 },

  // Одеса
  { id: "o1", region: "odesa",   name: "Епіцентр К (Одеса)",           address: "вул. Аеропортівська, 29, Одеса",         phone: "+380 800 300 500", lat: 46.427, lng: 30.760 },
  { id: "o2", region: "odesa",   name: "Нова Лінія Одеса",             address: "вул. Старосінна пл., 2, Одеса",         phone: "+380 800 505 070", lat: 46.484, lng: 30.724 },

  // Запоріжжя
  { id: "z1", region: "zaporizhia", name: "Епіцентр К (Запоріжжя)",   address: "просп. Соборний, 160, Запоріжжя",        phone: "+380 800 300 500", lat: 47.830, lng: 35.185 },

  // Вінниця
  { id: "v1", region: "vinnytsia", name: "Епіцентр К (Вінниця)",      address: "вул. Хмельницьке шосе, 134, Вінниця",   phone: "+380 800 300 500", lat: 49.218, lng: 28.480 },

  // Полтава
  { id: "p1", region: "poltava", name: "Епіцентр К (Полтава)",         address: "вул. Велика Кільцева, 2, Полтава",      phone: "+380 800 300 500", lat: 49.578, lng: 34.552 },
];
