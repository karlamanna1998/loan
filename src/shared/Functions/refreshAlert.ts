// used to prevent users from reloading the page
export const addRefreshAlert = (): (() => void) => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };
};
