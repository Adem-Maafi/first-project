$(document).ready(function () {
    var totalAmount = 0; // Variable to hold the total amount

    function updateWallet() {
        $('#wallet').text('Wallet: $' + totalAmount.toFixed(2)); // Update wallet with the total amount
    }

    $('#btn-honda').click(function () {
        var buttonText = $(this).text();
        var price = 10000; // Price for Honda CBR1000RR 2019

        if (buttonText === 'buy') {
            $(this).text('added');
            $(this).css('background-color', 'green'); // Change button color to green
            totalAmount += price; // Add price to total
            updateWallet(); // Update the wallet display
        } else {
            $(this).text('buy');
            $(this).css('background-color', '#020202'); // Revert back to original color
            totalAmount -= price; // Subtract price from total
            updateWallet(); // Update the wallet display
        }
    });

    $('#btn-kawasaki').click(function () {
        var buttonText = $(this).text();
        var price = 12000; // Price for Kawasaki Ninja ZX-10R

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
        var price = 11000; // Price for Suzuki GSX-S1000S

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