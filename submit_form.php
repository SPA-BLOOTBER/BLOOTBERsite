<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Настройки для отправки email
    $to = "pashasob2009@gmail.com"; // Замените на ваш email
    $subject = "Новое сообщение с сайта";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Содержание письма
    $email_content = "<h2>Новое сообщение</h2>";
    $email_content .= "<p><strong>Имя:</strong> $name</p>";
    $email_content .= "<p><strong>Email:</strong> $email</p>";
    $email_content .= "<p><strong>Сообщение:</strong> $message</p>";

    // Отправка email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Некорректный запрос.";
}
?>