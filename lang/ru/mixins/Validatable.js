export default {
  props: {
    error: 'Вставляет состояние ошибки в ввод вручную',
    errorMessages: 'Вставляет состояние ошибки в ввод и передает пользовательские сообщения об ошибках. Будет сочетаться с любыми валидациями, которые возникают из **rules**. Это поле не инициирует проверку',
    rules: 'Массив функций, возвращающих _True_ или _String_ с сообщением об ошибке',
    validateOnBlur: 'Задержка проверки до размытия'
  }
}
