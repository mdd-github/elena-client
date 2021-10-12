const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const sendFile = async (endpoint, body, headers) => {
    const fd = new FormData();
    fd.append('file', body, body.name);

    const request = await fetch(SERVER_URL + endpoint, {
        method: 'PUT',
        headers: {
            ...headers
        },
        body: fd,
        credentials: 'include',
    });

    if(request.ok) {
        return {
            success: true
        };
    } else {
        return {
            success: false,
            errorCode: request.status,
            errorMessage: request.statusText,
        };
    }
}
