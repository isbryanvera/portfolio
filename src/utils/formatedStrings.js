export function styleStringLikeACodeOfAProgrammingLanguage(string, coincidences) {
  return string.split('#').map(line => {
    Object.keys(coincidences).forEach(key => {
      if(line.includes(key)){
        line = line.replace(new RegExp(`\\b${key}\\b`, 'g'), `<span style="color: ${coincidences[key]}">${key}</span>`);
      }
    });
    return line;
  });
}
  export function findTheKeysOfTheCode(string) {
      if (string) {
        return string.match(/\w+(?=:)/g);
      }   
  }