//  Inbound data
// [
//   {"id": 1, "type": "alert", "message": "System update required", "priority": 3, "isRead": false},
//   {"id": 2, "type": "info", "message": "New feature available", "priority": 1, "isRead": true},
//   {"id": 3, "type": "alert", "message": "Security warning", "priority": 5, "isRead": false},
//   {"id": 4, "type": "message", "message": "You have a new message", "priority": 4, "isRead": false},
//   {"id": 5, "type": "info", "message": "Maintenance scheduled", "priority": 2, "isRead": false},
//   {"id": 6, "type": "message", "message": "Message from admin", "priority": 2, "isRead": true},
// ]
// Result example:
// [
//   [
//     {"id": 3, "type": "alert", "message": "Security warning", "priority": 5, "isRead": false},
//     {"id": 1, "type": "alert", "message": "System update required", "priority": 3, "isRead": false},
//   ],
//   [
//     {"id": 4, "type": "message", "message": "You have a new message", "priority": 4, "isRead": false},
//   ],
//   [
//     {"id": 5, "type": "info", "message": "Maintenance scheduled", "priority": 2, "isRead": false},
//   ],
// ]

export interface Notification {
  id: number;
  type: string;
  message: string;
  priority: number;
  isRead: boolean;
}

export function organizeNotifications(
  notifications: Notification[]
): Notification[][] {
  let organized: Notification[][] = [];
  // please write your code here...
  let unReadNotifications = notifications.filter((item) => {
    return !item.isRead;
  });
  const unreadAlert: Notification[] = [];
  const unreadInfo: Notification[] = [];
  const unreadMsg: Notification[] = [];
  //const sortedHonorRollByGrade = honorRoll.sort((a, b) => a.grade - b.grade);
  unReadNotifications.filter((item) => {
    if (item.type == 'alert') {
      unreadAlert.push(item);
    }
    if (item.type == 'info') {
      unreadInfo.push(item);
    }
    if (item.type == 'message') {
      unreadMsg.push(item);
    }
  });
  organized = [[...unreadAlert], [...unreadInfo], [...unreadMsg]];
  console.log(organized);
  return organized;
}
