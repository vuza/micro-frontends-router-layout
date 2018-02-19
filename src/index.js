const path = require('path')
// Don't do that!
const fetchTemplateFs = require('../node_modules/node-tailor/lib/fetch-template')

module.exports = {
  fetchTemplate: fetchTemplateFs(
    path.join(__dirname, '..', 'templates'),
    () => 'base-template'
  ),

  filterRequestHeaders: (attributes, request) => {
    const { public: publicFragment } = attributes
    const { headers = {} } = request

    // Headers are not forwarded to public fragment for security reasons
    return publicFragment ? {} : headers
  }
}
