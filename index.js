 function superbowlWin(record)  {
  
   const win  = record.find(record => record.result === "W");
   if (win.result === "W") {return win.year
   } else return undefined
 
   };

   //if (!!notwin ===  win.year) { return undefined}

