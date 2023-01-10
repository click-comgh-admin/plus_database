const path = require('path');

module.exports = {
    '@@addons': path.join(__dirname, '../src/addons'),
    '@@assets': path.join(__dirname, '../src/assets'),
    '@@views': path.join(__dirname, '../src/view'),
    '@@classes': path.join(__dirname, '../src/addons/classes'),
    '@@constants': path.join(__dirname, '../src/addons/constants'),
    '@@database': path.join(__dirname, '../src/addons/database'),
    '@@functions': path.join(__dirname, '../src/addons/functions'),
    '@@interfaces': path.join(__dirname, '../src/addons/interfaces'),
    '@@mobx-providers': path.join(__dirname, '../src/addons/mobx-providers'),
    '@@network': path.join(__dirname, '../src/addons/network'),
    '@@service-worker': path.join(__dirname, '../src/addons/service-worker'),
    '@@widgets': path.join(__dirname, '../src/addons/widgets'),
}