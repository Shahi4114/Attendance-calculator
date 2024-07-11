document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ 'ATTENDANCE CALCULATOR'];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
    function calculateAttendance() {
        var totalClasses = parseInt(document.getElementById('totalClasses').value);
        var classesAttended = parseInt(document.getElementById('classesAttended').value);
        var futureClasses = parseInt(document.getElementById('futureClasses').value) || 0;
        var futureClassesAttended = parseInt(document.getElementById('futureClassesAttended').value) || 0;
        var requiredPercentage = parseInt(document.getElementById('requiredPercentage').value);

        if (totalClasses <= 0 || classesAttended < 0 || classesAttended > totalClasses || futureClasses < 0 || futureClassesAttended < 0 || futureClassesAttended > futureClasses) {
            alert('Please enter valid values.');
            return;
        }

        var totalAttended = classesAttended + futureClassesAttended;
        var totalClassesIncludingFuture = totalClasses + futureClasses;
        var attendancePercentage = Math.ceil((totalAttended / totalClassesIncludingFuture) * 100);
        var message = 'Attendance Percentage: <strong>' + attendancePercentage + '%</strong>';

         if (attendancePercentage > requiredPercentage) {
            message += ' (You are eligible to sit in exams)';
            var gifs = [
                'auntydance.gif',
                'dance.gif',
                'shahrukh.gif',
                // Add more GIF URLs for this category
            ];   
        }else if (attendancePercentage == requiredPercentage) {
            message += ' (You are eligible to sit in exams)';
            var gifs = [
                'close1.gif',
                'indian-dance-dancing.gif',
                'akshaylook.gif',
                // Add more GIF URLs for this category
            ];
         } else {
            message += ' (You are not eligible to sit in exams)';
            var gifs = [
                'bestcry-sad.gif',
                'jU.gif',
                
                // Add more GIF URLs for this category
            ];
        }

        document.getElementById('result').innerHTML = message;

        var gifContainer = document.getElementById('gif');
        gifContainer.style.display = 'block';
        var gifImage = document.getElementById('gifImage');
        var randomIndex = Math.floor(Math.random() * gifs.length);
        gifImage.src = gifs[randomIndex];
    }