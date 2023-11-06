export const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

export const reportNoLogin = {
    padding: "11px 23px",
    color: "#FFF",
    border: "1px solid #FFF",
    borderRadius: "20px",
    background: "none",
}
export const formReportMessage = [
    {
        id: 0,
        placeholder: "Введите Ваше имя",
        label: "Имя",
        name: "name",
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
        placeholder: "Введите Вашу фамилию",
        label: "Фамилия",
        name: "surname",
        type: "text",
        options: {
            required: "Обязательное поле",
        }
    },
    {
        id: 2,
        placeholder: "Введите Вашу почту",
        label: "Email",
        name: "email",
        type: "text",
        options: {
            required: "Обязательное поле",
            pattern: {
                value: regexEmail,
                message: 'Некорректная почта',
            },
        }
    },

]