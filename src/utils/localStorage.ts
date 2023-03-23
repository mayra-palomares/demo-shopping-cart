export const getLocalStorageItem = <T>(key: string, defaultValue: T): T => {
	return JSON.parse(localStorage.getItem(key)!) || defaultValue;
};

export const setLocalStorageItem = <T>(key: string, value: T): void => {
	localStorage.setItem(key, JSON.stringify(value));
};
