export const setCookie = (name: string, value: any, expiresInDays: number = 1) => {
    const d = new Date();
    d.setTime(d.getTime() + (expiresInDays * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

export const getCookie = (name: string) => (new RegExp(`(?:^|;\\s)${name.replace(/(\.)/g, '\\$1')}=([^;]+)(?:;\\s|$)`).exec(decodeURIComponent(document.cookie)) || [, ''])[1];