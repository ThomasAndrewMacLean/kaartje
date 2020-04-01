const loadWensen = async () => {
    const wJson = await fetch(
        'https://europe-west1-wie-is-het-264722.cloudfunctions.net/getWensen'
    );
    const wensen = await wJson.json();
    let template = require('./wensen.pug');

    let locals = {
        wensen: wensen.wensen
    };
    document.querySelector('.wensen').innerHTML = template(locals);
};

loadWensen();
