const Observer = require('./Observer');

class NotificationService extends Observer {
  update(amount) {
    console.log(`[NOTIFY] Sending notification: Transaction of $${amount} completed.`);
  }
}

module.exports = NotificationService;
