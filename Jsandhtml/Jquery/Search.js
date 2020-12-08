function search() {
    let searchText = $('#searchText').val();
    let count = 0;
    let itemlist =$("#towns li");
        for(item of itemlist ){
        if (item.textContent.includes(searchText)) {
            $(item).css("font-weight", "bold");
            count++;
        } else
            $(item).css("font-weight", "");
    };
    $("#result").text(count + " matches found.");
    $("#searchText").val("");
}
 