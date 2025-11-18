// API endpoint configuration from environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
    console.error('API_BASE_URL not configured. Please run update-config.ps1 to set up environment variables.');
}

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