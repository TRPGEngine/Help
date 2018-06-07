const Router = require('koa-router');
const router = new Router();

router.get('/faq', (ctx, next) => {
  const template = require('../views/faq.marko');

  ctx.render(template);
})

router.get('/feedback', (ctx, next) => {
  const template = require('../views/feedback.marko');

  ctx.render(template);
})

router.post('/feedback/submit', async (ctx, next) => {
  let data = ctx.request.body;
  let username = data['username'];
  let contact = data['contact-link'];
  let content = data['feedback-content'];

  if(!username) {
    ctx.body = '请填写用户名';
    return;
  }

  if(!content) {
    ctx.body = '请填写内容';
    return;
  }

  try {
    let db = await ctx.trpgapp.storage.connectAsync();
    try {
      await db.models.help_feedback.createAsync({
        username,
        contact,
        content
      });
    }finally {
      db.close();
    }

    ctx.body = '提交成功';
  } catch(err) {
    console.error(err);
    ctx.body = '提交失败';
  }
})

module.exports = router;
