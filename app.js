const axios = require('axios');

function mailerSend(options) {
    return {
        send: async function (data) {
            let { apiKey, from, fromName } = {
                apiKey: String(options.apiKey),
                from: String(options.from),
                fromName: String(options.fromName)
            };

            if(!apiKey || !from || !fromName) return { status: false, message: 'Missing required options' };
            
            try {
                let { to, subject, html } = data;
                if(!to || !subject || !html) return { status: false, message: 'Missing required data' };

                let response = await axios.post('https://api.mailersend.com/v1/email', {
                    from: {
                        email: from,
                        name: fromName
                    },
                    to: [
                        {
                            email: to
                        }
                    ],
                    subject: subject,
                    html: html
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    }
                });

                if(response.status === 200 || response.status === 202) return { status: true, message: 'Mail sent' };
                else return { status: false, message: 'Mail not sent' };

            } catch (e) {
                return { status: false, message: 'Mail not sent' };
            }
        }
    }
}

function sendGrid(options) {
    return {
        send: async function (data) {
            let { apiKey, from, fromName } = {
                apiKey: String(options.apiKey),
                from: String(options.from),
                fromName: String(options.fromName)
            };

            if(!apiKey || !from || !fromName) return { status: false, message: 'Missing required options' };
            
            try {
                let { to, subject, html } = data;
                if(!to || !subject || !html) return { status: false, message: 'Missing required data' };

                let response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
                    personalizations: [
                        {
                            to: [
                                {
                                    email: to
                                }
                            ],
                            subject: subject
                        }
                    ],
                    from: {
                        email: from,
                        name: fromName
                    },
                    content: [
                        {
                            type: 'text/html',
                            value: html
                        }
                    ]
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    }
                });

                if(response.status === 200 || response.status === 202) return { status: true, message: 'Mail sent' };
                else return { status: false, message: 'Mail not sent' };

            } catch (e) {
                return { status: false, message: 'Mail not sent' };
            }
        }
    }
}

function mailjet(options) {
    return {
        send: async function (data) {
            let { apiKey, apiSecret, from, fromName } = {
                apiKey: String(options.apiKey),
                apiSecret: String(options.apiSecret),
                from: String(options.from),
                fromName: String(options.fromName)
            };

            if(!apiKey || !apiSecret || !from || !fromName) return { status: false, message: 'Missing required options' };
            
            try {
                let { to, subject, html } = data;
                if(!to || !subject || !html) return { status: false, message: 'Missing required data' };

                let response = await axios.post('https://api.mailjet.com/v3.1/send', {
                    Messages: [
                        {
                            From: {
                                Email: from,
                                Name: fromName
                            },
                            To: [
                                {
                                    Email: to
                                }
                            ],
                            Subject: subject,
                            HTMLPart: html
                        }
                    ]
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`
                    }
                });

                if(response.status === 200 || response.status === 202 || response.data.Messages[0].Status === 'success') return { status: true, message: 'Mail sent' };
                else return { status: false, message: 'Mail not sent' };

            } catch (e) {
                return { status: false, message: 'Mail not sent' };
            }
        }
    }
}

function brevo(options) {
    return {
        send: async function (data) {
            let { apiKey, from, fromName } = {
                apiKey: String(options.apiKey),
                from: String(options.from),
                fromName: String(options.fromName)
            };

            if(!apiKey || !from || !fromName) return { status: false, message: 'Missing required options' };
            
            try {
                let { to, subject, html } = data;
                if(!to || !subject || !html) return { status: false, message: 'Missing required data' };

                let response = await axios.post('https://api.brevo.com/v3/smtp/email', {
                    sender: {
                        email: from,
                        name: fromName
                    },
                    to: [
                        {
                            email: to
                        }
                    ],
                    subject: subject,
                    htmlContent: html
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': String(apiKey)
                    }
                });

                if(response.status === 200 || response.status === 202 || response.data.messageId) return { status: true, message: 'Mail sent' };
                else return { status: false, message: 'Mail not sent' };

            } catch (e) {
                return { status: false, message: 'Mail not sent' };
            }
        }
    }
}

function postmark(options) {
    return {
        send: async function (data) {
            let { apiKey, from, fromName } = {
                apiKey: String(options.apiKey),
                from: String(options.from),
                fromName: String(options.fromName)
            };

            if(!apiKey || !from || !fromName) return { status: false, message: 'Missing required options' };
            
            try {
                let { to, subject, html } = data;
                if(!to || !subject || !html) return { status: false, message: 'Missing required data' };

                let response = await axios.post('https://api.postmarkapp.com/email', {
                    From: from,
                    To: to,
                    Subject: subject,
                    HtmlBody: html
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Postmark-Server-Token': apiKey
                    }
                });

                if(response.status === 200 || response.status === 202 || response.data.messageId) return { status: true, message: 'Mail sent' };
                else return { status: false, message: 'Mail not sent' };
            } catch (e) {
                return { status: false, message: 'Mail not sent' };
            }
        }
    }
}


module.exports = function () {
    return {
        init: function (options) {
            this.options = options;
        },
        send: function (data) {
            switch (this.options.provider.toLowerCase()) {
                case 'mailersend':
                    return mailerSend(this.options).send(data);
                case 'sendgrid':
                    return sendGrid(this.options).send(data);
                case 'mailjet':
                    return mailjet(this.options).send(data);
                case 'brevo':
                    return brevo(this.options).send(data);
                case 'postmark':
                    return postmark(this.options).send(data);
                default:
                    return { status: false, message: 'Provider not found' };
            }
        }
    }
}();