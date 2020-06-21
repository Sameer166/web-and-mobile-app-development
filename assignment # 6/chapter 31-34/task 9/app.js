var ramadan2015 = new Date("June 21, 2015");
var timeDiffer = date.getTime() - ramadan2015.getTime();
var daysPast = Math.floor(timeDiffer / (1000 * 60 * 60 * 24));
alert(daysPast + " days past since 1st Ramadan 2015");