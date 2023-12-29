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
        let timeBlock = $("<div>").addClass("row time-block");
        // add data attribute representing each hour from 9 hours in [i]
        timeBlock.attr("data-hour", i);

        // create elements for time event and save btn
        let timeEl = $("<div>").addClass("col-1 fs-4 d-flex align-items-center time").text(hours);
        let eventInput = $("<textarea>").attr("id", "event-" + i).addClass("eventInput col-10 fs-4 ");
        let saveBtn = $("<button>").addClass("col-1 saveBtn").text("save").attr("data-hour", i);

        // Append elements created to timeBlock
        timeBlock.append(timeEl);
        timeBlock.append(eventInput);
        timeBlock.append(saveBtn);

        // Append timeBlock to timeBlocksContainer
        timeBlocksContainer.append(timeBlock);

        // color coding
        const currentHour = dayjs().hour();

        // Extract the data-hour attr and convert to number for if else statement to work properly
        const blockHour = parseInt(timeBlock.attr("data-hour"));

        if (blockHour > currentHour){
            timeBlock.addClass("future")
        } else if (blockHour === currentHour){
            timeBlock.addClass("present")
        } else {
            timeBlock.addClass("past")
        }

        // Event handler for save button
        saveBtn.on("click", function(){
            let hour = $(this).data("hour");
            let eventText = $("#event-" + hour).val();
            localStorage.setItem("event-" + hour, eventText);
        });
    }

        // Retrieve the saved event from local storage
        for (let i=9; i <=17; i++) {
        let savedEvent = localStorage.getItem("event-" + i);
        if (savedEvent) {
            $("#event-" + i).val(savedEvent);
        }
    }
}


generateTimeBlocks()
