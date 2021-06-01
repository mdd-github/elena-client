const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const sendGET = async (endpoint, headers) => {
	const request = await fetch(SERVER_URL + endpoint, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			...headers
		},
		credentials: 'include',
	});

	if(request.ok) {
		return await request.json();
	} else {
		return {
			success: false,
			errorCode: request.status,
			errorMessage: request.statusText,
		};
	}
}