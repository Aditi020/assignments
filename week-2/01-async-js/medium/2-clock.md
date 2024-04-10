Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


const interval = () => {
  const currentdate = new Date();
  
  let hour = currentdate.getHours();
  const minute = currentdate.getMinutes();
  const sec = currentdate.getSeconds();
  

  const formattedTime = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${sec < 10 ? '0' : ''}${sec}`;
  
  // Determine AM/PM suffix
  let suffix = "";
  if (hour > 12) {
    suffix = "PM";
    hour -= 12;
  } else {
    suffix = "AM";
  }
  
  const formattedTimeWithSuffix = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${sec < 10 ? '0' : ''}${sec} ${suffix}`;
  
  console.log(formattedTime);
  console.log(formattedTimeWithSuffix);
};

setInterval(interval, 1000);
