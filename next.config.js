/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
};

//const { PHASE_DEVELOPMENT_SERVER } = require('NEXT/constants')
/* module.exports = (phase) => {

  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: false,
      env: {
        mongodb_username: '',
        mongodb_password: '',
        mongodb_url: '',
      }
    }
  }
  return {
    reactStrictMode: false,
    env: {
      mongodb_username: '',
      mongodb_password: '',
      mongodb_url: '',
    }
  }

}; */