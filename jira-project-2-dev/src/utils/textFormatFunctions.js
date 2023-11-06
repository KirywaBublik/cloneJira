export function slicer(text, symbolCount) {
    return text.length > symbolCount ? text.slice(0, symbolCount) + "..." : text
}