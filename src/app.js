import './styles.css';

const loadWensen = async () => {
    const wJson = await fetch(
        'https://europe-west1-wie-is-het-264722.cloudfunctions.net/getWensen'
    );
    const wensen = await wJson.json();
    let template = require('./wensen.pug');

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    let locals = {
        wensen: shuffle(wensen.wensen)
    };
    document.querySelector('.wensen').innerHTML = template(locals);
};

loadWensen();
