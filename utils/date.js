function formatDate(date){
  if(!date){
    data = new Date()
  }else{
    data = new Date(date * 1000)
  }
  let year = data.getFullYear()
  let month = data.getMonth() + 1
  let day = data.getDate()
  let hour = data.getHours()
  let minutes = data.getMinutes()
  let seconds = data.getSeconds()
  function ad0 (n){
    let s = n < 10 ? `0${n}`: n
    return s
  }
  return `${year}-${ad0(month)}-${ad0(day)}`
}


module.exports = formatDate