const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
  const template = require('../views/faq.marko');

  ctx.render(template);
})

module.exports = router;
