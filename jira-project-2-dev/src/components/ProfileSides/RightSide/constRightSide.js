export const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
export const regexName = /^\S*$/

export const profileButton = {
    borderBottom: "2px solid #D9D9D9",
    paddingBottom: "5px",
}
export const completeSession = {
    position: "fixed",
    zIndex: "1",
    bottom: "50px",
    left: "280px",
    background: "none",
    borderRadius: "20px",
    border: "1px solid #FFF",
    padding: "12px 17px",
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
}
export const saveData = {
    position: "fixed",
    zIndex: "1",
    bottom: "35px",
    left: "253px",
    background: "none",
    borderRadius: "20px",
    border: "1px solid #FFF",
    padding: "11px 30px 11px 50px",
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
}
export const dataProfile = [
    {
        id: 0,
        placeholder: "Имя",
        name: "name",
        label: "Имя",
        type: "text",
        options: {
            pattern: {
                value: regexName,
                message: 'В имени не должно быть пробела',
            },
            required: "Обязательное поле"
        }
    },
    {
        id: 1,
        placeholder: "Фамилия",
        name: "surname",
        label: "Фамилия",
        type: "text",
        options: {
            required: "Обязательное поле"
        }
    },
    {
        id: 2,
        placeholder: "Должность",
        name: "Work",
        label: "Должность",
        type: "text",
    },
    {
        id: 3,
        placeholder: "Почта",
        name: "email",
        label: "Почта",
        type: "text",
        options: {
            pattern: {
                value: regexEmail,
                message: 'Некорректная почта',
            },
            required: "Обязательное поле"
        }
    },
    {
        id: 4,
        placeholder: "Пароль",
        label: "Пароль",
        name: "password",
        type: "password",
        options: {
            required: "Обязательное поле",
            minLength: {
                message: 'Минимальное количество символов - 8',
                value: 8,
            },
        }
    },
]
export const constSessions = [
    {
        id: 0,
        browser: "Chrome",
        ip: "000",
        sessionLocation: "Питер",
    },
    {
        id: 1,
        browser: "Chrome",
        ip: "111",
        sessionLocation: "Питер",
    },
    {
        id: 2,
        browser: "Chrome",
        ip: "222",
        sessionLocation: "Питер",
    },
]
export const deleteAccBtn = {
    background: "none",
    color: "#FFF",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.14px",
}