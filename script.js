// use jQuery syntax to target current day id and tag for more specificity and use .text to append and display to screen
const currentDate = dayjs()
$("p#currentDay").text(currentDate.format("dddd-MMMM-YYYY"))

// for loop for 9 hours starting from 9AM
function timeBlocks(){
    for(let i=9; i<=17; i++){
        let hours = dayjs().hour(i).format("hA");  
        console.log(hours);
    }
}