
export async function fetchPlanets(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch planets');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching planets:', error);
      return null;
    }
  }
  
  export async function fetchResident(residentURL) {
    try {
      const response = await fetch(residentURL);
      if (!response.ok) {
        throw new Error('Failed to fetch resident');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching resident:', error);
      return null;
    }
  }
  