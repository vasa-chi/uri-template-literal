export function uri(strings: TemplateStringsArray, ...values: any[]): string {
  let result = "";

  for (let i = 0; i < values.length; i++) {
    result += strings[i];
    result += encodeURIComponent(values[i]);
  }
  result += strings[strings.length - 1];
  return result;
}

export default uri;
