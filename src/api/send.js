const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const sendPOST = async (endpoint, body, headers) => {
	const request = await fetch(SERVER_URL + endpoint, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			...headers
		},
		body: JSON.stringify(body),
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