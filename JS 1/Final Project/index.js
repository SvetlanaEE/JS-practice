let name;
let age;
let subscription;
let lastLogin;

function validateAge(age) {
    if (typeof age !== "number" || age <= 0) {
        return "Введите Ваш возраст цифрой, больше 0"
    }
    if (age < 18) {
        return "Вы несовершеннолетний пользователь.";
    }
    return "Добро пожаловать!"
}

function validateName(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return "Нельзя добавить пустое поле 'Имя'";
    } return "Ваше имя корректно"
}

function validateSubscription(subscription) {
    if (subscription === "free" || subscription === "basic" || subscription === "premium") {
        return "Подписка правильная"
    } return "Введите корректное название подписки"

}

function getTimeOfDay(lastLogin) {
    if (lastLogin >= 5 && lastLogin <= 11) {
        return ("Утро")
    } else if (lastLogin >= 12 && lastLogin <= 17) {
        return ("День")
    } else if (lastLogin >= 18 && lastLogin <= 21) {
        return ("Вечер")
    } else if ((lastLogin >= 22 && lastLogin <= 23) || (lastLogin <= 4 && lastLogin >= 0)) {
        return ("Ночь")
    } return ("Укажите время входа в промежутке от 0 до 23")
}

function getAccessLevel(subscription) {
    if (subscription === undefined || subscription === null) {
        return "Введите название подписки"
    }
    switch (subscription) {
        case "premium":
            return "Полный доступ";

        case "basic":
            return "Ограниченный доступ";

        case "free":
            return "Доступ только к бесплатному контенту";

        default:
            return "Введите корректное название подписки";
    }
}

function displayUserInfo(name, age, timeOfDay, accessLevel) {
    console.log(`Привет, ${name}! Вам ${age} лет. Сейчас ${timeOfDay}. Уровень доступа: ${accessLevel}.`)
}