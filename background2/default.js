// Constant to define names of background properties.
const corePropertiesName = [
    "IsBackgroundVisible",
    "BackgroundInstructionsTitle",
    "BackgroundInstructions",
    "PinColor",
    "BackgroundInstructionsColor",
    "BackgroundInstructionsFont",
    "BackgroundColor",
    "BackgroundImageUrl",
    "IsBackgroundImageStretched",
    "IsBackgroundClockVisible"
];

// Variables to save received background properties and PIN.
var g_coreBackgroundProperties;
var g_pinNumber;

// Function to receive hub background properties in JSON format. 
function setBackgroundProperties(coreProperties) {
    g_coreBackgroundProperties = JSON.parse(coreProperties);
    updateGraphicInterface();
}

// Function to receive hub PIN in JSON format.
function setPinNumber(pinProperty) {
    var pinNumberProperty = JSON.parse(pinProperty);
    g_pinNumber = pinNumberProperty.pin;
    setPin(g_pinNumber);
}

// Function to update html content to show in hub background.
function updateGraphicInterface() {
    g_coreBackgroundProperties.forEach(function (property, i) {
        switch (property.key) {
            case corePropertiesName[0]:
                setIsBackgroundVisible(property);
                break;
            case corePropertiesName[1]:
                setInstructionsTitle(property);
                break;
            case corePropertiesName[2]:
                setInstructions(property);
                break;
            case corePropertiesName[3]:
                setPinColor(property);
                break;
            case corePropertiesName[4]:
                setBackgroundInstructionsColor(property);
                break;
            case corePropertiesName[5]:
                setBackgroundInstructionsFont(property);
                break;
            case corePropertiesName[6]:
                setBackgroundColor(property);
                break;
            case corePropertiesName[7]:
                setBackgroundImageUrl(property);
                break;
            case corePropertiesName[8]:
                setIsBackgroundImageStretched(property);
                break;
            case corePropertiesName[9]:
                setIsBackgroundClockVisible(property);
                break;
            default: break;
        }
    });
}

// Function to use PIN number inside an html element.
function setPin(pin) {
    document.getElementById("pin").innerHTML = pin;
}

// Function to use PIN color inside an html element.
function setPinColor(property) {

}

// Function to use Background Instructions Title inside an html element.
function setInstructionsTitle(property) {
}

// Function to use Background Instructions inside an html element.
function setInstructions(property) {
    
    var instructionsFormatted = '<p> ' + property.value + ' </p>';
    instructionsFormatted = instructionsFormatted.replace(/{pin}/g, g_pinNumber);
    instructionsFormatted = instructionsFormatted.replace(/{n}/g, "</p><p>");
    document.getElementById("instructions-text").innerHTML = instructionsFormatted;
    
    
}

// Function to use Make Background Visible inside an html element.
function setIsBackgroundVisible(property) {

}

// Function to use Background Instructions Color inside an html element.
function setBackgroundInstructionsColor(property) {
    
}

// Function to use Background Instructions Font inside an html element.
function setBackgroundInstructionsFont(property) {
    
}

// Function to use Background Color inside an html element.
function setBackgroundColor(property) {
   /*
   document.getElementById("right").style.backgroundColor = property.value;
   */
}

// Function to use Background Image URL inside an html element.
function setBackgroundImageUrl(property) {
    /* show this
    document.body.style.backgroundImage = "url(" + property.value + ");" 
    */
}

// Function to use Stretch Background Image inside an html element.
function setIsBackgroundImageStretched(property) {

}

// Function to use Make Background Clock Visible inside an html element.
function setIsBackgroundClockVisible(property) {
    /*
    if(property.value.toLowerCase() == "true"){
        document.getElementById("time").style.visibility = "visible";
    }else{
        document.getElementById("time").style.visibility = "hidden";
    }
    */
}

