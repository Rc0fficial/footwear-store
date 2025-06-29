/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://your-domain.vercel.app', // FIXME: Change to the production URL
  generateRobotsTxt: true,
};
