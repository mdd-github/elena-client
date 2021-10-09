const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const sendFile = async (endpoint, body, headers) => {
    const fd = new FormData();
    fd.append('file', body, body.name);

    const request = await fetch(SERVER_URL + endpoint, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            ...headers
        },
        body: fd,
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
