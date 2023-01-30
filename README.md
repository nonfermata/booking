# Enjoy Booking

Проект, разработанный на библиотеке ReactJS, представляющий собой приложение для бронирования номеров в отеле.

Автор:  [Дмитрий Баулин](https://github.com/nonfermata)

E-mail: [nonfermata@gmail.com](mailto:nonfermata@gmail.com)

## Используемые технологии, модули и библиотеки

+ ReactJS
+ React Router Dom (версия 5.3.0)
+ Redux
+ React-Redux
+ Redux Toolkit
+ Axios
+ Moment
+ Lodash
+ React Toastify
+ FireBase
+ PropTypes
+ Prettier
+ ESLint

***

## Основной функционал

### Без входа / регистрации доступны: 

 + домашняя страница
 + страница просмотра всех комнат (реализована пагинация)
 + страницы каждой отдельно комнаты с подробным описанием (реализован слайдер)
 + страница "Контакты"
 + страница входа / регистрации
  
Сделан вывод предупреждения (при первом входе) об использовании на сайте файлов cookies.

### Вход / регистрация в качестве обычного пользователя (не админа).

1. У каждой комнаты появляется опция добавить её в "Избранное" (также удалить из "Избранного").
2. Открывается возможность бронирования комнат.
3. Доступно меню профиля, где можно:
	 + посмотреть свои бронирования, внести в них изменения или удалить
	 + посмотреть свой список "Избранного" и редактировать его
	 + редактировать свой профиль
	 + выйти

### Вход в качестве админа.
1. Закрывается возможность бронирования (админу это не нужно).
2. Так же доступен свой список "Избранного", как и для обычных пользователей.
3. Появляется админ-панель, где видны все бронирования, с возможностью их редактировать или удалять.

## Обработка ошибок и корректного отображения

### Ввод данных пользователем.

1. Для текстовых полей (кроме ввода номера телефона) реализована валидация.
2. Ввод номера телефона – отдельная функция, не позволяющая вводить НЕ цифры. Активация подтверждения лишь в случае, когда количество введенных цифр – 10.
3. Ввод даты рождения – функция, исключающая ввод дня, которого в месяце не существует (напр. 31 апреля). Високосные года учтены.
4. Не получится зарегистрироваться несовершеннолетним пользователям.

### Ввод данных при бронировании.
1. Доступный диапазон дат для бронирования – 6 месяцев, включая текущий месяц. Это число можно изменить, изменив соответствующую константу в коде.
2. Заезд возможен, начиная с текущей даты (сегодняшний день).
3. Выезд возможен, начиная с даты, следующей за заездом (таким образом минимальный срок бронирования – 1 ночь). Если дата заезда не установлена, выезд возможен, начиная с затрашнего дня.
4. Если вводится дата заезда, которая позже уже установленной даты выезда, – дата выезда сбрасывается.
5. В случае выбора номера, вместимость которого меньше указанного количества гостей, – бронирование невозможно, выдается соответствующее сообщение.
6. В случае выбора номера, который занят на выбранные даты, – бронирование невозможно, выдается соответствующее сообщение.

### Отображение уже оформленных бронирований.
1. У каждого бронирования отображается статус. Варианты статуса:
    + завершено
    + сейчас
    + предстоящее
    + отменено пользователем
    + отменено администратором
2. В зависимости от статуса отображается (или не отображаются) опции редактирования.
3. Для админа отображаются контактные данные пользователя (чьё бронирование).
4. Работает функция правильных склонений – 1 гость, 2 гостя, 5 гостей, 3 человека, 11 ночей, 4 ночи и т. д.

### Редактирование и protected-роуты.
1. Нельзя увидеть или внести правки в чужие бронирования, если ты не админ. При попытке зайти на них по ссылке выдается соответствующее сообщение.
2. Нельзя (даже админу) редактировать завершенные или отмененные бронирования. При попытке зайти на них по ссылке выдается соответствующее сообщение.
3. При редактировании бронирования в календаре недоступны даты, которые либо заняты, либо уже прошли.
4. При редактировании протекающего сейчас бронирования (дата заезда уже наступила, а дата выезда ещё нет) дату заезда изменить нельзя.
5. При отмене бронирования требуется дополнительное подтверждение – всплывающее окно с кнопками "Подтвердить / Отменить".
6. При редактировании профиля (как и при регистрации) нельзя ввести e-mail, если с таким e-mail уже есть зарегистрированный пользователь.

***

## Как запустить проект

1. Сделать клон проекта с GitHub »
   `git clone https://github.com/nonfermata/my-bookings.git`
2. Перейти в папку с проектом » `cd my-bookings`
3. Установить зависимости »
   `npm install`
4. Запустить проект »
   `npm start`
