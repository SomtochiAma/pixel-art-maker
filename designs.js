// Select color input
// Select size input
//var gridHeight, gridWidth, color;

//color = $('#colorPicker').val();
// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
    $('#sizePicker').submit(function (event) {
        event.preventDefault();
        //removes the intoductory text, and displays the grid
        $('#intro').remove();
        var gridHeight = $('#inputHeight').val();
        var gridWidth = $('#inputWeight').val();
        makeGrid(gridHeight, gridWidth);
        toggleColor();
        
    });
});

//Adds table rows and column to make the grid
function makeGrid(height, width) {

    // Your code goes here!
    //The next line removes any grid that was present before.
    $('tr').remove();
    for(var i = 1; i <= height; i++) {
        pixelCanvas = $('#pixelCanvas');
        row = $('<tr class="row"></tr>');
        pixelCanvas.append(row);
        for (var j = 1; j <= width; j++) {
            //column = $('<td class="column" ></td>');
            $('tr').filter(':last').append('<td></td>');
        }
    }

}

//A function to remove or add color when the cell is clicked, if the color is laready there it is removed
function toggleColor() {
    $('td').click(function () {
        var gridColor = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color: ' + gridColor + ';')
        }
    })
}

$("#resetBtn").click(function() {
    $('td').removeAttr('style');
}
);

















