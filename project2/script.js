const checkFile = () => {
  const fileName = document.getElementById('file');
  let fileExtension = fileName.value.split('.')[1];
  fileExtension = fileExtension.toLowerCase();
  console.log(fileName, fileExtension);
  if (
    fileExtension !== 'png' &&
    fileExtension !== 'jpg' &&
    fileExtension !== 'jpge'
  ) {
    alert('Please select a valid image file');
    fileName.value = '';
  }
};
