function attachEvents() {
    $("li").click(function () {
        if ($(this).attr("data-selected")) {
            $(this).removeAttr("data-selected");
            $(this).css("background", "");
        } else {
            $(this).attr("data-selected", "true");
            $(this).css("background", "#ddd")
        }
    });

    $("#showTownsButton").click(function () {
        let towns = $("li[data-selected=true]").toArray()
            .map(li => li.textContent)
            .join(", ");

        $("#selectedTowns").text("Selected towns: " + towns);
    });
}
