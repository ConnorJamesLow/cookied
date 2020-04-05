export const setCookie = (name: string, value: any, expiresInDays: number = 1) => document.cookie = `${name}=${value};expires=${(new Date(Date.now() + (expiresInDays * 24 * 60 * 60 * 1000))).toUTCString()};path=/`;

export const getCookie = (name: string) => (new RegExp(`(?:^|;\\s)${name.replace(/(\.)/g, '\\$1')}=([^;]+)(?:;\\s|$)`).exec(decodeURIComponent(document.cookie)) || [, ''])[1];