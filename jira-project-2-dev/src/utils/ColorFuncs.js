export function progressToColor(progress) {
    const colorMap = [
        {threshold: 0.5, color: "#FF0000"},
        {threshold: 0.85, color: "#FFD600"},
        {threshold: 1.0, color: "#00FF19"}
    ];
    for (const item of colorMap) {
        if (progress < item.threshold) {
            return item.color;
        }
    }

    return colorMap[colorMap.length - 1].color;
}