$(document).ready(function(){
    $("#queryButton").click(function(e){
        e.preventDefault();
        let dayFrom = $("#dayFrom").val();
        let monthFrom = $("#monthFrom").val();
        let yearFrom = $("#yearFrom").val();

        let dayTo = $("#dayTo").val();
        let monthTo = $("#monthTo").val();
        let yearTo = $("#yearTo").val();

        let errorDiv = $(".error");

       if(checkIfInt(dayFrom) 
       && checkIfInt(monthFrom) 
       && checkIfInt(yearFrom)
       && checkIfInt(dayTo)
       && checkIfInt(monthTo)
       && checkIfInt(yearTo))
       {
            if(checkIfDayIsValid(dayFrom)
            && checkIfDayIsValid(dayTo)
            && checkIfMonthIsValid(monthFrom)
            && checkIfMonthIsValid(monthTo)
            && checkIfMonthHasEnoughDays(dayFrom, monthFrom)
            && checkIfMonthHasEnoughDays(dayTo, monthTo)
            && checkIfYearIsValid(yearFrom)
            && checkIfYearIsValid(yearTo))
            {
                errorDiv.text("Sve je u redu.");
            } else {
                errorDiv.text("Dan mora da bude od 1 do 31, mesec mora da bude od 1 do 12 i godina mora da bude od 1930 do 2018.");
            }

       } else {
            errorDiv.text("Uneti podatak mora biti broj i polja ne smeju biti prazna.");
       }
        
    });
});
    //checking if input value is an integer , return bool
function checkIfInt(value){
    if(Math.floor(value) == value && $.isNumeric(value)){
        return true;
    } else {
        return false;
    }
}
    //checking if value of day is between 1 and 31, return bool
function checkIfDayIsValid(value){
    if(value < 1 || value > 31){
        alert('Dan mora da bude izmedju 1 i 31.');
        return false;
    } else {
        return true;
    }
}
    //checking if value of month is between 1 and 12, return bool
 function checkIfMonthIsValid(value){
    if(value < 1 || value > 12){
        alert('Meseci ima samo 12.');
        return false;
    } else {
        return true;
    }
}
    //checking if value of year is between 1930 and 2018, return bool
 function checkIfYearIsValid(value){
    if(value < 1930 || value > 2018){
        alert('Godina mora biti izmedju 1930 i 2018.');
        return false;
    } else {
        return true;
    }
}
    //checking if input of day and month match, return bool
function checkIfMonthHasEnoughDays(day, month){
    if( month == 4 ||
        month == 6 ||
        month == 9 ||
        month == 11 && day > 30) {
        alert("Ovaj mesec nema 31 dan.");
        return false;
    } 
    else if(month == 2 && day > 28) {
        alert('Ovaj mesec nema vise od 28 dana ukoliko godina nije prestupna.');
        return false;
    } else {
        return true;
    }
}

// function checkIfLeapYear(year){

//     if(year % 400 === 0) {
//         return true;
//     } else if ((year % 100 !==0) && (year % 4 === 0)){
//         return true;
//     } else {
//         return false;
//     }
// }



// јануар, са 31 даном; 1 
// фебруар, са 28 дана, 29 у преступним годинама, или 30 само једном приликом;2 
// март, са 31 даном; 3
// април, са 30 дана; 4
// мај, са 31 даном; 5
// јун, са 30 дана; 6
// јул, са 31 даном; 7 
// август, са 31 даном; 8
// септембар, са 30 дана; 9
// октобар, са 31 даном; 10
// новембар, са 30 дана; 11
// децембар, са 31 даном; 12

