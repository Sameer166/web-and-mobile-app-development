var my_month = new Date()

var month_name = new Array(12);
month_name[0] = "January"
month_name[1] = "February"
month_name[2] = "March"
month_name[3] = "April"
month_name[4] = "May"
month_name[5] = "June"
month_name[6] = "July"
month_name[7] = "August"
month_name[8] = "September"
month_name[9] = "October"
month_name[10] = "November"
month_name[11] = "December"

alert("Current month = " + month_name[my_month.getMonth()]);