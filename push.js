const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BBp_S2YSz9iXyXMELKU3zB7Du3YEOZr_74J9tNwKcIJaklUr7hExAGn0yTy_te-PmDdxAZxrWoI8eBzZ97kZcAI",
    "privateKey": "5EwGq4ziA0ATs7V2b5Zput1pcHrTaX8m3pTn0KvKWAo"
}

webPush.setVapidDetails('mailto:haikalnwn996@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/ehUE7_Ilw5U:APA91bE_GeNHEq5ReejA9wzkCqB6VGGxD7H6yFHx3Q8EvdZ5VUP1GrSW_57W4wAfl66ir6HSFtVE4F0YVVet011h8_d9flxOLsM7pEtT3VohrDCJ2lsBfqKkSqJHrhAvN6lTDyau_n0H",
    // "endpoint": "https://sg2p.notify.windows.com/w/?token=BQYAAAAwk5UJA1AFgQyCoUnbdh6HdkIBUJKM7%2bSDFltqpvvpXtRUDKQKyWk6s9Y5HJE3Xq8AuEg9MqN%2bny4iNw6eBc85%2bkCFZaTUfAedCeojchK1Iyu2E6X%2fr0UObt5VApC5E7%2bMlx7vP7lFqIDAm1UyQXu2F0YStRYZ1qnFa9rkjWkUJh3PfjSz2Z4%2fZEfASUdDJwYKnaescguxDDPq%2b1rEDaf8p6ZcLVdREKnuwh7o5oah7kMRRG42%2f0dVekbwYVOchehQQivydlu%2fE1g3DoBEPFHpsu0UFPAwLOOaF3x8vlNCQDrnd4Whs3Y5OX6nQs0vQCY%3d",
    "keys": {
        "p256dh": "BNDm3Wb204Xw9Sc6YcU1r+oGnVJEGBwnsw7EuuSB6g2VPRSqNHPlR4dOcqQ9t2e7ePJEAWkkoBUkjukWAAzNilc=",
        "auth": "S4MO2e3c8+bWQDlEotvxyA=="
        // "p256dh": "BMt7t+X7Mb/SjaC5xU75yIopbzwJwjgdTLJodn6uNe1ObPlWzBHOuu8yAToAXjcUbCz3VzcjbIRi4mF8XaZh/I4=",
        // "auth": "KgXVHCRRInkrkKn/4sdWNg=="
    }
}

const payload = 'Selamat Anda sudah bisa menerima notifikasi';
const options = {
    gcmAPIKey: "516357651032",
    TTL: 60
}

webPush.sendNotification(pushSubscription, payload, options).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
});