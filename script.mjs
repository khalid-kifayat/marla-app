function doConvert(event)   {

    console.log("button clicked");
    event.preventDefault();

    let myNumber = document.querySelector("#myNumber").value.trim();

    if (myNumber === "") {
        alert("Please enter a value in the input field.");
        return; // Exit the function if the input is empty.
    }
    

    console.log(myNumber);
    

    let result = Number(myNumber) * 272.3;
    console.log(result);

    let message = `Answer = ${result} sq.ft.`;

    document.querySelector("#resultBox").innerHTML = message;

}