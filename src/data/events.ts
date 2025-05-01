  import { HistoricalEvent } from "../types";

export const events: HistoricalEvent[] = [
  {
    id: "e1",
    title: "Призвание варягов",
    date: "862 год",
    year: 862,
    description:
      "Событие, когда славяне и финно-угры, испытывая внутренние разногласия, пригласили варягов (норманнов) во главе с Рюриком для установления порядка и создания государства, что стало началом династии Рюриковичей.",
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
      "Процесс принятия христианства на территории Киевской Руси, начавшийся с крещения княгини Ольги и завершившийся крещением князя Владимира в 988 году, что стало важным этапом в становлении православной веры и культуры в России.",
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
      "Сражение между войсками Новгородской Республики под предводительством Александра Невского и шведами на реке Неве, в результате которого русские одержали победу и защитили северо-западные земли от шведской агрессии.",
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
      "Сражение на Чудском озере, в котором войска Новгородской Республики под предводительством Александра Невского одержали победу над войсками Тевтонского ордена, остановив его продвижение на Русь",
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
      "description": "Крупное сражение между войсками Дмитрия Донского и войском Золотой Орды под предводительством Мамая, которое стало решающим в борьбе Руси за независимость от Орды.",
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
      "description": "Война России с Наполеоновской Францией, в ходе которой русские войска, при поддержке союзников, разгромили армию Наполеона, заставив его отступить из России.",
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
      "description": "Вооружённый переворот в России, в результате которого к власти пришли большевики во главе с Владимиром Лениным, что привело к созданию Советского Союза.",
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
      "description": "Часть Второй мировой войны, в которой Советский Союз сражался против нацистской Германии и её союзников, одержав победу и обеспечив разгром фашизма.",
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
    },
    {
      "id": "6",
      "title": "Северная война",
      "date": "22 февраля 1700 - 10 сентября 1721 ",
      "year": 1700,
      "description": "Конфликт между Россией и коалицией Швеции, Дании, Саксонии и Речи Посполитой, завершившийся победой России и обретением ею статуса великой европейской державы.",
      "category": "battle",
      "location": {
        "lat": 49.5883,
        "lon": 34.5514
      },
      "images": [ 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Marten%27s_Poltava.jpg/1920px-Marten%27s_Poltava.jpg",
        "https://avatars.dzeninfra.ru/get-zen_doc/1885679/pub_5e7bc920b70dc26b44fc80ee_5e7bd22220c88d0211c240b0/scale_1200"
      ],
      "videos": ["https://rutube.ru/play/embed/00d3e4a93e3af55baeebb91b9c2d8628//?r=wd"]
    },
    {
      "id": "7",
      "title": "Продажа Аляски",
      "date": "30 марта 1867",
      "year": 1867,
      "description": "Прода́жа Аля́ски — сделка между правительствами Российской империи и Соединённых Штатов Америки, в результате которой в 1867 году Россией за 7,2 миллиона долларов были проданы её владения в Северной Америке общей площадью 1 518 800 км².",
      "category": "political",
      "location": {
        "lat": 67.50857,
        "lon": 203.37891 
      },
      "images": [ 
        "https://avatars.mds.yandex.net/i?id=a4213b7ef9866d9c1e31bc16dfd035b99b3b6b8e-4478420-images-thumbs&n=13"
      ],
      "videos": ["https://rutube.ru/play/embed/95405962b674d7b8c30d1527558e1693/?r=wd"]
    },
    {
      "id": "8",
      "title": "Отмена крепостного права в России",
      "date": "30 марта 1867",
      "year": 1867,
      "description": "Отмена крепостного права стала одним из самых важных реформаторских событий в истории России. До 1861 года крепостные крестьяне были юридически привязаны к земле и находились в собственности помещиков — фактически жили в полурабском положении. Александр II, прозванный Царём-освободителем, подписал Манифест об отмене крепостного права и Положение о крестьянах, вышедших из крепостной зависимости.",
      "category": "political",
      "location": {
        "lat": 59.9390,
        "lon": 30.3158 
      },
      "images": [ 
        "https://avatars.mds.yandex.net/i?id=be268b5ccf0b37ec9703fb57046cb5a0_l-5234668-images-thumbs&n=13"
      ],
      "videos": ["https://rutube.ru/play/embed/4f9c9acf62981aa3712e2eb28d5913b6/?r=wd"]
    },
    {
      "id": "8",
      "title": "Монгольское нашествие на Русь",
      "date": "1237—1241",
      "year": 1237,
      "description": "Первое монгольское нашествие на Русь началось в 1237 году, когда монголы, возглавляемые ханом Батые, вторглись на территорию Руси. Нашествие было частью более масштабных завоеваний, которые велись монголами под предводительством хана Чингисхана и его потомков. Основные события первого нашествия происходили на территории современных России и Украины.",
      "category": "battle",
      "location": {
        "lat": 54.6291,
        "lon": 39.7180
      },
      "images": [ 
        "https://avatars.mds.yandex.net/i?id=9c59145bd73d096b29329355f4ca8684_l-4944748-images-thumbs&n=13"
      ],
      "videos": ["https://rutube.ru/play/embed/9d357b722ea35be65a595610313a8d87/?r=wd"]
    },
    {
      "id": "9",
      "title": "Присоедиения Крыма",
      "date": "2014",
      "year": 2014,
      "description": "Присоединение Крыма к России после проведённого референдума.",
      "category": "political",
      "location": {
        "lat": 45.59867,
        "lon": 33.92578
      },
      "images": [ 
        "https://directory.spb.ru/wp-content/uploads/2023/03/%D0%9A%D1%80%D1%8B%D0%BC-1-600x384.jpg"
      ],
      "videos": ["https://rutube.ru/play/embed/e15e50a1b4e741767649c29ba1e81061/?r=wd"]
    }
  ]