export const useAutoResize = () => (event: any) => {
    event.target.style.height = '50px';
    event.target.style.height = event.target.scrollHeight + 'px';
}