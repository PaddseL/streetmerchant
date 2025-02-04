import {Store} from './store';

export const MsiDe: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.product-info__add-to-cart > .product-info__add-button',
      text: ['in den warenkorb'],
    },
    maxPrice: {
      container: '.price__current',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.product-info__add-to-cart > .product-info__add-button',
        text: ['ausverkauft'],
      },
      {
        container: '.product-inventory__status',
        text: ['0 auf lager'],
      },
    ],
  },
  links: [
    {
        brand: 'test:brand',
        model: 'test:model',
        series: 'test:series',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/card-holder',
    },
    {
        brand: 'msi',
        model: 'gaming trio oc',
        series: '5080',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5080-16g-gaming-trio-oc',
    },
    {
        brand: 'msi',
        model: 'gaming trio oc white',
        series: '5080',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5080-16g-gaming-trio-oc-white',
    },
    {
        brand: 'msi',
        model: 'suprim soc',
        series: '5080',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5080-16g-suprim-soc',
    },
    {
        brand: 'msi',
        model: 'suprim liquid soc',
        series: '5080',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5080-16g-suprim-liquid-soc',
    },
    {
        brand: 'msi',
        model: 'vanguard soc launch edition',
        series: '5080',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5080-16g-vanguard-soc-launch-edition',
    },
    {
        brand: 'msi',
        model: 'ventus 3x oc',
        series: '5080',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5080-16g-ventus-3x-oc',
    },
    {
        brand: 'msi',
        model: 'ventus 3x oc plus',
        series: '5080',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5080-16g-ventus-3x-oc-plus-1',
    },
    {
        brand: 'msi',
        model: 'gaming trio oc',
        series: '5090',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5090-32g-gaming-trio-oc',
    },
    {
        brand: 'msi',
        model: 'suprim soc',
        series: '5090',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/geforce-rtx-5090-32g-suprim-soc',
    },
    {
        brand: 'msi',
        model: 'ventus 3x oc',
        series: '5090',
        url: 'https://de-store.msi.com/collections/geforce-rtx-50-series-gpu/products/msi-grafikkarte-rtx-5090-ventus-3x-oc',
    }
  ],
  name: 'msi-de',
}
