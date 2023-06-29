interface IBanksData {
  results: IBank[];
  context: {
    geo_bounds: {
      circle: {
        center: {
          latitude: number;
          longitude: number;
        };
        radius: number;
      };
    };
  };
}

export interface IBank {
  fsq_id: string;
  categories: IBankCategories[];
  chains: [];
  distance: number;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
  };
  link: string;
  location: {
    address?: string;
    country?: string;
    cross_street?: string;
    formatted_address?: string;
    postcode?: string;
    locality?: string;
    region?: string;
  };
  name: string;
  related_places: {};
  timezone: string;
}

interface IBankCategories {
  id: number;
  name: string;
  icon: {
    prefix: string;
    suffix: string;
  };
}

export const banks: IBanksData = {
  results: [
    {
      fsq_id: '4f5de548e4b008b15884e83b',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3661,
      geocodes: {
        main: {
          latitude: 53.923625,
          longitude: 27.605674,
        },
      },
      link: '/v3/places/4f5de548e4b008b15884e83b',
      location: {
        address: 'Проспект Независимости, 87а',
        country: 'BY',
        formatted_address: 'Проспект Независимости, 87а, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Белорусский Народный Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4cda97d6930af04deca98597',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2092,
      geocodes: {
        main: {
          latitude: 53.910743,
          longitude: 27.540416,
        },
      },
      link: '/v3/places/4cda97d6930af04deca98597',
      location: {
        address: 'просп. Победителей, 23 корп. 3',
        country: 'BY',
        cross_street: 'ул. Заславская',
        formatted_address:
          'просп. Победителей, 23 корп. 3 (ул. Заславская), Мінск, 220004',
        locality: 'Minsk',
        postcode: '220004',
        region: 'Minsk',
      },
      name: 'BSB Bank',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4ea6d0e79a524accd1b77ee8',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1464,
      geocodes: {
        main: {
          latitude: 53.912819,
          longitude: 27.571884,
        },
      },
      link: '/v3/places/4ea6d0e79a524accd1b77ee8',
      location: {
        address: 'Красная ул., 7',
        country: 'BY',
        cross_street: 'Киселева',
        formatted_address: 'Красная ул., 7 (Киселева), Мінск, 220029',
        locality: 'Minsk',
        postcode: '220029',
        region: 'Minsk',
      },
      name: 'Альфа-Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4c8f55c3d2aea093fc5bd569',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 5332,
      geocodes: {
        main: {
          latitude: 53.891498,
          longitude: 27.646814,
        },
      },
      link: '/v3/places/4c8f55c3d2aea093fc5bd569',
      location: {
        address: 'ул. Радиальная, 38А',
        country: 'BY',
        cross_street: '',
        formatted_address: 'ул. Радиальная, 38А, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'ПриорБанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4f474773e4b0e7e90d40b8f4',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1100,
      geocodes: {
        main: {
          latitude: 53.898384,
          longitude: 27.55008,
        },
      },
      link: '/v3/places/4f474773e4b0e7e90d40b8f4',
      location: {
        address: 'ул. Володарского, 4',
        country: 'BY',
        cross_street: 'ул. Берсона',
        formatted_address: 'ул. Володарского, 4 (ул. Берсона), Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Технобанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4ea938cbf5b9df961091a128',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
        {
          id: 11044,
          name: 'ATM',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 4790,
      geocodes: {
        main: {
          latitude: 53.862908,
          longitude: 27.60395,
        },
      },
      link: '/v3/places/4ea938cbf5b9df961091a128',
      location: {
        address: 'проспект Рокоссовского, 80',
        country: 'BY',
        cross_street: '',
        formatted_address: 'проспект Рокоссовского, 80, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'ПриорБанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4fd6da4ae4b0ac0b1e6f4ff3',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 6607,
      geocodes: {
        main: {
          latitude: 53.843005,
          longitude: 27.537953,
        },
      },
      link: '/v3/places/4fd6da4ae4b0ac0b1e6f4ff3',
      location: {
        address: 'пер. Асаналиева, 2/3',
        country: 'BY',
        cross_street: '',
        formatted_address: 'пер. Асаналиева, 2/3, Мінск, 220024',
        locality: 'Minsk',
        postcode: '220024',
        region: 'Minsk',
      },
      name: 'ОАО Банк БелВЭБ Минское Отделение 3',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '516d30bee4b0d2a180ea3ac7',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3995,
      geocodes: {
        main: {
          latitude: 53.934839,
          longitude: 27.58179,
        },
      },
      link: '/v3/places/516d30bee4b0d2a180ea3ac7',
      location: {
        address: 'ул. Богдановича, 116',
        country: 'BY',
        cross_street: '',
        formatted_address: 'ул. Богдановича, 116, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Белгазпромбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4cfdec06d8468cfabff6026c',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2520,
      geocodes: {
        main: {
          latitude: 53.922159,
          longitude: 27.558436,
        },
      },
      link: '/v3/places/4cfdec06d8468cfabff6026c',
      location: {
        address: 'ул. Кропоткина, 91',
        country: 'BY',
        cross_street: 'ул. Кропоткина',
        formatted_address: 'ул. Кропоткина, 91 (ул. Кропоткина), Мінск, 220002',
        locality: 'Minsk',
        postcode: '220002',
        region: 'Minsk',
      },
      name: 'Приорбанк ЦБУ 115',
      related_places: {
        children: [
          {
            fsq_id: '512c88c7e4b05907b7ad7803',
            name: 'Столовая Приорбанк',
          },
        ],
      },
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '5305c951498ed4066332f17f',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3357,
      geocodes: {
        main: {
          latitude: 53.926938,
          longitude: 27.589888,
        },
      },
      link: '/v3/places/5305c951498ed4066332f17f',
      location: {
        address: 'Сурганова 43',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Сурганова 43',
      },
      name: 'Альфа-Банк. Центральный офис',
      related_places: {
        parent: {
          fsq_id: '52398bf311d29fe75c48aecc',
          name: 'Бизнес-центр «СОЛО»',
        },
        children: [
          {
            fsq_id: '5b193a5135d3fc002c5481f9',
            name: 'YUMMY',
          },
        ],
      },
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4e8adfd1cc215b0368311ff3',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1255,
      geocodes: {
        main: {
          latitude: 53.90172,
          longitude: 27.547712,
        },
      },
      link: '/v3/places/4e8adfd1cc215b0368311ff3',
      location: {
        address: 'ул. Немига, 30',
        country: 'BY',
        formatted_address: 'ул. Немига, 30, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'ПриорБанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4db67b1c6a23c31a033f912a',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1805,
      geocodes: {
        main: {
          latitude: 53.913989,
          longitude: 27.552654,
        },
      },
      link: '/v3/places/4db67b1c6a23c31a033f912a',
      location: {
        address: 'Коммунистическая ул., 49',
        country: 'BY',
        formatted_address: 'Коммунистическая ул., 49, Мінск, 220002',
        locality: 'Minsk',
        postcode: '220002',
        region: 'Minsk',
      },
      name: 'Банк Дабрабыт',
      related_places: {
        children: [],
      },
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4ef333fc82310969a90d8360',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3107,
      geocodes: {
        main: {
          latitude: 53.895403,
          longitude: 27.519862,
        },
      },
      link: '/v3/places/4ef333fc82310969a90d8360',
      location: {
        address: 'улица Коржа, 11А',
        country: 'BY',
        cross_street: '',
        formatted_address: 'улица Коржа, 11А, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Белинвестбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '62de835be10ab8135b48234d',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 566,
      geocodes: {
        main: {
          latitude: 53.904847,
          longitude: 27.569351,
        },
      },
      link: '/v3/places/62de835be10ab8135b48234d',
      location: {
        address: 'Проспект Независимости 32А',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Проспект Независимости 32А, Мінск, 220034',
        locality: 'Minsk',
        postcode: '220034',
        region: 'Minsk',
      },
      name: 'Сбер Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '522f04b411d2f2b792ec0f21',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 729,
      geocodes: {
        main: {
          latitude: 53.905378,
          longitude: 27.560286,
        },
      },
      link: '/v3/places/522f04b411d2f2b792ec0f21',
      location: {
        address: 'Энгельса',
        country: 'BY',
        cross_street: 'Пр-т Независимости',
        formatted_address: 'Энгельса (Пр-т Независимости), Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'БПС-Сбербанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '500eae7ee4b07f8ff6345e36',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 962,
      geocodes: {
        main: {
          latitude: 53.902293,
          longitude: 27.5525,
        },
      },
      link: '/v3/places/500eae7ee4b07f8ff6345e36',
      location: {
        address: 'Комсомольская улица, 13',
        country: 'BY',
        cross_street: 'ул. Интернациональная',
        formatted_address: 'Комсомольская улица, 13 (ул. Интернациональная), Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'ПриорБанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '51e5650c498eb68b1b94eb55',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1118,
      geocodes: {
        main: {
          latitude: 53.902626,
          longitude: 27.550171,
        },
      },
      link: '/v3/places/51e5650c498eb68b1b94eb55',
      location: {
        address: 'немига',
        country: 'BY',
        cross_street: '',
        formatted_address: 'немига, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'БНБ обменный пункт',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '50865730e4b0145988a9d13c',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1211,
      geocodes: {
        main: {
          latitude: 53.909369,
          longitude: 27.576128,
        },
      },
      link: '/v3/places/50865730e4b0145988a9d13c',
      location: {
        address: 'просп. Независимости, 40',
        country: 'BY',
        cross_street: '',
        formatted_address: 'просп. Независимости, 40, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Хоум Кредит Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4f605ca1e4b071906c1f5014',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 4463,
      geocodes: {
        main: {
          latitude: 53.92321,
          longitude: 27.511014,
        },
      },
      link: '/v3/places/4f605ca1e4b071906c1f5014',
      location: {
        address: 'ул. Тимирязева, 65А',
        country: 'BY',
        cross_street: '',
        formatted_address: 'ул. Тимирязева, 65А, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'ПриорБанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '60c213694650b14bd331c832',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1299,
      geocodes: {
        main: {
          latitude: 53.907122,
          longitude: 27.550928,
        },
      },
      link: '/v3/places/60c213694650b14bd331c832',
      location: {
        address: 'Проспект Победителей, 5/2',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Проспект Победителей, 5/2, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Альфа-Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '515ee659e4b04e50b05db307',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1405,
      geocodes: {
        main: {
          latitude: 53.892466,
          longitude: 27.54943,
        },
      },
      link: '/v3/places/515ee659e4b04e50b05db307',
      location: {
        address: 'ул. Ленинградская, 4',
        country: 'BY',
        cross_street: '',
        formatted_address: 'ул. Ленинградская, 4, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Home Credit Bank',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4f8be8dce4b0ab5c8a28d5a9',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1665,
      geocodes: {
        main: {
          latitude: 53.906259,
          longitude: 27.589791,
        },
      },
      link: '/v3/places/4f8be8dce4b0ab5c8a28d5a9',
      location: {
        country: 'BY',
        cross_street: '',
        formatted_address: '',
      },
      name: 'БПС-Сбербанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '5050a48be4b09d3811b0b484',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1707,
      geocodes: {
        main: {
          latitude: 53.906324,
          longitude: 27.5429,
        },
      },
      link: '/v3/places/5050a48be4b09d3811b0b484',
      location: {
        address: 'ул. Мельникайте',
        country: 'BY',
        cross_street: '',
        formatted_address: 'ул. Мельникайте, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Беларусбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4e566e017d8b60849c4eeef5',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1914,
      geocodes: {
        main: {
          latitude: 53.88981,
          longitude: 27.543092,
        },
      },
      link: '/v3/places/4e566e017d8b60849c4eeef5',
      location: {
        address: 'ул. Толстого, 4',
        country: 'BY',
        cross_street: '',
        formatted_address: 'ул. Толстого, 4, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Беларусбанк 527/87',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4f6c56c3e4b05c9c29bdbf11',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2029,
      geocodes: {
        main: {
          latitude: 53.915272,
          longitude: 27.583679,
        },
      },
      link: '/v3/places/4f6c56c3e4b05c9c29bdbf11',
      location: {
        country: 'BY',
        cross_street: '',
        formatted_address: '',
      },
      name: 'Credex Bank',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '51ee35cd498e2adce4275acc',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2136,
      geocodes: {
        main: {
          latitude: 53.912153,
          longitude: 27.541379,
        },
      },
      link: '/v3/places/51ee35cd498e2adce4275acc',
      location: {
        address: 'Пр. Победителей, 29',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Пр. Победителей, 29, Мінск, 220004',
        locality: 'Minsk',
        postcode: '220004',
        region: 'Minsk',
      },
      name: 'ОАО "Банк БелВЭБ"',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4e6890c9b61c7d64797064ad',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3338,
      geocodes: {
        main: {
          latitude: 53.926487,
          longitude: 27.590749,
        },
      },
      link: '/v3/places/4e6890c9b61c7d64797064ad',
      location: {
        address: 'ул. Сурганова, 41',
        country: 'BY',
        formatted_address: 'ул. Сурганова, 41, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'ПриорБанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4e3fa9de8877b00cfc6392e0',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2718,
      geocodes: {
        main: {
          latitude: 53.912337,
          longitude: 27.530811,
        },
      },
      link: '/v3/places/4e3fa9de8877b00cfc6392e0',
      location: {
        address: 'просп. Машерова, 80',
        country: 'BY',
        formatted_address: 'просп. Машерова, 80, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'БПС-Сбербанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '5044a00be4b06a6d9faae7f1',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 424,
      geocodes: {
        main: {
          latitude: 53.899382,
          longitude: 27.560272,
        },
      },
      link: '/v3/places/5044a00be4b06a6d9faae7f1',
      location: {
        address: 'улица Карла Маркса, 33',
        country: 'BY',
        cross_street: '',
        formatted_address: 'улица Карла Маркса, 33, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Белинвестбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4dce670ae4cd130e16656a68',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2046,
      geocodes: {
        main: {
          latitude: 53.917399,
          longitude: 27.556412,
        },
      },
      link: '/v3/places/4dce670ae4cd130e16656a68',
      location: {
        address: 'просп. Машерова, 29',
        country: 'BY',
        cross_street: '',
        formatted_address: 'просп. Машерова, 29, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Белинвестбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4e6f288845dd49e0f1a6908f',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2185,
      geocodes: {
        main: {
          latitude: 53.88879,
          longitude: 27.53925,
        },
      },
      link: '/v3/places/4e6f288845dd49e0f1a6908f',
      location: {
        address: 'ул. Московская, 14',
        country: 'BY',
        formatted_address: 'ул. Московская, 14, Мінск, 220007',
        locality: 'Minsk',
        postcode: '220007',
        region: 'Minsk',
      },
      name: 'ВТБ Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4ee5d7735c5cfa48fbb73e7b',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2547,
      geocodes: {
        main: {
          latitude: 53.883803,
          longitude: 27.594204,
        },
      },
      link: '/v3/places/4ee5d7735c5cfa48fbb73e7b',
      location: {
        address: 'Партизанский просп., 23а',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Партизанский просп., 23а, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Беларусбанк 511/211',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4fd20bcae4b0d64ed8419da7',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2771,
      geocodes: {
        main: {
          latitude: 53.92367,
          longitude: 27.580017,
        },
      },
      link: '/v3/places/4fd20bcae4b0d64ed8419da7',
      location: {
        address: 'ул. Куйбышева, 75',
        country: 'BY',
        cross_street: '',
        formatted_address: 'ул. Куйбышева, 75, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Беларусбанк 514/312',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4d5b8c18342f6dcb74a38fe7',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1797,
      geocodes: {
        main: {
          latitude: 53.907822,
          longitude: 27.590694,
        },
      },
      link: '/v3/places/4d5b8c18342f6dcb74a38fe7',
      location: {
        address: 'Краснозвёздная улица, 18',
        country: 'BY',
        cross_street: 'ул. Платонова',
        formatted_address: 'Краснозвёздная улица, 18 (ул. Платонова), Минск, 220034',
        locality: 'Минск',
        postcode: '220034',
        region: 'Minskaja Voblasts’',
      },
      name: 'РРБ-Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4eae8670490170218cba10fe',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2872,
      geocodes: {
        main: {
          latitude: 53.912941,
          longitude: 27.604651,
        },
      },
      link: '/v3/places/4eae8670490170218cba10fe',
      location: {
        address: 'Академическая ул., 20',
        country: 'BY',
        formatted_address: 'Академическая ул., 20, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Белинвестбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4ddb7cbafa7637ab73db6852',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2377,
      geocodes: {
        main: {
          latitude: 53.921386,
          longitude: 27.567483,
        },
      },
      link: '/v3/places/4ddb7cbafa7637ab73db6852',
      location: {
        address: 'ул. Веры Хоружей, 20',
        country: 'BY',
        formatted_address: 'ул. Веры Хоружей, 20, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'БТА Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4dbd3b904df044e524f6f98b',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1936,
      geocodes: {
        main: {
          latitude: 53.917257,
          longitude: 27.562553,
        },
      },
      link: '/v3/places/4dbd3b904df044e524f6f98b',
      location: {
        address: 'проспект Машерова, 40',
        country: 'BY',
        cross_street: 'ул. Максима Богдановича',
        formatted_address:
          'проспект Машерова, 40 (ул. Максима Богдановича), Мінск, 220123',
        locality: 'Minsk',
        postcode: '220123',
        region: 'Minsk',
      },
      name: 'ПриорБанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '5bf7f414419a9e002c58f8d6',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3038,
      geocodes: {
        main: {
          latitude: 53.927336,
          longitude: 27.567935,
        },
      },
      link: '/v3/places/5bf7f414419a9e002c58f8d6',
      location: {
        address: 'Кульман 21Б',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Кульман 21Б, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Технобанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '51650f75e4b0c32fbfc4b208',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 5046,
      geocodes: {
        main: {
          latitude: 53.921223,
          longitude: 27.498518,
        },
      },
      link: '/v3/places/51650f75e4b0c32fbfc4b208',
      location: {
        address: 'проспект Пушкина, 81-2н',
        country: 'BY',
        cross_street: '',
        formatted_address: 'проспект Пушкина, 81-2н, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Белинвестбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4def43711f6e6d35417bed70',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 5383,
      geocodes: {
        main: {
          latitude: 53.941806,
          longitude: 27.608242,
        },
      },
      link: '/v3/places/4def43711f6e6d35417bed70',
      location: {
        address: 'Логойский тракт, 10',
        country: 'BY',
        cross_street: 'ул. Севастопольская',
        formatted_address: 'Логойский тракт, 10 (ул. Севастопольская), Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Альфа-Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '51e6770e498e58cde83d479e',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3453,
      geocodes: {
        main: {
          latitude: 53.926716,
          longitude: 27.593615,
        },
      },
      link: '/v3/places/51e6770e498e58cde83d479e',
      location: {
        address: 'ул. Якуба Коласа, 37',
        country: 'BY',
        cross_street: '',
        formatted_address: 'ул. Якуба Коласа, 37, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Хоум кредит банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '51320b1fe4b01507e8531d11',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 5251,
      geocodes: {
        main: {
          latitude: 53.875376,
          longitude: 27.498238,
        },
      },
      link: '/v3/places/51320b1fe4b01507e8531d11',
      location: {
        address: 'ТЦ «Globo»',
        country: 'BY',
        cross_street: 'Уманская ул., 54',
        formatted_address: 'ТЦ «Globo» (Уманская ул., 54), Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'МТБанк',
      related_places: {
        parent: {
          fsq_id: '50e1dd73e4b0a2f21936685f',
          name: 'ТЦ «Globo»',
        },
      },
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4fbd043de4b015d267b83784',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3507,
      geocodes: {
        main: {
          latitude: 53.872087,
          longitude: 27.591655,
        },
      },
      link: '/v3/places/4fbd043de4b015d267b83784',
      location: {
        address: '2-й Велосипедный пер., 30',
        country: 'BY',
        formatted_address: '2-й Велосипедный пер., 30, Мінск, 220094',
        locality: 'Minsk',
        postcode: '220094',
        region: 'Minsk',
      },
      name: 'Белагропромбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4ed72c3582311e04d1f9a574',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 1316,
      geocodes: {
        main: {
          latitude: 53.891262,
          longitude: 27.553088,
        },
      },
      link: '/v3/places/4ed72c3582311e04d1f9a574',
      location: {
        address: 'Бобруйская ул., 15',
        country: 'BY',
        formatted_address: 'Бобруйская ул., 15, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'МТБанк, ЦБУ №6',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '620a648d62772015da406f00',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3638,
      geocodes: {
        main: {
          latitude: 53.869368,
          longitude: 27.547067,
        },
      },
      link: '/v3/places/620a648d62772015da406f00',
      location: {
        address: 'проспект Мира, 6',
        country: 'BY',
        cross_street: '',
        formatted_address: 'проспект Мира, 6, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Priorbank',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4fabcbe8e4b07dbb597c554b',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 4009,
      geocodes: {
        main: {
          latitude: 53.924063,
          longitude: 27.612311,
        },
      },
      link: '/v3/places/4fabcbe8e4b07dbb597c554b',
      location: {
        address: 'пр-т Независимости, 93',
        country: 'BY',
        formatted_address: 'пр-т Независимости, 93, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Альфа-Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '55fbc49e498e3e59b507d245',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3758,
      geocodes: {
        main: {
          latitude: 53.885478,
          longitude: 27.514835,
        },
      },
      link: '/v3/places/55fbc49e498e3e59b507d245',
      location: {
        address: 'Ул. Щорса, 11',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Ул. Щорса, 11, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Абсолютбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4fd70b1ce4b03d9254274aaa',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 4003,
      geocodes: {
        main: {
          latitude: 53.908301,
          longitude: 27.62617,
        },
      },
      link: '/v3/places/4fd70b1ce4b03d9254274aaa',
      location: {
        address: '2-й пер. Багратиона, 20',
        country: 'BY',
        cross_street: '',
        formatted_address: '2-й пер. Багратиона, 20, Мінск, 220037',
        locality: 'Minsk',
        postcode: '220037',
        region: 'Minsk',
      },
      name: 'Беларусбанк 511/212',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '63f0f0475e1b3614a788e945',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 4287,
      geocodes: {
        main: {
          latitude: 53.926132,
          longitude: 27.518478,
        },
      },
      link: '/v3/places/63f0f0475e1b3614a788e945',
      location: {
        country: 'BY',
        cross_street: '',
        formatted_address: 'Мінск, 220035',
        locality: 'Minsk',
        postcode: '220035',
        region: 'Minsk',
      },
      name: 'бнб',
      related_places: {
        parent: {
          fsq_id: '50754cf8e4b05c138b1119a0',
          name: 'ТЦ «Замок»',
        },
      },
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '5977604d1c0b3416c43d699a',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 4298,
      geocodes: {
        main: {
          latitude: 53.861321,
          longitude: 27.566352,
        },
      },
      link: '/v3/places/5977604d1c0b3416c43d699a',
      location: {
        address: 'Авроровская 8',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Авроровская 8, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Беларусбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
  ],
  context: {
    geo_bounds: {
      circle: {
        center: {
          latitude: 53.9,
          longitude: 27.56667,
        },
        radius: 7128,
      },
    },
  },
};
