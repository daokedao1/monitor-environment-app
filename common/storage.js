const setStorageSync = (key, data) => {
  try {
    uni.setStorageSync(key, data);
  } catch (e) {
    console.log('本地存储缓存失败');
  }
};

const getStorageSync = (key, data) => {
  try {
    const value = uni.getStorageSync(key);
    return value;
  } catch (e) {
    console.log('本地获取缓存数据失败');
  }
};

export {
  setStorageSync,
  getStorageSync
}
