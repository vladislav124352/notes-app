export const useFormatedDate = (milleseconds: string) => {
    const date = new Date(milleseconds);
    const result = date.toLocaleDateString('en-US')
    return result
}