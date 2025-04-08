import axios from "axios";

export const siteConfig = {
  apiUrl: "https://stagingadmin.iqbusiness.net",
  apiToken:
    "c08cc38b9a4973ba023bd41b81d9c90d4ede7fbe5af4530f2e11224e2eb59c78b0e60633291c6901d344e5a877205133b072a7d74371accc09dfce70a8ae1bba201d049d2331ea59054d71b18a138d418544bc198504c5699cca6031b06ff9db666c8371c478347bb48cb743bc2a3b4f6e8ba08c861d6a92d95acfb9267a5f00",
  revalidateTime: 60,
};

const baseUrl = siteConfig.apiUrl;

// Function to generate JWT token
export async function getAuthToken() {
  const url = new URL("/api/auth/local", baseUrl);
  const credentials = {
    identifier: "admin", // Your username
    password: "Maven@123", // Your password
  };

  const response = await axios.post(url.href, credentials);

  return response.data.jwt; // Return the JWT token
}

export async function postData(url: string, body) {
  const authToken = await getAuthToken();

  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(body), // Convert body to JSON
  };

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, headers);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error; // or return null;
  }
}
