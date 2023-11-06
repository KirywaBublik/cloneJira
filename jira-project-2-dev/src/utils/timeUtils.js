function parseTimeString(timeString) {
    const timeUnits = {
        "м": "months",
        "н": "weeks",
        "д": "days",
        "ч": "hours",
        "мин": "minutes"
    };

    const elements = timeString.split(" ");
    const parsedTime = {
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0
    };

    elements.forEach(element => {
        const numericPart = parseInt(element);
        const unit = element.replace(numericPart, "").trim();

        if (timeUnits.hasOwnProperty(unit)) {
            parsedTime[timeUnits[unit]] = numericPart;
        }
    });

    return Object.values(parsedTime);
}

function sumArraysElementwise(array1, array2) {
    return array1.map((value, index) => value + array2[index]);
}

function findMinutesTime(array) {
    return array[4] + array[3] * 60 + array[2] * 8 * 60 + array[1] * 5 * 8 * 60 + array[0] * 4 * 5 * 8 * 60;
}

export function processTimeString(input1, input2) {
    const array1 = parseTimeString(input1);
    const array2 = parseTimeString(input2);
    const sumArray = sumArraysElementwise(array1, array2);

    let carry = 0;
    for (let i = 4; i >= 0; i--) {
        sumArray[i] += carry;

        if (i === 4 && sumArray[i] >= 60) {
            carry = Math.floor(sumArray[i] / 60);
            sumArray[i] %= 60;
        } else if (i === 3 && sumArray[i] >= 8) {
            carry = Math.floor(sumArray[i] / 8);
            sumArray[i] %= 8;
        } else if (i === 2 && sumArray[i] >= 5) {
            carry = Math.floor(sumArray[i] / 5);
            sumArray[i] %= 5;
        } else if (i === 1 && sumArray[i] >= 4) {
            carry = Math.floor(sumArray[i] / 4);
            sumArray[i] %= 4;
        } else {
            carry = 0;
        }
    }

    const [months, weeks, days, hours, minutes] = sumArray;
    const resultString = `${months ? months + "м " : ""}${weeks ? weeks + "н " : ""}${days ? days + "д " : ""}${hours ? hours + "ч " : ""}${minutes ? minutes + "мин" : ""}`;

    return resultString.trim();
}

export function calculateProgress(fullTime, spentTime) {
    const fullTimeArray = parseTimeString(fullTime);
    const spentTimeArray = parseTimeString(spentTime);
    const progress = findMinutesTime(spentTimeArray) / findMinutesTime(fullTimeArray);
    if (progress > 1) {
        return 1;
    } else {
        return parseFloat(progress.toFixed(2));
    }
}
