// Copyright 2018-present 650 Industries. All rights reserved.

#import <EXNotifications/EXNotificationsModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface EXNotificationsModule (UNSerializer)

+ (NSDictionary *)serializedNotification:(UNNotification *)notification;
+ (NSDictionary *)serializedNotificationResponse:(UNNotificationResponse *)notificationResponse;

@end

NS_ASSUME_NONNULL_END
