import type { Menu } from '@models'

export const parseName = <T extends string>(v: T): T =>
    v.toLowerCase().replaceAll('-', ' ') as T

export const findMenu = (name: string, menus: Menu[] | null) =>
    menus?.find(({ name: { en, jp } }) => {
        const n = parseName(name)

        return en.toLowerCase() === n || jp.toLowerCase() === n
    }) ?? null

export const getOrNull = <T extends Record<any, unknown> | undefined>(
    key: keyof NonNullable<T>,
    value: T
) => {
    const v = value?.[key]

    if (!v) return null

    return { [key]: v }
}
