const Koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock");

const app = new Koa();
const router = new Router();

function getRes(fn, ctx) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn(ctx);
      resolve(res);
    }, 500);
  });
}

// 注册 mock 路由
mockList.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    const res = await getRes(response, ctx); // 模拟网络请求的加载状态，1s
    ctx.body = res; // 输入结果
  });
});

app.use(router.routes());
app.listen(3001); // port 端口
