import env from 'dotenv'
env.config()

import fastify from 'fastify'

import cors from 'fastify-cors'

import { data } from '@modules'
import { getApi, run } from '@services'

const app = fastify()

const main = async () => {
    const api = Object.freeze(await getApi())

    app.register(cors)
        .addHook('onRequest', async (req) => {
            req.api = api
        })
        .register(data)
        .listen(8080, '0.0.0.0', (error, address) => {
            if (error) return console.error(error)

            console.log(`Running at ${address}`)
        })
}

run(main)
