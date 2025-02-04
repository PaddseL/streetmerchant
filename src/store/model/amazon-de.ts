import {Store} from './store';

export const AmazonDe: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: [
        'geben sie die unten angezeigten zeichen ein',
        'geben sie die zeichen unten ein',
      ],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#add-to-cart-button',
      text: ['in den einkaufswagen'],
    },
    maxPrice: {
      container: '.aok-offscreen',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['derzeit nicht verfügbar'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B07PW9VBK5&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.de/dp/B07PW9VBK5',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN7VVLJ&Quantity.1=1',
      model: 'strix',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HN7VVLJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN6KYS3&Quantity.1=1',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HN6KYS3',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN37VQK&Quantity.1=1',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HN37VQK',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN4DSTC&Quantity.1=1',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HN4DSTC',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGBYWQ6&Quantity.1=1',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HGBYWQ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGYXP4C&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HGYXP4C',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGLN78Q&Quantity.1=1',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HGLN78Q',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HH1BMQQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HJ9XFNM',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHLDS72&Quantity.1=1',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08KHLDS72',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HHZVZ3N&Quantity.1=1',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HHZVZ3N',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HLZXHZY&Quantity.1=1',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HLZXHZY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KH7RL89&Quantity.1=1',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08KH7RL89',
    },
    {
      brand: 'inno3d',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08JD6QPXD&Quantity.1=1',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08JD6QPXD',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HM4V2DH',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HM4M621',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08JCVWTQY&Quantity.1=1',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08JCVWTQY',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08JCKYYL8&Quantity.1=1',
      model: 'gaming pro oc',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08JCKYYL8',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HR1NPPQ&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.de/dp/B08HR1NPPQ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN642LY&Quantity.1=1',
      model: 'strix',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HN642LY',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN51T8Q&Quantity.1=1',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HN51T8Q',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN4FLFJ&Quantity.1=1',
      model: 'tuf',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HN4FLFJ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN5B8FJ&Quantity.1=1',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HN5B8FJ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGFNPJQ&Quantity.1=1',
      model: 'ftw3',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HGFNPJQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08J5NMDP7&Quantity.1=1',
      model: 'ftw3',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08J5NMDP7',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGS1SXH&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HGS1SXH',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGZ4XSZ&Quantity.1=1',
      model: 'xc3',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HGZ4XSZ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGKQ527&Quantity.1=1',
      model: 'xc3 black',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HGKQ527',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGTNDL4&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HGTNDL4',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KH7R4FQ&Quantity.1=1',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08KH7R4FQ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HJPDJTY',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHKDTSJ&Quantity.1=1',
      model: 'turbo',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08KHKDTSJ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HJRF2CN',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HRBW6VB',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HM661YM&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HM661YM',
    },
    {
      brand: 'palit',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08JQQ1VD1&Quantity.1=1',
      model: 'gaming pro',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08JQQ1VD1',
    },
    {
      brand: 'nvidia',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HR6ZBYJ&Quantity.1=1',
      model: 'founders edition',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HR6ZBYJ',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.de/dp/B08HJQ182D',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HSJ1622&Quantity.1=1',
      model: 'dual',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08HSJ1622',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHFZN9P&Quantity.1=1',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08KHFZN9P',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HT7PR9Y&Quantity.1=1',
      model: 'strix',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08HT7PR9Y',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
      model: 'strix oc',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08L8JNTXQ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
      model: 'ventus 2x oc',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08KWPDXJZ',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L6PCZTR&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08L6PCZTR',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
      model: 'gaming x trio',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08KWN2LZG',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08M13DXSZ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHL21CV&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08KHL21CV',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHL2J5X&Quantity.1=1',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08KHL2J5X',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L3QCZKZ&Quantity.1=1',
      model: 'xc3 black',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08L3QCZKZ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L3QZP7W&Quantity.1=1',
      model: 'xc3',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08L3QZP7W',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L3Q41SM&Quantity.1=1',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08L3Q41SM',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HRBR7K9&Quantity.1=1',
      model: 'twin edge',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08HRBR7K9',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08LBVNKT1&Quantity.1=1',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08LBVNKT1',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
      model: 'dual fan',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08HBF5L3K',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
      model: 'xlr8 revel',
      series: '3070',
      url: 'https://www.amazon.de/dp/B08HBJB7YD',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0977DG15L&Quantity.1=1',
      model: 'challenger oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B0977DG15L',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B093Z4BHJH&Quantity.1=1',
      model: 'challenger',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B093Z4BHJH',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08ZDT3Q8H&Quantity.1=1',
      model: 'challenger pro oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08ZDT3Q8H',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08CS6Z8R9&Quantity.1=1',
      model: 'dual',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08CS6Z8R9',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YWRFSQB&Quantity.1=1',
      model: 'dual',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08YWRFSQB/',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08BZP24CH&Quantity.1=1',
      model: 'tuf oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08BZP24CH',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YX8D8ST&Quantity.1=1',
      model: 'tuf oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08YX8D8ST/',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08BZPX64M&Quantity.1=1',
      model: 'strix',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08BZPX64M/',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y74T47X&Quantity.1=1',
      model: 'aorus elite',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Y74T47X/',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y758F6C&Quantity.1=1',
      model: 'eagle',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Y758F6C/',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y746XN7&Quantity.1=1',
      model: 'gaming oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Y746XN7/',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Z72P3R9&Quantity.1=1',
      model: 'gaming x',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Z72P3R9/',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B09318LCPP&Quantity.1=1',
      model: 'gaming x',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B09318LCPP/',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Z84S3K6&Quantity.1=1',
      model: 'mech 2x',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Z84S3K6',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Z8LHVR1&Quantity.1=1',
      model: 'mech 2x oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Z8LHVR1/',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y93KQR4&Quantity.1=1',
      model: 'hellhound',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Y93KQR4/',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B094MM9X6S&Quantity.1=1',
      model: 'hellhound white',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B094MM9X6S/',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y934HZQ&Quantity.1=1',
      model: 'red devil',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Y934HZQ/',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y7K29X9&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Y7K29X9/',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y835PXB&Quantity.1=1',
      model: 'nitro+ oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Y835PXB/',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B094593LB8&Quantity.1=1',
      model: 'nitro+ oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B094593LB8/',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08Y7ZYNDN&Quantity.1=1',
      model: 'nitro+ oc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08Y7ZYNDN/',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YKCRB74&Quantity.1=1',
      model: 'amd reference',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08YKCRB74/',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YK97LKC&Quantity.1=1',
      model: 'merc',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08YK97LKC/',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B091ZKN2RV&Quantity.1=1',
      model: 'qick',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B091ZKN2RV/',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YKFS27X&Quantity.1=1',
      model: 'qick ultra',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08YKFS27X/',
    },
    {
      brand: 'xfx',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08YKCC8XD&Quantity.1=1',
      model: 'swft',
      series: 'rx6700xt',
      url: 'https://www.amazon.de/dp/B08YKCC8XD/',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.de/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.de/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.de/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.de/dp/B0815Y8J9N',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H93ZRK9&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['sony playstation 5'],
        },
      },
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/dp/B08H93ZRK9',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H98GVK8&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['sony playstation 5'],
        },
      },
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/dp/B08H98GVK8',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08H93ZRLL&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series X'],
        },
      },
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.de/dp/B08H93ZRLL',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B087VM5XC6&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series S'],
        },
      },
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.de/dp/B087VM5XC6',
    },
    // {
    //   brand: 'asus',
    //   model: 'astral',
    //   series: '5080',
    //   url: '',
    // },
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5080',
      url: 'https://amzn.to/4hgzRsg'
    },
    {
      brand: 'asus',
      model: 'prime',
      series: '5080',
      url: 'https://amzn.to/3Q05wSN'
    },
    {
      brand: 'asus',
      model: 'prime oc',
      series: '5080',
      url: 'https://amzn.to/4jKyBz0'
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5080',
      url: 'https://amzn.to/4jEDYjy'
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '5080',
      url: 'https://amzn.to/3CGPsCb'
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '5080',
      url: 'https://amzn.to/4aFbceg'
    },
    // {
    //   brand: 'gainward',
    //   model: 'phantom',
    //   series: '5080',
    //   url: '',
    // },
    // {
    //   brand: 'gainward',
    //   model: 'phantom gs',
    //   series: '5080',
    //   url: '',
    // },
    // {
    //   brand: 'gainward',
    //   model: 'phoenix',
    //   series: '5080',
    //   url: '',
    // },
    {
      brand: 'gigabyte',
      model: 'aero oc sff',
      series: '5080',
      url: 'https://amzn.to/3WIMcNr'
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '5080',
      url: 'https://amzn.to/3WHJvM8'
    },
    {
      brand: 'gigabyte',
      model: 'aorus master ice',
      series: '5080',
      url: 'https://amzn.to/40X0L2F'
    },
    {
      brand: 'gigabyte',
      model: 'aorus master ice',
      series: '5080',
      url: 'https://amzn.to/3CmOJGt'
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '5080',
      url: 'https://amzn.to/4grXa0S'
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '5080',
      url: 'https://amzn.to/4aFMDxM'
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '5080',
      url: 'https://amzn.to/3EuBoMC'
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '5080',
      url: 'https://amzn.to/3Q2041Q'
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5080',
      url: 'https://amzn.to/4hvw620'
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5080',
      url: 'https://amzn.to/4gmYvpY'
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5080',
      url: 'https://amzn.to/3Q1eXS4'
    },
    {
      brand: 'gigabyte',
      model: 'windforce sff',
      series: '5080',
      url: 'https://amzn.to/4jJ3Bzt'
    },
    {
      brand: 'gigabyte',
      model: 'windforce oc sff',
      series: '5080',
      url: 'https://amzn.to/40CaLNr'
    },
    {
      brand: 'gigabyte',
      model: 'windforce oc sff',
      series: '5080',
      url: 'https://amzn.to/40JEJiq'
    },
    // {
    //   brand: 'inno3d',
    //   model: 'x3',
    //   series: '5080',
    //   url: '',
    // },
    // {
    //   brand: 'inno3d',
    //   model: 'x3 oc',
    //   series: '5080',
    //   url: '',
    // },
    {
      brand: 'msi',
      model: 'inspire 3x oc',
      series: '5080',
      url: 'https://amzn.to/4gq6HFR'
    },
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://amzn.to/4aOzySX'
    },
    {
      brand: 'msi',
      model: 'gaming trio oc white',
      series: '5080',
      url: 'https://amzn.to/410mbfo'
    },
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5080',
      url: 'https://amzn.to/42A3gJr'
    },
    {
      brand: 'msi',
      model: 'suprim liquid soc',
      series: '5080',
      url: 'https://amzn.to/4aMhLvB'
    },
    // {
    //   brand: 'msi',
    //   model: 'vanguard soc launch edition',
    //   series: '5080',
    //   url: '',
    // },
    // {
    //   brand: 'msi',
    //   model: 'ventus 3x',
    //   series: '5080',
    //   url: '',
    // },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5080',
      url: 'https://amzn.to/40VVqbG'
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc white',
      series: '5080',
      url: 'https://amzn.to/4aF8PYS'
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '5080',
      url: 'https://amzn.to/3EwgdtC'
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '5080',
      url: 'https://amzn.to/4jDEA8R'
    },
    {
      brand: 'pny',
      model: 'oc',
      series: '5080',
      url: 'https://amzn.to/4aCeW04'
    },
    {
      brand: 'pny',
      model: 'argb oc',
      series: '5080',
      url: 'https://amzn.to/4aHN2jC'
    },
    // {
    //   brand: 'zotac',
    //   model: 'amp extreme infinity',
    //   series: '5080',
    //   url: '',
    // },
    // {
    //   brand: 'zotac',
    //   model: 'solid',
    //   series: '5080',
    //   url: '',
    // },
    // {
    //   brand: 'zotac',
    //   model: 'solid oc',
    //   series: '5080',
    //   url: '',
    // },
    {
      brand: 'asus',
      model: 'astral',
      series: '5090',
      url: 'https://amzn.to/4aFLKWb'
    },
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5090',
      url: 'https://amzn.to/4jBsZr3'
    },
    // {
    //   brand: 'asus',
    //   model: 'astral lc',
    //   series: '5090',
    //   url: '',
    // },
    // {
    //   brand: 'asus',
    //   model: 'astral lc oc',
    //   series: '5090',
    //   url: '',
    // },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5090',
      url: 'https://amzn.to/40Dhgzn'
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5090',
      url: 'https://amzn.to/41adhvX'
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '5090',
      url: 'https://amzn.to/40Xi83l'
    },
    // {
    //   brand: 'gainward',
    //   model: 'phantom',
    //   series: '5090',
    //   url: '',
    // },
    {
      brand: 'gigabyte',
      model: 'aorus master ice',
      series: '5090',
      url: 'https://amzn.to/4hIZUrK'
    },
    // {
    //   brand: 'gigabyte',
    //   model: 'aorus master ice',
    //   series: '5090',
    //   url: '',
    // },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5090',
      url: 'https://amzn.to/4hnfrhb'
    },
    {
      brand: 'gigabyte',
      model: 'windforce oc',
      series: '5090',
      url: 'https://amzn.to/3EuBTX0'
    },
    // {
    //   brand: 'inno3d',
    //   model: 'x3',
    //   series: '5090',
    //   url: '',
    // },
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5090',
      url: 'https://amzn.to/3EeFDfe'
    },
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5090',
      url: 'https://amzn.to/4aEzi8Y'
    },
    {
      brand: 'msi',
      model: 'suprim liquid soc',
      series: '5090',
      url: 'https://amzn.to/4hHpn4L'
    },
    // {
    //   brand: 'msi',
    //   model: 'vanguard soc launch edition',
    //   series: '5090',
    //   url: '',
    // },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://amzn.to/40IQ9mu'
    },
    {
      brand: 'pny',
      model: 'oc',
      series: '5090',
      url: 'https://amzn.to/3CkI5Ax'
    },
    {
      brand: 'pny',
      model: 'argb oc',
      series: '5090',
      url: 'https://amzn.to/40Y9C40'
    },
    // {
    //   brand: 'zotac',
    //   model: 'amp extreme infinity',
    //   series: '5090',
    //   url: '',
    // },
    // {
    //   brand: 'zotac',
    //   model: 'solid',
    //   series: '5090',
    //   url: '',
    // },
    // {
    //   brand: 'zotac',
    //   model: 'solid oc',
    //   series: '5090',
    //   url: '',
    // }
  ],
  name: 'amazon-de',
};
