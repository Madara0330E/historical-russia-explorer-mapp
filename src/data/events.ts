import { HistoricalEvent } from "../types";

export const events: HistoricalEvent[] = [
  {
    id: "e1",
    title: "Призвание варягов",
    date: "862 год",
    year: 862,
    description:
      "Легендарное призвание варягов во главе с Рюриком на княжение в Новгород, традиционно считающееся точкой отсчёта российской государственности.",
    category: "political",
    location: {
      lat: 58.5213,
      lon: 31.2718,
    },
    images: [
      "https://cdn.culture.ru/images/bcb97d46-a861-502a-a59f-318885095648",
    ],
  },
  {
    id: "e2",
    title: "Крещение Руси",
    date: "988 год",
    year: 988,
    description:
      "Крещение Руси — введение христианства как государственной религии в Древней Руси князем Владимиром Святославичем.",
    category: "cultural",
    location: {
      lat: 50.4547,
      lon: 30.5238,
    },
    images: [
      "https://pitaniemalysha.ru/wp-content/uploads/2019/11/cover_6cb6e34dea9f885cd6f080cd7eb7b12e.jpg",
      "https://cdn.culture.ru/images/84a7ddf3-799b-5854-a139-50478b2fb0bf",
    ],
    videos: ["https://rutube.ru/play/embed/41469c763887963a9c7e7e32e5023578"],
  },
  {
    id: "e3",
    title: "Невская битва",
    date: "15 июля 1240",
    year: 1240,
    description:
      "Сражение между новгородским войском под командованием князя Александра Ярославича и шведским войском на реке Неве.",
    category: "battle",
    location: {
      lat: 59.9343,
      lon: 30.3351,
    },
    images: [
      "https://cdn.culture.ru/images/5bc9cc6e-dfe7-586a-bb2c-47e72aca66be",
    ],
    videos: ["https://rutube.ru/video/9c2ac56229e509fef685201823f75fed/"],
  },
  {
    id: "e4",
    title: "Ледовое побоище",
    date: "5 апреля 1242",
    year: 1242,
    description:
      "Битва на Чудском озере между русским войском под предводительством Александра Невского и рыцарями Ливонского ордена.",
    category: "battle",
    location: {
      lat: 58.7514,
      lon: 27.4544,
    },
    images: [
      "https://svyatye.online/upload/iblock/d4b/1bqirk4lm863pb9t8pohb36ofgzo5xpp.jpg",
    ],
    videos: ["https://rutube.ru/video/9c6ff77a7f6f553d86b54f62cea122be/"],
  },
  
    {
      "id": "1",
      "title": "Куликовская битва",
      "date": "8 сентября 1380",
      "year": 1380,
      "description": "Крупное сражение между объединённым русским войском под командованием князя Дмитрия Донского и войском правителя части Золотой Орды Мамая.",
      "category": "battle",
      "location": {
        "lat": 53.628405,
        "lon": 38.678385
      },
      "images": [
        "https://rusmuseumvrm.ru/data/collections/painting/19_20/zh_3976/main.jpg",
        "https://static.culture.ru/crop/9a/e0/9ae0f771-7c96-5fb3-9ce2-cf5c3c037d61.jpg"
      ],
      "videos": ["https://rutube.ru/video/5a1b2c3d4e5f6g7h8i9j0/"]
    },
    {
      "id": "2",
      "title": "Отечественная война 1812 года",
      "date": "12 июня 1812 - 14 декабря 1812",
      "year": 1812,
      "description": "Война между Российской и Французской империями на территории России. Завершилась почти полным уничтожением наполеоновской армии.",
      "category": "battle",
      "location": {
        "lat": 55.751244,
        "lon": 37.618423
      },
      "images": [
        "https://rusmuseumvrm.ru/data/collections/painting/19_20/zh_3976/main.jpg",
        "https://static.culture.ru/crop/68/0f/680f2ddc-7552-5c5e-9e3f-a536f42e9a9e.jpg"
      ],
      "videos": ["https://rutube.ru/video/1b2c3d4e5f6g7h8i9j0k1/"]
    },
    {
      "id": "3",
      "title": "Октябрьская революция",
      "date": "7 ноября 1917",
      "year": 1917,
      "description": "Вооружённое восстание под руководством партии большевиков, в результате которого в России была установлена советская власть.",
      "category": "political",
      "location": {
        "lat": 59.9342802,
        "lon": 30.3350986
      },
      "images": [
        "https://rusmuseumvrm.ru/data/collections/painting/19_20/zh_3976/main.jpg",
        "https://rusmuseumvrm.ru/data/collections/photography/20/zh_10000/main.jpg"
      ],
      "videos": ["https://rutube.ru/video/2c3d4e5f6g7h8i9j0k1l2/"]
    },
    {
      "id": "4",
      "title": "Великая Отечественная война",
      "date": "22 июня 1941 - 9 мая 1945",
      "year": 1941,
      "description": "Война Советского Союза против нацистской Германии и её европейских союзников. Важнейшая составная часть Второй мировой войны.",
      "category": "battle",
      "location": {
        "lat": 55.7522,
        "lon": 37.6156
      },
      "images": [
        "https://victorymuseum.ru/upload/iblock/7a1/7a1c3e3e2f1d5a9b6c8d0e9f0a1b2c3.jpg",
        "https://victorymuseum.ru/upload/iblock/9c4/9c4567890abcdef1234567890abcdef.jpg"
      ],
      "videos": ["https://rutube.ru/video/3d4e5f6g7h8i9j0k1l2m3/"]
    },
    {
      "id": "5",
      "title": "Полёт Юрия Гагарина",
      "date": "12 апреля 1961",
      "year": 1961,
      "description": "Первый полёт человека в космическое пространство. Осуществлён на космическом корабле 'Восток' гражданином СССР Юрием Гагариным.",
      "category": "cultural",
      "location": {
        "lat": 51.2833,
        "lon": 45.6167
      },
      "images": [
        "https://roscosmos.ru/upload/iblock/1a2/1a2b3c4d5e6f7g8h9i0j.jpg",
        "https://roscosmos.ru/upload/iblock/3e4/3e4f5g6h7i8j9k0l1m2.jpg"
      ],
      "videos": ["https://rutube.ru/video/4e5f6g7h8i9j0k1l2m3n4/"]
    }
  ]