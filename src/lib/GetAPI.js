/**
 * Helper function for GETing data as JSON with fetch.
 *
 * @param {string} url - URL to GET data to
 * @return {Object} - Response body from URL that was GETed
 */
const fetchDataJSON = async (URL, authObj = false, signal = undefined) => {
  const headers = new Headers();
  if (authObj) headers.append(authObj.name, authObj.value);
  const fetchOptions = {
    method: 'GET',
    headers,
    signal,
  };
  const response = await fetch(URL, fetchOptions);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const dataJSON = await response.json();
  return dataJSON;
};

/**
 * Event handler for a event influence fetch get api.
 * @param {SubmitEvent} event
 */
const handleGETAPIevent = async (event, url, apiKey = false, signal = undefined) => {
  event.preventDefault();
  try {
    const responseData = await fetchDataJSON(url, apiKey, signal);
    return responseData;
  } catch (error) {
    return error;
  }
};

/**
 * Event handler for a fetch get api.
 */
const handleGETAPI = async (url, apiKey = false, signal = undefined) => {
  try {
    const responseData = await fetchDataJSON(url, apiKey, signal);
    return responseData;
  } catch (error) {
    return error;
  }
};

export {
  fetchDataJSON, handleGETAPIevent, handleGETAPI,
};
