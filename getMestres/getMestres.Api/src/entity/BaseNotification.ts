export abstract class BaseNOtification {
  notificacions: Array<{ message: string }>;

  constructor() {
    this.notificacions = new Array<{ message: string }>();
  }

  AddNotification(message: string): void {
    this.notificacions.push({ message: message });
  }

  isTrue(value, message) {
    if (value) 
        this.notificacions.push({ message: message });
  }

  isRequired(value, message) {
    if (!value || value.lenght <= 0)
      this.notificacions.push({ message: message });
  }

  hasMinLen(value, min, message) {
    if (!value || value.lenght < min)
      this.notificacions.push({ message: message });
  }

  hasMaxLen(value, max, message) {
    if (!value || value.lenght > max)
      this.notificacions.push({ message: message });
  }
  isFixedLen(value, len, message) {
    if (value.lenght != len) 
        this.notificacions.push({ message: message });
  }

  isEmail(value, message) {
    var reg = new RegExp(/^\w+([-=.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value)) 
        this.notificacions.push({ message: message });
  }

  get allNotifications(): Array<{ message: string }> {
    return this.notificacions;
  }

  valid(): boolean {
    return this.notificacions.length == 0;
  }
}
