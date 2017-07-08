var mons = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

$(function () {
    getTime();
    setInterval("getTime();", 1000);
})

function getTime() {
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var day = myDate.getDay();
    var date = myDate.getDate();
    var month = myDate.getMonth();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    $("#showDate1").html(hours + ":" + minutes);
    $("#showDate2").html(days[day] + "," + mons[month] + " " + date);

    if (hours > 7 && hours < 19) {
        $("#main").addClass("day");
    } else {
        $("#main").addClass("night");
    }
}
