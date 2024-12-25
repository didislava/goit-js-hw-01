function getElementWidth(content, padding, border) {
    const contentNumb = parseFloat(content);
    const paddingNumb = parseFloat(padding);
    const borderNumb = parseFloat(border);

    const result = contentNumb + ((paddingNumb + borderNumb)*2);

    console.log(result + "px")
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
