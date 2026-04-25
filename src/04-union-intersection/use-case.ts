//! Use Case: Notification Sender using Union + Intersection

type EmailChannel = {
  type: "email";
  email: string;
};

type SmsChannel = {
  type: "sms";
  phone: string;
};

type PushChannel = {
  type: "push";
  deviceToken: string;
};

type NotificationChannel = EmailChannel | SmsChannel | PushChannel;

type Auditable = {
  createdAt: Date;
  sentBy: string;
};

type Notification = {
  id: string;
  title: string;
  body: string;
} & Auditable;

class NotificationService {
  private notifications: Notification[] = [];

  send(channel: NotificationChannel, title: string, body: string): Notification {
    const notification: Notification = {
      id: `not_${this.notifications.length + 1}`,
      title,
      body,
      createdAt: new Date(),
      sentBy: "system",
    };

    if (channel.type === "email") {
      console.log(`Email sent to ${channel.email}`);
    } else if (channel.type === "sms") {
      console.log(`SMS sent to ${channel.phone}`);
    } else {
      console.log(`Push sent to ${channel.deviceToken}`);
    }

    this.notifications.push(notification);
    return notification;
  }

  findAll(): Notification[] {
    return this.notifications;
  }
}

const service = new NotificationService();

service.send({ type: "sms", phone: "+963999999999" }, "Order Update", "Your order is shipped");
service.send(
  { type: "email", email: "user@example.com" },
  "Welcome",
  "Welcome to our platform",
);

console.log(service.findAll());
