/** lecture example, var cables is an array */

var cables = ["hdmi", "microb", "type-c", "type-a"];
var container = "";

for (var electronics of cables) {
    container += electronics + "\n";
}

console.log(container);

/**another example */
var weathers = ["sunny", "rainy", "cloudy"];
var words = "";

for(var weather of weathers) {
    if(weather == "cloudy") {
        words += weather;
        break;
    }
    words += weather + "\n";
}

console.log(words);