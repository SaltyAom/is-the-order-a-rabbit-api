import type { RequestGenericInterface } from 'fastify'

import type { Currency, Locale, MenuType } from '@models'

export interface GetMenu extends RequestGenericInterface {
    Params: {
        type: MenuType
    }
}

export interface GetMenuDetail extends RequestGenericInterface {
    Params: {
        type: MenuType
        name: string
    }
}

export interface GetMenuLocale extends RequestGenericInterface {
    Params: {
        type: MenuType
        name: string
        locale: Locale
    }
}

export interface GetMenuCurrency extends RequestGenericInterface {
    Params: {
        type: MenuType
        name: string
        currency: Currency
    }
}
