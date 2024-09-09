# 📬 mailQuick

**mailQuick**, Node.js için çok yönlü bir e-posta gönderim modülüdür ve birden fazla e-posta servis sağlayıcısını destekler. İster MailerSend, SendGrid, Mailjet, Brevo veya Postmark kullanıyor olun, `mailQuick` tüm bu sağlayıcılar için birleşik bir arayüz sunar. 🚀

## 🔧 Kurulum

`mailQuick`'i kullanmaya başlamak için, npm aracılığıyla yüklemeniz gerekir:

```bash
npm install mailquick
```

## 🛠️ Yapılandırma

`mailQuick`'i kullanmak için, e-posta servis sağlayıcınızın kimlik bilgileri ile başlatmanız gerekir. İşte her desteklenen sağlayıcı için yapılandırma rehberi:

### 📧 Desteklenen Sağlayıcılar

- **MailerSend**
- **SendGrid**
- **Mailjet**
- **Brevo**
- **Postmark**

### 📜 Örnek Yapılandırma

Farklı sağlayıcılar için `mailQuick`'i nasıl yapılandırabileceğinizi gösteren örnekler:

```javascript
const mailQuick = require('mailquick');

// Sağlayıcı ve kimlik bilgileri ile başlat
const mailer = mailQuick.init({
    provider: 'sendgrid',
    apiKey: 'your-sendgrid-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});

// E-posta gönder
mailer.send({
    to: 'recipient@example.com',
    subject: 'Merhaba Dünya',
    html: '<p>Bu mail, mailQuick kullanılarak gönderildi!</p>'
}).then(response => {
    console.log(response); // { status: true, message: 'Mail gönderildi' }
}).catch(error => {
    console.error(error); // { status: false, message: 'Mail gönderilemedi' }
});
```

### 🛠️ Sağlayıcıya Özgü Yapılandırma

#### MailerSend

```javascript
const mailer = mailQuick.init({
    provider: 'mailersend',
    apiKey: 'your-mailersend-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

#### SendGrid

```javascript
const mailer = mailQuick.init({
    provider: 'sendgrid',
    apiKey: 'your-sendgrid-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

#### Mailjet

```javascript
const mailer = mailQuick.init({
    provider: 'mailjet',
    apiKey: 'your-mailjet-api-key',
    apiSecret: 'your-mailjet-api-secret',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

#### Brevo

```javascript
const mailer = mailQuick.init({
    provider: 'brevo',
    apiKey: 'your-brevo-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

#### Postmark

```javascript
const mailer = mailQuick.init({
    provider: 'postmark',
    apiKey: 'your-postmark-api-key',
    from: 'your-email@example.com',
    fromName: 'Your Name'
});
```

## 🌐 Kullanım

Bir e-posta göndermek için `send` metodunu kullanabilirsiniz. Gerekli parametreler şunlardır:

- `to` - Alıcı e-posta adresi.
- `subject` - E-posta konusu.
- `html` - E-posta içeriği HTML formatında.

Örnek:

```javascript
mailer.send({
    to: 'recipient@example.com',
    subject: 'Hoşgeldiniz!',
    html: '<p>mailQuick ile kayıt olduğunuz için teşekkür ederiz!</p>'
}).then(response => {
    console.log(response); // { status: true, message: 'Mail gönderildi' }
}).catch(error => {
    console.error(error); // { status: false, message: 'Mail gönderilemedi' }
});
```

## 🛡️ Hata Yönetimi

Bir sorun oluşursa, `mailQuick` size `status: false` ve ilgili bir hata mesajı içeren bir nesne döndürecektir. Her zaman bu yanıtları işleyerek uygun hata yönetimi yapmalısınız.

## 💬 Katkıda Bulunma

`mailQuick`'e katkıda bulunmak için pull request gönderebilir veya [GitHub depomuzda](https://github.com/fastuptime/mailQuick) bir sorun açabilirsiniz.

## 📝 Lisans

`mailQuick`, MIT Lisansı altında lisanslanmıştır. Daha fazla ayrıntı için [LICENSE](LICENSE) dosyasına bakabilirsiniz.

## 👋 Teşekkürler

Bu paketi mümkün kılan e-posta servis sağlayıcılarının bakımcılarına ve katkıda bulunanlarına özel teşekkürler.