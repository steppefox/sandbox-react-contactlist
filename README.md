# Test Application With React + Redux + TS

Task:

[EN]: Implement a contact list in a messanger.  There's can be infinite amount of users in the list.

Contact block UI should contain:

1. Username
2. Text of the last message
3. Date of the last message
4. Number of unread messages

The contact list should be sorted by the date of the last message. By clicking on the user, messages should be marked as read.

When you open the page, contact list must contain at least 1000 users. On the same page, you need to add control buttons which abstractly implement server side events:

1. New message from a user, which doesn't exist in the list
2. New message from a user from last top 10 contacts
3. New message from a random user from the contacts list

[RU]: Реализовать список собеседников в чате. В списке неограниченное кол-во пользователей.

Элемент списка должен содержать:

1. Имя пользователя
2. Текст последнего сообщения
3. Дата последнего сообщения
4. Кол-во непрочитанных сообщений

Сортировка списка по дате последнего сообщения. По клику на пользователя все сообщения необходимо отметить как прочитанные.

При открытии страницы должны быть отображены тестовые данные: 1000 пользователей. На той же странице добавить нескольких тестовых кнопок, которые инициируют события с сервера:
1. Новое сообщение от пользователя, которого еще нет в списке
2. Новое сообщение от одного из последних 10 собеседников
3. Новое сообщение от случайного пользователя

## Stack

* FuseBox - alternative builder
* React - UI templating
* Redux - Data storage
* TypeScript - types are cool
* Styled Components - CSS in JS implementation
