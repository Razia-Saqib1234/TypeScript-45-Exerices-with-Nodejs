function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Call Function 
describe_city("Karachi");
describe_city("Multan");
describe_city("berlin", "Germany");
