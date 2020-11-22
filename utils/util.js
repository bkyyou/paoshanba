const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const isBoo = function(boo) {
  return Object.prototype.toString.call(boo) == '[object Boolean]'
}

const getCurrentDate = function(seg) {
  seg = seg || '-';
  let d = new Date();
  let y =  d.getFullYear();
  let m = d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1);
  let date = d.getDate();
  // console.log('y + seg + m + seg  + date', y + seg + m + seg  + date);
  return y + seg + m + seg  + date;
}

module.exports = {
  formatTime,
  isBoo,
  getCurrentDate
}
