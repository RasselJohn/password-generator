;(function () {
    window.SCRIPT_CONST = {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        digits: "0123456789",
        symbols: "+-_!",
    };

    document.getElementById("clipboardButton").addEventListener("click", (event) => {
        document.getElementById('password').select();
        document.execCommand('copy');
    });

    document.getElementById("length").addEventListener("input", (event) => {
        document.getElementById("lengthValue").innerHTML = event.currentTarget.value;
    });

    document.getElementById("submit").addEventListener("click", (event) => {
        document.getElementById('password').value = '';

        let suits = [];
        if (document.getElementById("useLetters").checked) {
            // it need for most probability of getting letter
            suits.push(window.SCRIPT_CONST.alphabet);
            suits.push(window.SCRIPT_CONST.alphabet);
        }

        if (document.getElementById("useDigits").checked) {
            suits.push(window.SCRIPT_CONST.digits);
        }

        if (document.getElementById("useSymbols").checked) {
            suits.push(window.SCRIPT_CONST.symbols);
        }

        if (suits.length === 0) {
            alert('None of switches was chosen!');
            return;
        }

        let result = [];
        let count = +document.getElementById("length").value;
        for (let i = 0; i < count; i++) {
            let curr_suit = suits[Math.floor(Math.random() * suits.length)];
            result.push(curr_suit.charAt(Math.floor(Math.random() * curr_suit.length)));
        }
        document.getElementById("password").value = result.join('');
    });

    document.getElementById("exit").addEventListener("click", (event) => {
        //It does not work in browser - only in app!
        let electron = require('electron');
        electron.remote.getCurrentWindow().close();
    });
})();