```markdown
# Backend Project

Цей проект є серверною частиною, розробленою за допомогою Node.js та Express для роботи з файлами та MongoDB. Він використовує кілька бібліотек для управління запитами, завантаженнями файлів та базою даних.

## Опис

Сервер підтримує:

- Завантаження файлів
- Зберігання даних у MongoDB
- Обробку запитів через REST API

## Технології

- **Node.js**: середовище виконання JavaScript на сервері
- **Express**: веб-фреймворк для Node.js
- **Mongoose**: ODM (Object Data Modeling) для MongoDB
- **Multer**: middleware для обробки multipart/form-data, використовується для завантаження файлів
- **Express-fileupload**: проста middleware для завантаження файлів
- **Cors**: middleware для управління CORS
- **UUID**: генерація унікальних ідентифікаторів

## Вимоги

- Node.js (версія 14 або вище)
- MongoDB (для зберігання даних)

## Установка

1. Клонуйте репозиторій:
   ```bash
   git clone <URL>
   cd backend
   ```

2. Встановіть залежності:
   ```bash
   npm install
   ```

3. Налаштуйте з'єднання з MongoDB у вашому коді (необхідно вказати URI бази даних).

## Запуск

Для запуску проєкту використовуйте одну з наступних команд:

- У режимі продуктивності:
  ```bash
  npm start
  ```

- У режимі розробки (з автоматичним перезапуском сервера при внесенні змін):
  ```bash
  npm run dev
  ```

## Використання

Після запуску сервера ви можете робити запити до API, наприклад, за допомогою Postman або curl.


## Автор

- Максим Боровик

## Додаткова інформація

Для отримання додаткової інформації про використання бібліотек або технологій, що використовуються в цьому проекті, зверніться до відповідних документацій.

```
