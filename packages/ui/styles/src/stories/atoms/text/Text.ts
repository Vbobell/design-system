interface textProps {
  text: string;
}

export function createText({ text }: textProps) {
  const textElement = document.createElement('p');

  textElement.className = 'text';
  textElement.innerText = text;

  return textElement;
}
