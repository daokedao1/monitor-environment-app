import request from '../utils/request';

//添加设备
const addEquipment = (data) => {
  return request.get('/api/equipment/list', data);
};
//chars
const moniterList = (data) => {
  return request.get('/api/moniter/list', data);
};
//历史数据
const historyList = (data) => {
  return request.get('/api/moniter/history/list', data);
};

export default {
  apis: {
	addEquipment,
	moniterList,
historyList
  }
}
