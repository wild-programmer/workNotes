const vcity = { 11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
};
 // 检查号码是否符合规范，包括长度，类型
const isCardNo = obj => {
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    const reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
    return reg.test(obj);
};
 // 取身份证前两位,校验省份
const checkProvince = obj => {
    const province = obj.substr(0, 2);
    return vcity[province] !== undefined;
};
// 校验日期
const verifyBirthday = (year, month, day, birthday) => {
    const now = new Date();
    const nowYear = now.getFullYear();
    const thisYear = birthday.getFullYear();
    const thisMonth = (birthday.getMonth() + 1);
    const thisDay = birthday.getDate();
  // 年月日是否合理
    if (thisYear === Number(year) && thisMonth === Number(month) && thisDay === Number(day)) {
   // 判断年份的范围（3岁到100岁之间)
        const time = nowYear - year;
        return time >= 0 && time <= 130;
    }
    return false;
};
 // 检查生日是否正确
const checkBirthday = obj => {
    const len = obj.length;
  // 身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
    if (len === 15) {
        const reFifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
        const arrData = obj.match(reFifteen);
        const year = arrData[2];
        const month = arrData[3];
        const day = arrData[4];
        const birthday = new Date(`19${year}/${month}/${day}`);
        return verifyBirthday(`19${year}`, month, day, birthday);
    }
  // 身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
    if (len === 18) {
        const reEighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
        const arrData = obj.match(reEighteen);
        const year = arrData[2];
        const month = arrData[3];
        const day = arrData[4];
        const birthday = new Date(`${year}/${month}/${day}`);
        return verifyBirthday(year, month, day, birthday);
    }
    return false;
};
// 15位转18位身份证号
const changeFivteenToEighteen = obj => {
    if (obj.length === 15) {
        const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        let cardTemp = 0;
        obj = `${obj.substr(0, 6)}19${obj.substr(6, obj.length - 6)}`;
        for (let i = 0; i < 17; i++) {
            cardTemp += obj.substr(i, 1) * arrInt[i];
        }
        obj += arrCh[cardTemp % 11];
        return obj;
    }
    return obj;
};
 // 校验位的检测
const checkParity = obj => {
  // 15位转18位
    obj = changeFivteenToEighteen(obj);
    const len = obj.length;
    if (len === 18) {
        const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        let cardTemp = 0;
        for (let i = 0; i < 17; i++) {
            const numb = obj.substr(i, 1);
            cardTemp += numb * arrInt[i];
        }
        const valnum = arrCh[cardTemp % 11];
        return valnum === obj.substr(17, 1);
    }
    return false;
};
export default obj => {
    obj = obj.toUpperCase();
    return isCardNo(obj) && checkProvince(obj) && checkBirthday(obj) && checkParity(obj);
};
