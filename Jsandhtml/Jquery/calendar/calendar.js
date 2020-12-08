function calendar([day, month, year]) {
    var givenDate = new Date(year, Number(month) - 1, day);
    let cl = $('<table>')
        .append('<caption>January 2017</caption>')




    let calenderBody = $("<tbody>")
        .append($('<tr>')
            .append('<th>Mon</th>')
            .append('<th>Tue</th>')
            .append('<th>Wed</th>')
            .append('<th>Thu</th>')
            .append('<th>Fri</th>')
            .append('<th>Sat</th>')
            .append('<th>Sun</th>')
        );
    cl.append(calenderBody);

    var currentDate = new Date(year, Number(month) - 1, 1);
    var nextMonth = new Date(year, month, 1).getMonth();
    let previousMonth = new Date(year, month - 2, 1).getMonth();
    let lastDayOfPreviousMonth = new Date(year, month - 1, 0).getDate();

    if (currentDate.getDay() !== 1) {
        currentDate = new Date(year, month - 2, lastDayOfPreviousMonth - currentDate.getDay() - 5);
    }
    let currentRow = $('<tr>')
    while (currentDate.getDay() != 1 || currentDate.getMonth() !== nextMonth) {
        if (currentDate.getDay() === 1) {
            currentRow = $('<tr>')
        }
        if (currentDate.getMonth() === previousMonth) {
            currentRow.append("<td></td>")
        }
        else if (currentDate.getMonth() === nextMonth) {
            currentRow.append("<td></td>")
        }
        else if (currentDate.getDate() === givenDate.getDate() &&
            currentDate.getMonth() === givenDate.getMonth()) {
            currentRow.append("<td class='today'>" + currentDate.getDate() + "</td>")
        }
        else {
            currentRow.append("<td>" + currentDate.getDate() + "</td>")
        }
        if (currentDate.getDay() === 0) {
            calenderBody.append(currentRow);
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    $("#content").append(cl);

}
