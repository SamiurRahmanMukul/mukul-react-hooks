/**
 * Downloads a string as a file to the user's computer.
 * @param {string} data - The string data to download.
 * @param {string} filename - The name of the file (without extension).
 * @param {string} ext - The file extension.
 * @returns {void}
 */
export default function downloadString(data: string, filename: string, ext: string): void {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(data)}`;
  const downloadAnchorNode = document.createElement("a");

  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", `${filename}.${ext}`);

  // required for firefox
  document.body.appendChild(downloadAnchorNode);

  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
