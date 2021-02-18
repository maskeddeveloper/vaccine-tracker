const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
  
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    // console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
    const prodDomain = ""
    const localDomain = "http://localhost:3000"
    const env = {
      SITE_NAME : "COVID-19 Vaccinations Tracker",
      DEV_NAME : "Mehdi HAMIME",
      DEV_TWITTER :"https://twitter.com/MehdiHAMIME",
      DEV_LINKEDIN : "https://ma.linkedin.com/in/mehdihamime",
      DEV_IG :"https://www.instagram.com/mehdihamime/",
      DEV_FB : "https://facebook.com/medhamime",
      VACS_ALL_DATA: (() => {
        if (isDev) return localDomain + '/api/vaccinations/all'
        if (isProd) {
          return prodDomain + '/api/vaccinations/all'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'VACS_ALL_DATA:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      VACS_COUNTRY_ALL_DATA: (() => {
        if (isDev) return localDomain + '/api/vaccinations/country/all/'
        if (isProd) {
          return prodDomain + '/api/vaccinations/country/all/'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'VACS_ALL_DATA:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      VACS_COUNTRY_LATEST_DATA: (() => {
        if (isDev) return localDomain + '/api/vaccinations/country/latest/'
        if (isProd) {
          return prodDomain + '/api/vaccinations/country/latest/'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'VACS_ALL_DATA:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      VACS_ALL_LATEST_DATA: (() => {
        if (isDev) return localDomain + '/api/vaccinations/country/latest/all'
        if (isProd) {
          return prodDomain + '/api/vaccinations/country/latest/all'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'VACS_ALL_DATA:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      VACS_ALL_LOCATIONS: (() => {
        if (isDev) return localDomain + '/api/vaccinations/locations/all'
        if (isProd) {
          return prodDomain + '/api/vaccinations/locations/all'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'VACS_ALL_DATA:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      VACS_WORLD: (() => {
        if (isDev) return localDomain + '/api/vaccinations/worldwide'
        if (isProd) {
          return prodDomain + '/api/vaccinations/worldwide'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'VACS_ALL_DATA:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
    }
  
    // next.config.js object
    return {
      env,
    }
  }