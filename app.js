const rslt = document.querySelector(".result");
const dateElement = document.querySelector(".date");


function updateClock() {
    const now = new Date(); 

   
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

   
    let day = now.toLocaleString('default', { weekday: 'long' }); 
    let month = now.toLocaleString('default', { month: 'long' }); 
    let date = now.getDate(); 
    let year = now.getFullYear(); 

    
    let ampm = "AM"; 
    if (hours >= 12) {
        ampm = "PM"; 
    }
    if (hours > 12) {
        hours -= 12; 
    }
    if (hours === 0) {
        hours = 12; 
    }
   
    
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    rslt.innerHTML = `${hours}:${minutes}:${seconds} <span class="ampm">${ampm}</span>`;

    dateElement.innerText = `${day}, ${month} ${date}, ${year}`;
}

setInterval(updateClock, 1000);

updateClock();
