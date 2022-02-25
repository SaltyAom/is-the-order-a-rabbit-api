export type Locale = 'en' | 'jp'
export type Currency = 'usd' | 'jpy'

export type MenuType =
    | 'coffee'
    | 'straight-coffee'
    | 'arrange-coffee'
    | 'others'
    | 'food'

export type RabbitHouseMenu = Record<MenuType, Menu[]>

export interface Menu {
    name: Record<Locale, string>
    price: Record<Currency, number>
}
