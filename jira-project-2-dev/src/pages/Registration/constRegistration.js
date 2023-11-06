export const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

export const registerBtn = {
    background: "rgba(217, 217, 217, 0.30)",
    color: "#FFF",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "155%",
    letterSpacing: "0.14px",
    borderRadius: "20px",
    border: " 1px solid #FFF",
    padding: "11px 33px",
}

export const formItems = [
    {
        id: 0,
        placeholder: "Введите ваше имя",
        name: "name",
        label: "Имя",
        type: "text",
        options: {
            pattern: {
                value: /^\S*$/,
                message: 'В имени не должно быть пробела',
            },
            required: "Обязательное поле"
        }
    },
    {
        id: 1,
        placeholder: "Введите вашу фамилию",
        name: "surname",
        label: "Фамилия",
        type: "text",
        options: {
            required: "Обязательное поле"
        }
    },
    {
        id: 2,
        placeholder: "Введите свою почту",
        name: "email",
        label: "Email",
        type: "text",
        options: {
            pattern: {
                value: regexEmail,
                message: 'Некорректная почта',
            },
            required: "Обязательное поле"
        }
    },
]