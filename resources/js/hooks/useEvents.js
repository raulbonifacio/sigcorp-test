import {useState, useEffect} from 'react';

function useEvents() { 

	const [refresh, setRefresh] = useState(0);
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios.get('/api/events').then(res => setEvents(res.data));
	}, [refresh]);

	return [events, () => setRefresh(refresh + 1)];
}


export default useEvents;
