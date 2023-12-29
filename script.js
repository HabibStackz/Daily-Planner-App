// use jQuery syntax to target current day id and tag for more specificity and use .text to append and display to screen
const currentDate = dayjs()
$("p#currentDay").text(currentDate.format("dddd-MMMM D-YYYY"));


// function to generate timeblocks
function generateTimeBlocks(){
    //get Timeblocks div element element by class
    const timeBlocksContainer = $(".timeBlocks");

    // for loop for 9 hours starting from 9AM
    for(let i=9; i<=17; i++){
        let hours = dayjs().hour(i).format("hA");  
        console.log(hours);

        // Create timeblock element and add class ".time-block"
        let timeBlock = $("<div>").addClass("time-block");
        // add data attribute representing each hour from 9 hours in [i]
        timeBlock.attr("data-hour", i);
    }
}



