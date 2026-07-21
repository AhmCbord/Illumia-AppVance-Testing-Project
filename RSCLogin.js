/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://pfs-dev09.cbhzdev.com/RoomServiceChoice/Launcher/Login");
setValue(byXPath('//*[@id="UserID"]'),"ahm");
setValue(byXPath('//*[@id="Password"]'),"init1");
click(byXPath('//*[@id="LoginArea-SubmitButton"]'));
setValue(byXPath('//*[@id="Password"]'),"init1");


