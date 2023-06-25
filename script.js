let element= document.getElementById('time')
setInterval(() => {
    let minutes = new Date().getMinutes()
    let hours=new Date().getHours()
    let seconds = new Date().getSeconds()   
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;console.log(hours,minutes,seconds)
    let time = `${hours}:${minutes}:${seconds} ${ampm}`
    element.innerHTML = time
},1000)