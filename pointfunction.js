setInterval(
    function() {
      if (document.hidden == false) {
        console.log('hello, not enough time', hello);
        hello = hello + 1
        if (hello % 60 === 0 ) {
          console.log('you have a point', "you've been going for "+ hello/60 + ' minutes'); 
          // hello= 0
          // include your own api call or function
        }
      }else{
        console.log('you left the tab');  
        hello = 0
      }
    }, 1000);
