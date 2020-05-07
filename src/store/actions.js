// 对state里的状态进行异步操作
export const actions = {
  // 1.返回操作成功的信息：回调函数
  // aUpdateInfo(context, payload) {
  // setTimeout(() => {
  //   context.commit('updateInfo');
  //   console.log(payload.message);
  //   payload.success();
  // }, 1000);
  // }

  // 2. 回操作成功的信息：Promise
  aUpdateInfo(context) {
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit('updateInfo');

        resolve('操作成功！');
      }, 1000);
    })
  }
}
