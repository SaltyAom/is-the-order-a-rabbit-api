import fastify from 'fastify'

import data from '~/modules/data'
import { getApi } from '~/services/data'

const app = fastify()
app.register(data)

const api = getApi()

describe('[Module] Base', () => {
    it('Get(/) to be "Working"', async () => {
        const { statusCode, body } = await app.inject({
            method: 'GET',
            url: '/'
        })

        expect(statusCode).toBe(200)
        expect(body).toBe(api)
    })
})
