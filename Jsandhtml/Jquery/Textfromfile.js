function extractText() {
    let values = Array.from($("ul *"))
        .map(li => li.innerText)
        .join(", ");
    $("#result").text(values);
}
