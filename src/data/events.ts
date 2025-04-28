import { HistoricalEvent } from "../types";

export const events: HistoricalEvent[] = [
  {
    id: "e1",
    title: "Призвание варягов",
    date: "862 год",
    year: 862,
    description: "Легендарное призвание варягов во главе с Рюриком на княжение в Новгород, традиционно считающееся точкой отсчёта российской государственности.",
    category: "political",
    location: {
      lat: 58.5213,
      lon: 31.2718
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/sixty-seven/Varangians.jpg/300px-Varangians.jpg"]
  },
  {
    id: "e2",
    title: "Крещение Руси",
    date: "988 год",
    year: 988,
    description: "Крещение Руси — введение христианства как государственной религии в Древней Руси князем Владимиром Святославичем.",
    category: "cultural",
    location: {
      lat: 50.4547,
      lon: 30.5238
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/eight/Baptism_of_Kievans.jpg/300px-Baptism_of_Kievans.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/forty-seven/Christian_Rus.jpg/300px-Christian_Rus.jpg"
    ],
    videos: ["https://www.youtube.com/embed/yNSqXZ6x4d4"]
  },
  {
    id: "e3",
    title: "Невская битва",
    date: "15 июля 1240",
    year: 1240,
    description: "Сражение между новгородским войском под командованием князя Александра Ярославича и шведским войском на реке Неве.",
    category: "battle",
    location: {
      lat: 59.9343,
      lon: 30.3351
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/ninety-nine/Alexander_Nevsky_Battle.jpg/300px-Alexander_Nevsky_Battle.jpg"
    ],
    videos: ["https://www.youtube.com/embed/fifty-seven-DH8bLh4"]
  },
  {
    id: "e4",
    title: "Ледовое побоище",
    date: "5 апреля 1242",
    year: 1242,
    description: "Битва на Чудском озере между русским войском под предводительством Александра Невского и рыцарями Ливонского ордена.",
    category: "battle",
    location: {
      lat: 58.7514,
      lon: 27.4544
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/ninety-nine/Battle_on_the_Ice.jpg/300px-Battle_on_the_Ice.jpg"
    ],
    videos: ["https://www.youtube.com/embed/rMnev7FUx"]
  },
  {
    id: "1",
    title: "Куликовская битва",
    date: "8 сентября 1380",
    year: 1380,
    description: "Крупное сражение между объединённым русским войском под командованием князя Дмитрия Донского и войском правителя части Золотой Орды Мамая.",
    category: "battle",
    location: {
      lat: 53.628405,
      lon: 38.678385
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Bataille_de_Koulikovo.jpg/1200px-Bataille_de_Koulikovo.jpg",
      "https://cdn.culture.ru/images/9ae0f771-7c96-5fb3-9ce2-cf5c3c037d61"
    ],
    videos: ["https://www.youtube.com/embed/iBGkDMd9boA"]
  },
  {
    id: "2",
    title: "Отечественная война 1812 года",
    date: "12 июня 1812 - 14 декабря 1812",
    year: 1812,
    description: "Война между Российской и Французской империями на территории России. Завершилась почти полным уничтожением наполеоновской армии.",
    category: "battle",
    location: {
      lat: 55.751244,
      lon: 37.618423
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Battle_of_Borodino_1812.png/1200px-Battle_of_Borodino_1812.png",
      "https://cdn.culture.ru/images/680f2ddc-7552-5c5e-9e3f-a536f42e9a9e"
    ],
    videos: ["https://www.youtube.com/embed/Y-oa5ANV9QY"]
  },
  {
    id: "3",
    title: "Октябрьская революция",
    date: "7 ноября 1917",
    year: 1917,
    description: "Вооружённое восстание под руководством партии большевиков, в результате которого в России была установлена советская власть.",
    category: "political",
    location: {
      lat: 59.9342802,
      lon: 30.3350986
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kustodiev_The_Bolshevik.jpg/1200px-Kustodiev_The_Bolshevik.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Storming_the_Winter_Palace_1920.jpg"
    ],
    videos: ["https://www.youtube.com/embed/YVuf3T3k-W0"]
  },
  {
    id: "4",
    title: "Великая Отечественная война",
    date: "22 июня 1941 - 9 мая 1945",
    year: 1941,
    description: "Война Советского Союза против нацистской Германии и её европейских союзников. Важнейшая составная часть Второй мировой войны.",
    category: "battle",
    location: {
      lat: 55.7522,
      lon: 37.6156
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Reichstag_after_capture_by_Allies.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Soviet_flag_on_the_Reichstag_roof_Khaldei_edit.jpg"
    ],
    videos: ["https://www.youtube.com/embed/-ewKX5n40_Y"]
  },
  {
    id: "5",
    title: "Полёт Юрия Гагарина",
    date: "12 апреля 1961",
    year: 1961,
    description: "Первый полёт человека в космическое пространство. Осуществлён на космическом корабле 'Восток' гражданином СССР Юрием Гагариным.",
    category: "cultural",
    location: {
      lat: 51.2833,
      lon: 45.6167
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Gagarin_space_suite.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/RIAN_archive_612748_Valentina_Tereshkova.jpg/220px-RIAN_archive_612748_Valentina_Tereshkova.jpg"
    ],
    videos: ["https://www.youtube.com/embed/9CfHBJPAomI"]
  }
];
