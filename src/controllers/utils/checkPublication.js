const idPublication = 0
export const checkPublication = async (req, res, next) => {
  let validationMessage;
  try {
    const { title, message, file, color } = req.body;
    const expTitulo = /^(?=.*[a-zA-Z])[a-zA-Z0-9\s\-_,.!?¿¡()]{3,40}$/;
    const expMessage = /^(?=.*[^\s])[^\n]{1,500}$/;
    const expFile = /\.(jpg|jpeg|png|gif|bmp|svg|mp4|mov|avi|wmv|flv|mkv)$/;

    if (!expTitulo.test(title)) {
      validationMessage = "el titulo debe contener almenos 3 caracteres";
      throw validationMessage;
    } else if (!expMessage.test(message)) {
      validationMessage = "el mensaje debe contener almenos un caracter";
      throw validationMessage;
    } else if (!expFile.test(file) && file != undefined) {
      validationMessage = "El archivo no es una imagen ni un video.";
      throw validationMessage;
    }
    const infoPublication = {
      title,
      message,
      file,
      color
    }
    req.infoPublication = infoPublication;
    
    next()
  } catch (error) {
    req.error = error;
    next();
  }
};

export default checkPublication;
