const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList");
const Random = Mock.Random;

module.exports = [
  // 获取单个问卷
  {
    url: "/api/question/:id",
    method: "get",
    // response() {
    //   return {
    //     errno: 100,
    //     msg: 'this is a error'
    //   };
    // },
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
      };
    },
  },
  // 创建问卷
  {
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
      };
    },
  },
  // 获取（查询）问卷
  {
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "" } = ctx;
      const isDeleted = url.includes("isDeleted=true");
      const isStar = url.includes("isStar=true");

      return {
        errno: 0,
        data: {
          list: getQuestionList({ isDeleted, isStar }), // 当前页数据
          total: 100,
        },
      };
    },
  },
];
