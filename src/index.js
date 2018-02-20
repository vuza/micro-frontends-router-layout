const path = require('path')
// Don't do that!
const fetchTemplateFs = require('../node_modules/node-tailor/lib/fetch-template')
const ACCEPT_HEADERS = [
  'accept-language',
  'referer',
  'user-agent',
  'x-request-uri',
  'x-request-host',
  'cookie'
]

module.exports = {
  fetchTemplate: fetchTemplateFs(
    path.join(__dirname, '..', 'templates'),
    () => 'base-template'
  ),

  filterRequestHeaders: (attributes, request) => {
    const { public: publicFragment } = attributes
    const { headers = {} } = request
    console.log(headers)

    // Headers are not forwarded to public fragment for security reasons
    return publicFragment
      ? {}
      : ACCEPT_HEADERS.reduce((newHeaders, key) => {
        headers[key] && (newHeaders[key] = headers[key])
        return newHeaders
      }, {})
  }
}
