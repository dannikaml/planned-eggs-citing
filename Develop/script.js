console.log(dayjs())
  


$(document).ready(function () {

  //save button, alert
  $("button").click(function() {
    alert("Item Saved!");
    

    //setting variable for the time of day in the planner and the input data
    var input = $(this).siblings('.description').val();
    var hour = document.querySelectorAll(".hour")
   //var hour = $(this).parent().attr('id');

    localStorage.setItem(input, hour);
  })

});


  function nextHour() {
    var currentHour = dayjs().hour();
    var date = dayjs().format('dddd MMM D YYYY');
     $('#currentDay').text(date);

      
        $('.time-block').each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
          // check if we've moved past this time
          if (blockHour < currentHour) {
            $(this).addClass('past');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
      }
    
     