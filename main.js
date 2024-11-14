$(document).ready(function () {
    var totalAmount = 0; 

    function updateWallet() {
        $('#wallet').text('Wallet: $' + totalAmount.toFixed(2));
    }

    $('#btn-honda').click(function () {
        var buttonText = $(this).text();
        var price = 10000; 

        if (buttonText === 'buy') {
            $(this).text('added');
            $(this).css('background-color', 'green'); 
            totalAmount += price; 
            updateWallet(); 
        } else {
            $(this).text('buy');
            $(this).css('background-color', '#020202'); 
            totalAmount -= price; 
            updateWallet(); 
        }
    });

    $('#btn-kawasaki').click(function () {
        var buttonText = $(this).text();
        var price = 12000; 

        if (buttonText === 'buy') {
            $(this).text('added');
            $(this).css('background-color', 'green');
            totalAmount += price;
            updateWallet();
        } else {
            $(this).text('buy');
            $(this).css('background-color', '#020202');
            totalAmount -= price;
            updateWallet();
        }
    });

    $('#btn-suzuki').click(function () {
        var buttonText = $(this).text();
        var price = 11000; 

        if (buttonText === 'buy') {
            $(this).text('added');
            $(this).css('background-color', 'green');
            totalAmount += price;
            updateWallet();
        } else {
            $(this).text('buy');
            $(this).css('background-color', '#020202');
            totalAmount -= price;
            updateWallet();
        }
    });
});


