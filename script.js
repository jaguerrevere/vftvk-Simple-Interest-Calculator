function compute() {
    p = document.getElementById("principal");
    r = document.getElementById("rate");
    y = document.getElementById("years");

    // Check principal field has a value
    if(p.value == ""){
        alert("Please enter a positive Amount");
        p.focus();
        return false;
    }
    // check if principal field has a positive value
    if(parseFloat(p.value) <= 0){
        alert("Please enter a positive Amount");
        p.focus();
        return false;
    }

    d = new Date();
    return_year = parseInt(d.getFullYear())+parseInt(y.value);

    i = p.value * r.value / 100 * y.value ;

    output_element = document.getElementById("calculation_output");
    output_element.innerHTML = "If you deposit <span class='result'>"+this.p.value+"</span>,<br>";
    output_element.innerHTML = output_element.innerHTML + "at an interest rate of <span class='result'>"+this.r.value+"%</span>.<br>";
    output_element.innerHTML = output_element.innerHTML + "You will receive an amount of <span class='result'>"+this.i+"</span>,<br>";
    output_element.innerHTML = output_element.innerHTML + "in the year <span class='result'>"+this.return_year+"</span>";
    return false;
}

function updateRateTextInput(val) {
    document.getElementById('rate_value_text').value=val;
}
