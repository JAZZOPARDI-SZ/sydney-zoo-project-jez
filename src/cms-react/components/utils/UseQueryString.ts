
export const updateQuery = (path: any) => {
	window.history.pushState(null, document.title, path);
}