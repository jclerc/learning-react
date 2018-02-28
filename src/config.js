/* @flow */

import pkg from '../package.json'

const a = document.createElement('a')
a.href = pkg.homepage
const { pathname } = a

const base = pathname.slice(0, pathname.lastIndexOf('/'))

module.exports = {
    base,
}
