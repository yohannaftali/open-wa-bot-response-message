const { create, Client } = require('@open-wa/wa-automate')

const start = (client = new Client()) => {
    console.log('User Login!');
    client.onMessage(async message => {
        if (message.body === 'Hi') {
            await client.sendText(message.from, '👋 Hi');
        }
    });
};

const launchConfig = {
    useChrome: true,
    autoRefresh: true,
    cacheEnabled: false,
    sessionId: 'Wa-Test-Session',
    headless: true,
    qrTimeout: 30,
    authTimeout: 30,
    qrRefreshS: 10,
    restartOnCrash: start,
    killProcessOnBrowserClose: true,
    throwErrorOnTosBlock: false,
    chromiumArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache', '--disable-offline-load-stale-cache', '--disk-cache-size=0']
};

create(launchConfig).then(async client => await start(client)).catch((err) => new Error(err));
