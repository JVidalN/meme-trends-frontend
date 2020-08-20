const service = Service();

const Upload = async () => {
  const create = () => {
    for (let idx in memes) {
      const meme = memes[idx];
      const divHomeElement = document.querySelector('.main-container .upload-images');

      divHomeElement.appendChild(DivImageElement);
    }
  };

  return {
    create,
  };
};

export default Upload;
