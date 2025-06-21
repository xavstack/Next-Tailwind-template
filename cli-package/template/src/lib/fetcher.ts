const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    const info = await res.json();
    console.error(info);
    throw error;
  }

  return res.json();
};

export default fetcher;
