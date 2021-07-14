let min = 1;
let max = 6;
let random = Math.floor(Math.random() * (max - min)) + min;
let alertClass;
switch (random) {
    case 1:
        alertClass = 'secondary';
        break;
    case 2:
        alertClass = 'danger';
        break;
    case 3:
        alertClass = 'success';
        break;
    case 4:
        alertClass = 'warning';
        break;
    case 5:
        alertClass = 'info';
        break;
    case 6:
        alertClass = 'light';
        break;
}
$(function () {
    let socket = io.connect();
    let $form = $("#messForm");
    let $name = $("#name");
    let $textarea = $("#message");
    let $all_messages = $("#all_mess");
    $form.submit(function (event) {
        event.preventDefault();
        socket.emit('send mess', {
            mess: $textarea.val(),
            name: $name.val(),
            className: alertClass
        });
        $textarea.val('');
    });

    socket.on('add mess', function (data) {
        $all_messages.append("<div class='alert alert-" + data.className + "'><b>" + data.name + "</b>: " + data.mess + "</div>");
    });
});