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
    videos: ["https://rutube.ru/play/embed/2fb26462ce4aec93f8c07be69d43e5df/?&utm_source=embed&utm_medium=referral&utm_campaign=logo&utm_content=2fb26462ce4aec93f8c07be69d43e5df&utm_term=yastatic.net%2F&referrer=appmetrica_tracking_id%3D1037600761300671389%26ym_tracking_id%3D314569153086888243"],
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
    videos: ["https://rutube.ru/play/embed/bfe5300a1c7fd18b2052f5476743b9df/?r=wd"],
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
    videos: ["https://rutube.ru/play/embed/22ee3b0d11cb4139081b004f1fe9f15c/?r=wd/"],
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
        "https://cdnn21.img.ria.ru/images/155894/06/1558940638_0:34:2189:1265_650x0_80_0_0_37af37bd6fedf74962a1c1128782398f.jpg.webp",
        "https://sun9-15.userapi.com/impg/b2FrMi7M2Or6ezne9z10BRjJwdDyPea-SpcrQA/OQhhgjUqXE8.jpg?size=604x364&quality=96&sign=aed071e0ee66355904f142a82a23ef0a&type=album"
      ],
      "videos": ["https://rutube.ru/play/embed/34efe4ee8f9c7d8dbf8c392709a373d5/?r=wd"]
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
        "https://api.rbsmi.ru/attachments/c621465fbecb5eb5f9aa4bc0c2ea04c129952064/store/crop/0/0/987/654/1600/0/0/a61dab5fcf0f0a208b8ae04360516bf1ef9785ec196d72a51fde12de0e19/f661f3ace2b54ca8c3bc542488a63391.jpg",
        "https://alipuff.ru/wp-content/uploads/3/9/d/39d6bac26bab2ca28ac35e35523a7b6a.jpeg"
      ],
      "videos": ["https://rutube.ru/play/embed/7924dc9fe511fdd263a3e9dfac13deee/?r=wd"]
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
        "https://cdn.culture.ru/images/682f1b4a-97f3-5e4f-bf67-b2d8e5d4e819",
        "https://files.kick.com/images/channel/31064557/banner_image/ec9926d4-8364-4574-bf25-5a0f13d62bfa"
      ],
      "videos": ["https://rutube.ru/play/embed/286ab1b05582af4e5f1417b1a740b5d8/?r=wd"]
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
        "https://avatars.mds.yandex.net/i?id=8ba151871b6259a3903ce0995af6832d_l-10782253-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=f75cd713eb7c4a047b5dc52df7462eaf_l-9100078-images-thumbs&n=13"
      ],
      "videos": ["https://rutube.ru/play/embed/f8c85e342ac9be8618c6e335da25056e/?r=wd"]
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
        "https://cdn-media.tass.ru/width/1200_4ce85301/tass/m2/uploads/i/20190830/5152998.png",
        "https://sun9-22.userapi.com/s/v1/ig2/ttOlX4FI32ld0EXtfahfMqNyoPUBEHKtAvYRUfV4Bf56aeCwulPb7MMK7HDDMmpxKU6D4sCHx7K7Kqws8w9GEC64.jpg?quality=96&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,640x800,720x900,1080x1350&from=bu&u=y3TKn_Ov7SDV4yRMlm0JqNti81dntymCGejF2fM0nUE&cs=646x807"
      ],
      "videos": ["https://rutube.ru/play/embed/e89e3d1c7d494a3f49792924d9e10c40/?r=wd"]
    }
  ]