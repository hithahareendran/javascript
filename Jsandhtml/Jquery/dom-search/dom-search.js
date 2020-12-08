function domSearch(selector, caseSensitive) {

    let addControls = $('<div>').addClass("add-controls")
        .append($('<label>').text("Enter text: ").append('<input id="item">'))
        .append($("<a class='button' style='display: inline-block;'>Add</a>").click(addControl));

    let searchControls = $('<div>').addClass("search-controls")
        .append($('<label>').text("Search: ")
            .append($('<input id="searchText">').on('input', filter)));

    let resultControls = $('<div>').addClass("result-controls")
        .append($('<ul id="resultList">').addClass("items-list"));



    $(selector).addClass("items-control")
        .append(addControls)
        .append(searchControls)
        .append(resultControls);

    function addControl() {
        let input = $('#item').val();
        $('#item').val('');

        let li = $('<li>').addClass("list-item")
            .append($("<a class='button'>X</a>"))
            .append($("<strong>" + input + "</strong>"));

        li.appendTo('#resultList');
    }

    function filter() {
        let searchText = $('#searchText').val();
        let itemlist = $("li");

        itemlist.css("display", "list-item");
        itemlist.toArray()
            .filter(l => !(caseSensitive ?
                l.textContent.includes(searchText) :
                l.textContent.toUpperCase().includes(searchText.toUpperCase())))
            .forEach(item => {
                $(item).css("display", "none");
            });
    }
}
