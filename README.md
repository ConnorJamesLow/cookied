# Cookied
A pair of stupid simple functions for creating and retrieving cookies, based on W3Schools JavaScript cookie tutorial.

### Usage
```js
import { getCookie, setCookie } from 'cookied'

// Create a cookie that will expire in 7 days (default 1).
setCookie('my_cookie', 'payload', 7)

// Retrieve the cookie.
const cookie = getCookie('my_cookie') // -> 'payload'
```