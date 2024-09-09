module.exports = [
  // 'strapi::errors',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: true,
  //     origin: ['*'], // or specific domains
  //     methods: ['GET', 'POST'],
  //   },
  // },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
