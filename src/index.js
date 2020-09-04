const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

function validateInput(event) {
  const input = event.target;
  const value = input.value;
  const num = +value;
  const errDiv = input.nextSibling;

  if (!num && num !== 0) {
    input.style.border = 'solid red';
    errDiv.style.display = 'block';
    errDiv.innerText = 'Это не число!';
    input.focus();
  } else {
    input.style.border = '1px solid silver';
    errDiv.style.display = 'none';
  }
}

['first', 'second'].forEach((id) => {
  const input = document.createElement('input');
  input.id = id + 'Input';
  input.classList.add('font');
  container.append(input);
  input.addEventListener('input', validateInput);

  const errDiv = document.createElement('div');
  container.append(errDiv);
});

const result = document.createElement('div');
result.id = 'result';
container.append(result);

const button = document.createElement('button');
button.classList.add('button');
container.append(button);
button.innerText = 'Посчитать';
button.onclick = () => {
  const sum = parseFloat(firstInput.value) + parseFloat(secondInput.value);
  if (parseFloat(sum) || firstInput || secondInput) {
    document.querySelectorAll('div')[3].innerHTML = +sum.toFixed(2);
  }
};
