const API_BASE_URL = 'https://pu360p4kh9.execute-api.us-east-1.amazonaws.com/dev';

// Fetches the current visitor count from the API
export const getVisitorCount = async (): Promise<number> => {
    try {
        const response = await fetch(`${API_BASE_URL}/visitor-count`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Failed to fetch visitor count:', error);
        // Return a default count if the API call fails
        return 0;
    }
};