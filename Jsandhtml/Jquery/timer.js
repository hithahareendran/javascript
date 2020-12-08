function timer() {
    let hr = $('#hours');
    let min = $('#minutes');
    let sec = $('#seconds');
    let timer = 0;
    function start() {
        timer = setInterval(step, 1000);
        $('#start-timer').off('click');
    }
    $('#start-timer').click(start);
    $('#stop-timer').click(function () {
        clearInterval(timer);
        $('#start-timer').click(start);
    });
    function step() {
        sec.val(+sec.val() + 1);
        if (sec.val() > 59) {
            sec.val('00');
            min.val(+min.val() + 1);
            min.text(formatTime(min.val()));
        }
        if (min.val() > 59) {
            min.val('00');
            hr.val(+hr.val() + 1);
            min.text(formatTime(min.val()));
            hr.text(formatTime(hr.val()));
        }
        sec.text(formatTime(sec.val()));
    }

    function formatTime(value) {
        let partial = `${('0' + value % 60).slice(-2)}`;
        return partial;
    }
}
