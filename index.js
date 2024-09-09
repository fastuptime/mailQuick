let mailQuick = require('mailquick');

mailQuick.init({
    provider: 'postmark',
    apiKey: '',
    from: 'info@speedsmm.com',
    fromName: 'Test'
});

(async () => {
    let response = await mailQuick.send({ to: 'fastuptime@gmail.com', subject: 'Test', html: '<h1>test</h1>' });
    console.log(response);
})();