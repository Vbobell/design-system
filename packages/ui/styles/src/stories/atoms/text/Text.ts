interface TextProps {
  text: string;
}

export function createText({ text }: TextProps) {
  const textElement = document.createElement('p');

  textElement.className = 'text';
  textElement.innerText = text;

  return textElement;
}
