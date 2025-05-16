function main() {
  const dday = new Date("2025-09-10T18:30:00Z"); // i have adjusted the new date to so it matches ist in webpage
  const ddayseconds = dday.getTime() / 1000; // will give dday in seconds

  let currentTime = Math.floor(Date.now() / 1000); // current time in seconds

  let secondLeft = ddayseconds - currentTime; // this is seconds left for dday

  // console.log("this is dday in seconds " + ddayseconds)  // line 8-10 are for checking
  // console.log("this is current time in seconds " + currentTime )
  // console.log("this is seconds left for dday " + secondLeft )

  let timer = {
    days: Math.floor(secondLeft / (60 * 60 * 24)),
    hours: Math.floor(
      (secondLeft / (60 * 60 * 24) - Math.floor(secondLeft / (60 * 60 * 24))) *
        24
    ),
    minutes: Math.floor(
      ((secondLeft / (60 * 60 * 24) - Math.floor(secondLeft / (60 * 60 * 24))) *
        24 -
        Math.floor(
          (secondLeft / (60 * 60 * 24) -
            Math.floor(secondLeft / (60 * 60 * 24))) *
            24
        )) *
        60
    ),
    seconds: Math.floor(
      (((secondLeft / (60 * 60 * 24) -
        Math.floor(secondLeft / (60 * 60 * 24))) *
        24 -
        Math.floor(
          (secondLeft / (60 * 60 * 24) -
            Math.floor(secondLeft / (60 * 60 * 24))) *
            24
        )) *
        60 -
        Math.floor(
          ((secondLeft / (60 * 60 * 24) -
            Math.floor(secondLeft / (60 * 60 * 24))) *
            24 -
            Math.floor(
              (secondLeft / (60 * 60 * 24) -
                Math.floor(secondLeft / (60 * 60 * 24))) *
                24
            )) *
            60
        )) *
        60
    ),
  };

  // we have got the data of time, now we will display that in frontend
  document.getElementById("nofdays").innerHTML = timer.days;
  document.getElementById("nofhours").innerHTML = timer.hours;
  document.getElementById("nofminutes").innerHTML = timer.minutes;
  document.getElementById("nofseconds").innerHTML = timer.seconds;
}
setInterval(main, 500);
