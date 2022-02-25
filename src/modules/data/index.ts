import type { FastifyPluginCallback } from 'fastify'
import { findMenu, getOrNull, parseName as p } from './services'

import type {
    GetMenu,
    GetMenuCurrency,
    GetMenuDetail,
    GetMenuLocale
} from './types'

const base: FastifyPluginCallback = (app, _, done) => {
    app.get('/', async ({ api }) => api)

    app.get('/health', async () => 'working')

    app.get<GetMenu>(
        '/:type',
        async ({ api, params: { type } }) => api[p(type)] ?? null
    )

    app.get<GetMenuDetail>(
        '/:type/:name',
        async ({ api, params: { type, name } }) => findMenu(name, api[p(type)])
    )

    app.get<GetMenuDetail>(
        '/:type/:name/name',
        async ({ api, params: { type, name } }) =>
            findMenu(name, api[p(type)])?.name
    )

    app.get<GetMenuDetail>(
        '/:type/:name/price',
        async ({ api, params: { type, name } }) =>
            findMenu(name, api[p(type)])?.price
    )

    app.get<GetMenuLocale>(
        '/:type/:name/name/:locale',
        async ({ api, params: { type, name, locale } }) =>
            getOrNull(locale, findMenu(name, api[p(type)])?.name)
    )

    app.get<GetMenuCurrency>(
        '/:type/:name/price/:currency',
        async ({ api, params: { type, name, currency } }) =>
            getOrNull(currency, findMenu(name, api[p(type)])?.price)
    )

    done()
}

export default base
