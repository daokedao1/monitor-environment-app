import request from '../utils/request';

//添加设备
const addEquipment = (data) => {
  return request.get('/api/equipment/list', data);
};
//chars
const moniterList = (data) => {
  return request.get('/api/moniter/list', data);
};

export default {
  apis: {
	addEquipment,
	moniterList

  }
}
