const fetchVisitors = () => JSON.parse(window.localStorage.getItem('visitorListLocalStorage')) || [];

export default fetchVisitors