import { postData } from "./auth";

export const saveContactFormData = async (data) => {
  const baseUrl = "https://stagingadmin.iqbusiness.net";
  const authToken =
    "c08cc38b9a4973ba023bd41b81d9c90d4ede7fbe5af4530f2e11224e2eb59c78b0e60633291c6901d344e5a877205133b072a7d74371accc09dfce70a8ae1bba201d049d2331ea59054d71b18a138d418544bc198504c5699cca6031b06ff9db666c8371c478347bb48cb743bc2a3b4f6e8ba08c861d6a92d95acfb9267a5f00";

  if (!authToken) {
    throw new Error("No auth token found");
  }

  try {
    const url = new URL("/api/iqx-inquiries", baseUrl);

    const response = await postData(url.href, {
      key: data.key,
      origin: data.origin,
      title: data.title,
      data,
    });
  } catch (error) {
    throw new Error("Failed to save form data");
  }
};
