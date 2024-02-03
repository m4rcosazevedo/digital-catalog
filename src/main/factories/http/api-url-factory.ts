import { settings } from '@/main/config/settings'

export const makeApiUrl = (path: string): string => settings.BASE_URL + path
