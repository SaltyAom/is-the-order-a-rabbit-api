import type fastify, { FastifyRequest } from 'fastify'

import { RabbitHouseMenu } from '@models'

declare module 'fastify' {
    interface FastifyRequest {
        api: Readonly<RabbitHouseMenu>
    }
}
