export type NotificationProps = {
  message: string;
  type: NotificationType;
  subText?: string;
  open?: boolean;
};

export enum NotificationType {
  SUCCESS,
  ERROR,
  WARNING,
}
