$(document).ready(function() {
    console.log('script.js sourced');

    //global vars
    var redQuantity = 0;
    var yellowQuantity = 0;
    var greenQuantity = 0;
    var blueQuantity = 0;

    //add color square on-click
    $('.color-button').on('click', function() {
        //specify selected color
        var selectedColor = $(this).attr('data-color');
        console.log('Clicked on', selectedColor);

        //increment related counter
        switch (selectedColor) {
            case 'red':
                redQuantity++;
                $('#red').empty();
                $('#red').append('Total red: ' + redQuantity);
                //append color square to DOM in container div
                $('.container').append('<div class="color-cube red" data-color="red"></div>');
                break;

            case 'yellow':
                yellowQuantity++;
                $('#yellow').empty();
                $('#yellow').append('Total yellow: ' + yellowQuantity);
                //append color square to DOM in container div
                $('.container').append('<div class="color-cube yellow" data-color="yellow"></div>');
                break;

            case 'green':
                greenQuantity++;
                $('#green').empty();
                $('#green').append('Total green: ' + greenQuantity);
                //append color square to DOM in container div
                $('.container').append('<div class="color-cube green" data-color="green"></div>');
                break;

            case 'blue':
                blueQuantity++;
                $('#blue').empty();
                $('#blue').append('Total blue: ' + blueQuantity);
                //append color square to DOM in container div
                $('.container').append('<div class="color-cube blue" data-color="blue"></div>');
                break;

            default:
                console.log('That is odd...');
        } //end switch
    }); // end add on-click

    //delete square on-click
    $('.container').on('click', '.color-cube', function() {
            $(this).remove();

            //decrement related counter
            selectedColor = $(this).attr('data-color');
            switch (selectedColor) {
                case 'red':
                    redQuantity--;
                    $('#red').empty();
                    $('#red').append('Total red: ' + redQuantity);
                    break;

                case 'yellow':
                    yellowQuantity--;
                    $('#yellow').empty();
                    $('#yellow').append('Total yellow: ' + yellowQuantity);
                    break;

                case 'green':
                    greenQuantity--;
                    $('#green').empty();
                    $('#green').append('Total green: ' + greenQuantity);
                    break;

                case 'blue':
                    blueQuantity--;
                    $('#blue').empty();
                    $('#blue').append('Total blue: ' + blueQuantity);
                    break;

                default:
                    console.log('That is strange...');
            } //end switch
        }); //end delete on-click
}); //end doc ready
