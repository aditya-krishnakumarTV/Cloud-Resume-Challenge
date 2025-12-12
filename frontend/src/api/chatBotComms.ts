const API_BASE_URL = 'https://4w3r9xzaif.execute-api.us-east-1.amazonaws.com/dev';

// Sends a message to the chatbot API and retrieves the response
export const sendMessageToChatBot = async (message: string): Promise<string> => {
    try {
        const response = await fetch(`${API_BASE_URL}/chatbot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ "prompt": message }),
        });

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        const data = await response.json();

        return data.response;

    } catch (error) {
        console.error('Failed to communicate with chatbot API:', error);
        return 'Sorry, I am unable to respond at the moment.';
    }
};