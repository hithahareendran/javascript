function initializeTable() {
    addRow("Sweden", "Stockholm");
    addRow("Germany", "Berlin");
    addRow("France", "Paris");

    $("#createLink").click(createNew)

    function createNew() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addRow(country, capital);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
    }

    function addRow(country, capital) {

        let row = $('<tr>')
                .append($("<td>").text(country))
                .append($("<td>").text(capital))
                .append($("<td>")
                        .append($("<a href='#' id='up'>[Up]</a> ").click(moveUp))
                        .append($("<a href='#' id='down'>[Down]</a> ").click(moveDown))
                        .append($("<a href='#' id='delete'>[Delete]</a>").click(deleteRow)));
        $("#countriesTable").append(row);

        resetUpDownLinks();
    }

    function moveUp() {
        console.log($(this).parent().parent())
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());
        resetUpDownLinks();
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());
        resetUpDownLinks();
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.remove();
        resetUpDownLinks();
    }

    function resetUpDownLinks() {
        $('#countriesTable a').css('display', 'inline')
        $("tr:nth-child(3) #up").css('display', 'none');
        $("tr:last #down").css('display', 'none');
    }

}