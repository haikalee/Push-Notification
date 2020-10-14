self.addEventListener('push', e => {
    let body;
    if (e.data) {
        body = e.data.text();
    } else {
        body = 'push message no payload';
    }

    const options = {
        body: body,
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    }

    e.waitUntil(
        self.registration.showNotification('Push Notification', options)
    )
})
// {"publicKey":"BGvB8hLdyp0gSkO4l6rvAdfxHsgn7wl_kJ4MlU9z7wm9g9tJxYE1wwLAHQs4h0h6SrG8SfFbcmMVy5kpiMqq1X4","privateKey":"qHn3R_WE_wfcdGQoct4EBMJlR5PtTyHaW6PMWi2aQGA"}
// {"publicKey":"BBp_S2YSz9iXyXMELKU3zB7Du3YEOZr_74J9tNwKcIJaklUr7hExAGn0yTy_te-PmDdxAZxrWoI8eBzZ97kZcAI","privateKey":"5EwGq4ziA0ATs7V2b5Zput1pcHrTaX8m3pTn0KvKWAo"}
