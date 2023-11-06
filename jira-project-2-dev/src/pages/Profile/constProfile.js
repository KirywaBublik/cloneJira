export const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

export const formItemsProfile = [
    {
        id: 0,
        placeholder: "Введите новое имя",
        name: "name",
        label: "Имя",
        type: "text",
        options: {
            pattern: {
                value: /^\S*$/,
                message: 'В имени не должно быть пробела',
            },
            required: "Поле не заполнено"
        }
    },
    {
        id: 1,
        placeholder: "Введите новую фамилию",
        name: "surname",
        label: "Фамилия",
        type: "text",
        options: {
            required: "Поле не заполнено"
        }
    },
    {
        id: 2,
        placeholder: "Введите новую почту",
        name: "email",
        label: "Email",
        type: "text",
        options: {
            required: "Поле не заполнено",
            pattern: {
                value: regexEmail,
                message: 'Некорректная почта',
            },
        }
    },
    {
        id: 3,
        placeholder: "Введите новый пароль",
        label: "Изменить пароль",
        name: "password",
        type: "password",
        options: {
            minLength: {
                message: 'Минимальное количество символов - 8',
                value: 8,
            },
            required: "Поле не заполнено"
        }
    },
    {
        id: 4,
        placeholder: "Введите должность",
        label: "Должность",
        name: "post",
        type: "text",
    },
]