console.log(dayjs())
  


$(document).ready(function () {

  //save button, alert
  $("button").click(function() {
    alert("Item Saved!");
    

    //setting variable for the time of day in the planner and the input data
    var input = $(this).siblings('.description').val();
   // var hour = document.querySelectorAll(".hour")
    var time = $(this).parent().attr('id');

    localStorage.setItem(input, time);
  })

});


  function nextHour() {
    var currentHour = dayjs().hour();
    var date = dayjs().format('dddd MMMM D YYYY');
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
    
      nextHour();
    
      // hour counter
      setInterval(nextHour, 15000);
    
      // saved data from localStorage (still not updating?????)
      $('#hour-9 .description').val(localStorage.getItem('hour-9'));
      $('#hour-10 .description').val(localStorage.getItem('hour-10'));
      $('#hour-11 .description').val(localStorage.getItem('hour-11'));
      $('#hour-12 .description').val(localStorage.getItem('hour-12'));
      $('#hour-1 .description').val(localStorage.getItem('hour-1'));
      $('#hour-2 .description').val(localStorage.getItem('hour-2'));
      $('#hour-3 .description').val(localStorage.getItem('hour-3'));
      $('#hour-4 .description').val(localStorage.getItem('hour-4'));
      $('#hour-5 .description').val(localStorage.getItem('hour-5'));
      $('#hour-6 .description').val(localStorage.getItem('hour-6'))
      $('#hour-7 .description').val(localStorage.getItem('hour-7'))

    
    
      