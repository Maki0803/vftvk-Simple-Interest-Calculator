function getSliderValue() {
    var slider = document.getElementById("rate");
    document.getElementById("sliderValue").innerHTML = slider.value
}

function compute(){
    p = parseInt(document.getElementById("principal").value);
    r = parseFloat(document.getElementById("rate").value);
    y = parseInt(document.getElementById("years").value);

    var totalInterestPaid = (p*r*y)/100;
      
    document.getElementById("totalAmount").innerHTML = p
    document.getElementById("computeRate").innerHTML = r
    document.getElementById("profit").innerHTML = totalInterestPaid
    document.getElementById("year").innerHTML = 2022 + y
    
}
        