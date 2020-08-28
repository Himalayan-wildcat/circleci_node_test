const Koa = require('koa');
const app = new Koa();
const port = 3000;

console.log(`node env = ${app.env}`);
app.use(async ctx => {
  ctx.body = 'hello there';
});

app.listen(port, () => {
  console.log('test console from test branch.......');
  console.log(`Listening on port ${port}`);
});
