function startApp() {
  let mtnPrefixes = ["07025", "07026", "0703", "0704", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0916"];

  let gloPrefixes = ["0805", "0705", "0905", "0807", "0815", "0811", "0905"];
  
  let nineMobilePrefixes = ["0809", "0909", "0817", "0818"];
  
  let airtelPrefixes = ["0802", "0902", "0701", "0808", "0708", "0812"];
  
  const element = document.getElementById("phone");
  const network = document.getElementById("network");
  element.addEventListener("input", function(event) {
    const phoneNumber = event.target.value;
    
    let isMTN = mtnPrefixes.some(prefix => phoneNumber.startsWith(prefix));
    if (isMTN) {
      network.setAttribute("src", "mtn.webp");
    }
    let isGlo = gloPrefixes.some(prefix => phoneNumber.startsWith(prefix));
    if (isGlo) {
      network.setAttribute("src", "glo.jpeg");
    }
  
    let isnineMobile = nineMobilePrefixes.some(prefix => phoneNumber.startsWith(prefix));
    if (isnineMobile) {
      network.setAttribute("src", "nineMobile.png");
    }
  
    let isairtel = airtelPrefixes.some(prefix => phoneNumber.startsWith(prefix));
    if (isairtel) {
      network.setAttribute("src", "airtel.png");
    }
  });
  
};
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //