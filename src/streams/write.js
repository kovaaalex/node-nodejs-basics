import { createWriteStream } from 'fs';

const write = async () => {
  const filePath = 'src/streams/files/fileToWrite.txt';

  try {
    // Создаем поток записи в файл
    const writableStream = createWriteStream(filePath, { encoding: 'utf-8' });

    // Перенаправляем данные из stdin в файл
    process.stdin.pipe(writableStream);

    // Закрываем stdin через 10 секунд или по другой логике
    setTimeout(() => {
      process.stdin.end();  // Программно закрываем ввод
    }, 10000);

    // Обрабатываем завершение записи
    writableStream.on('finish', () => {
      console.log('Запись завершена.');
      process.exit(0);  // Явно завершаем процесс
    });

    // Обрабатываем ошибки
    writableStream.on('error', (error) => {
      console.error('Ошибка при записи в файл:', error.message);
      process.exit(1);  // Завершаем с ошибкой
    });

    // Проверка и установка режима stdin
    if (process.stdin.isTTY) {
      process.stdin.setEncoding('utf-8');
      console.log('Введите текст и нажмите Ctrl+D для завершения ввода (или подождите 10 секунд):');
      process.stdin.resume();  // Перевод stdin в потоковый режим
    }

  } catch (error) {
    console.error('Ошибка:', error.message);
    process.exit(1);  // Завершаем с ошибкой
  }
};

// Вызов функции
await write();
