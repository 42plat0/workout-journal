export function getUrlParts(url){
    return url
              .split('/')
              .filter(part => part.length)
              .map(part => '/' + part);
}
