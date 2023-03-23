const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['http://cep.la/'],
    target: 'http://cep.la/',
    secure: false,
    logLevel: 'debug'
  },
]

module.exports = PROXY_CONFIG;
