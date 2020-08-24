const Upload = async () => {
  const fields = document.querySelectorAll('[required]');

  const ValidateField = (field) => {
    console.log(field.validity);
    // logica para verificar se existem erros
    const verifyErrors = () => {
      let foundError = false;

      for (let error in field.validity) {
        // se não for customError
        // então verifica se tem erro
        if (field.validity[error] && !field.validity.valid) {
          foundError = error;
        }
      }
      return foundError;
    };

    const customMessage = (typeError) => {
      const messages = {
        text: {
          valueMissing: 'Por favor, preencha este campo',
        },
        date: {
          valueMissing: 'Por favor, preencha este campo',
          typeMismatch: 'Por favor, preencha uma data válida',
          badInput: 'Por favor, preencha uma data válida',
          rangeOverflow: 'Por favor, informe uma data válida entre 01/01/2000 e 31/12/2100',
        },
      };

      return messages[field.type][typeError];
    };

    const setCustomMessage = (message) => {
      const spanError = field.parentNode.querySelector('span.error');

      if (message) {
        spanError.classList.add('active');
        spanError.innerHTML = message;
      } else {
        spanError.classList.remove('active');
        spanError.innerHTML = '';
      }
    };

    return function () {
      const error = verifyErrors();

      if (error) {
        const message = customMessage(error);

        field.style.borderColor = 'red';
        setCustomMessage(message);
      } else {
        field.style.borderColor = 'green';
        setCustomMessage();
      }
    };
  };

  const customValidation = (event) => {
    const field = event.target;
    const validation = ValidateField(field);

    validation();
  };

  const maxDateToday = () => {
    let today = new Date();
    var day = today.getDate().toString().padStart(2, '0');
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var year = today.getFullYear();

    today = `${year}-${month}-${day}`;

    document.querySelector('input[type=date]').setAttribute('max', today);

    return today;
  };

  const create = () => {
    for (let field of fields) {
      field.addEventListener('invalid', (event) => {
        // eliminar o bubble
        event.preventDefault();

        customValidation(event);
      });
      field.addEventListener('blur', customValidation);
    }

    document.querySelector('form').addEventListener('submit', (event) => {
      for (let field of fields) {
        console.log(field.value);
      }
      event.preventDefault();
    });

    maxDateToday();
  };

  return {
    create,
  };
};

export default Upload;
