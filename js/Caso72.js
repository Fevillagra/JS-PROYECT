let href = location.href;
let protocol = location.protocol;
let hostName = location.hostname;
let pathName = location.pathname;

let data = `<br><p>URL: ${href}</p>
    <p>PROTOCOL: ${protocol}</p>
    <p>HOSTNAME: ${hostName}</p>
    <p>PATHNAME: ${pathName}</p>
`;


document.write(data);