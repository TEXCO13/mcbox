function makeDownloadLink() {
  const fileName = document.getElementById("fileName").value.trim();
  const linkBox = document.getElementById("linkBox");
  const fileLink = document.getElementById("fileLink");

  if (!fileName) {
    alert("파일명을 입력해주세요.");
    return;
  }

  // 실제 업로드 폴더 경로
  const url = `uploads/${encodeURIComponent(fileName)}`;
  fileLink.href = url;
  fileLink.download = fileName;
  linkBox.classList.remove("hidden");
}
