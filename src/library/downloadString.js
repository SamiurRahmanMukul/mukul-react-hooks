export default function downloadString(data, filename, ext) {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(data)}`;
  const downloadAnchorNode = document.createElement("a");

  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", `${filename}.${ext}`);

  // required for firefox
  document.body.appendChild(downloadAnchorNode);

  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
