export const convertPathToBlob = async (url: string) => {
    const response = await fetch(url);
    return await response.blob();
}