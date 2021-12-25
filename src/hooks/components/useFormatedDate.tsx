export function useFormatedDate(milleseconds: number) {
    const creationMilleseconds = milleseconds;
    const currentMilleseconds = Date.now();
    const creationDate = new Date(creationMilleseconds).toLocaleDateString('en-US');
    const currentDate = new Date(currentMilleseconds).toLocaleDateString('en-US');
    const creationDayInMonth = new Date(creationDate).getDate();
    const currentDayInMonth = new Date(currentDate).getDate();
    const creationMonth = new Date(creationDate).getMonth() + 1;
    const currentMonth = new Date(currentDate).getMonth() + 1;
    const creationYear = new Date(creationDate).getFullYear();
    const currentYear = new Date(currentDate).getFullYear();

    const isToday = creationDate === currentDate;
    const isEsterday = currentDayInMonth - creationDayInMonth === 1
        && currentMonth === creationMonth
        && currentYear === creationYear;

    if (isToday) return `Today (${currentDate})`;
    else if (isEsterday) return `Yesterday (${creationDate})`;
    else return creationDate;
}