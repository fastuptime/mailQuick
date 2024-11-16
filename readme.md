# 📬 mailQuick

**mailQuick** is a versatile email sending module for Node.js that supports multiple email service providers. Whether you use MailerSend, SendGrid, Mailjet, Brevo, or Postmark, `mailQuick` simplifies sending emails through a unified interface. 🚀

## 🔧 Installation

To get started with `mailQuick`, you need to install it via npm:

```bash
npm install mailquick
```

## 🛠️ Configuration

To use `mailQuick`, you'll need to initialize it with your email service provider's credentials. Here's a brief guide on how to configure each supported provider:

### 📧 Supported Providers

- **MailerSend**
- **SendGrid**
- **Mailjet**
- **Brevo**
- **Postmark**

### 📜 Example Configuration

Here's how you can set up `mailQuick` for different providers:

```javascript
const mailQuick = require('mailquick');

// Initialize with provider and credentials
mailQuick.init({
    provider: 'sendgrid',
    apiKey: 'your-sendgrid-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});

// Send an email
mailQuick.send({
    to: 'recipient@example.com',
    subject: 'Hello World',
    html: '<p>This is a test email sent using mailQuick!</p>'
}).then(response => {
    console.log(response); // { status: true, message: 'Mail sent' }
}).catch(error => {
    console.error(error); // { status: false, message: 'Mail not sent' }
});
```

### 🛠️ Provider-Specific Setup

#### MailerSend

```javascript
mailQuick.init({
    provider: 'mailersend',
    apiKey: 'your-mailersend-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

#### SendGrid

```javascript
mailQuick.init({
    provider: 'sendgrid',
    apiKey: 'your-sendgrid-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

#### Mailjet

```javascript
mailQuick.init({
    provider: 'mailjet',
    apiKey: 'your-mailjet-api-key',
    apiSecret: 'your-mailjet-api-secret',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

#### Brevo

```javascript
mailQuick.init({
    provider: 'brevo',
    apiKey: 'your-brevo-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

#### Postmark

```javascript
mailQuick.init({
    provider: 'postmark',
    apiKey: 'your-postmark-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

## 🌐 Usage

Use the `send` method to dispatch an email. The required parameters are:

- `to` - Recipient email address.
- `subject` - Email subject.
- `html` - Email body in HTML format.

Example:

```javascript
mailQuick.send({
    to: 'recipient@example.com',
    subject: 'Welcome!',
    html: '<p>Thanks for signing up with mailQuick!</p>'
}).then(response => {
    console.log(response); // { status: true, message: 'Mail sent' }
}).catch(error => {
    console.error(error); // { status: false, message: 'Mail not sent' }
});
```

## 🛡️ Error Handling

If something goes wrong, `mailQuick` will return an object with `status: false` and a corresponding error message. Always handle these responses to ensure proper error management.

## 💬 Contributing

We welcome contributions to `mailQuick`! If you have suggestions, bug fixes, or improvements, please submit a pull request or open an issue on our [GitHub repository](https://github.com/fastuptime/mailQuick).

## 📝 License

`mailQuick` is licensed under the MIT License. See [LICENSE](LICENSE) for more details.

## 👋 Acknowledgments

Special thanks to the maintainers and contributors of the email service providers' APIs for making this package possible.
