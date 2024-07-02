document.addEventListener('DOMContentLoaded', () => {
const slackDisplayName = "Chidinma Nwosu";  
const slackEmail = "chidinmaifynwosu@gmail.com";  
const slackProfilePicture = "./assets/images/profile-pic2.png";  

document.getElementById('slackDisplayName').textContent = slackDisplayName;
document.getElementById('slackEmail').textContent = slackEmail;
// document.getElementById('slackProfilePicture').src = slackProfilePicture;

});

  function updateTimeAndDay(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const dayNames= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayNames[now.getDay()];

    //format minutes to always be two digits
    minutes = minutes < 10 ? '0' + minutes : minutes;

    //format hours to be either AM or PM
    const amPmSuffix = hours >=12 ? 'pm' : 'am';
    hours= hours % 12;
    hours = hours ? hours : 12;
    const timestr = hours + ':' + minutes + amPmSuffix;

    //update the HTML elements
    const timeElement= document.getElementById('currentTimeUTC');
    const dayElement= document.getElementById('currentDay');
    if(timeElement)timeElement.textContent = timestr;
    if(dayElement)dayElement.textContent = day;
  }

  //update the time and day every second
  setInterval(updateTimeAndDay, 1000);



    