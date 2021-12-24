export function useFormatedDate(milleseconds: number) {
    const date = new Date(milleseconds).toLocaleDateString('en-US');
    const currentMilleseconds = Date.now();

    const isToday = currentMilleseconds - milleseconds <= 86400000;
    const isEsterday = (currentMilleseconds - milleseconds > 86400000)
        && (currentMilleseconds - milleseconds <= 86400000 * 2)

    if (isToday) return 'Today';
    if (isEsterday) return 'Yesterday';
    else return date
}