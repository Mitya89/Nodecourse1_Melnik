const firstItem = '5';
const secondItem = 5;
let exponent = firstItem ** secondItem;

if (
     typeof(firstItem) === "string" || typeof(firstItem) === "number" 
     && typeof(secondItem) === "number" || typeof(secondItem) === "string"
     && (exponent === exponent)
) {
     console.log(exponent);
} else {
     console.log("Несоответствующий тип данных");
}