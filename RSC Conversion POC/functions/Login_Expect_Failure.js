/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://pfs-dev09.cbhzdev.com/RoomServiceChoice/Launcher/Login");
setValue(fallback(`byXPath('//input[@id="UserID"]')`,
   `byXPath('//*[@id="UserID"]')`,
   `byXPath('//*[@name="UserID"]')`,
   `textbox("UserID")`,
   `textbox("UserID")`),"bmt");
setValue(fallback(`byXPath('//input[@id="Password"]')`,
   `byXPath('//*[@id="Password"]')`,
   `password("Password")`,
   `password("Password")`),"init123");
click(fallback(`byXPath('//input[@id="LoginArea-SubmitButton"]')`,
   `byXPath('//*[@id="LoginArea-SubmitButton"]')`,
   `button("LoginArea-SubmitButton")`,
   `button("Log In")`));
setDescription("// add validation here");
//(click(fallback(`byXPath('//img[@id="launcherLogOutButton"]')`,
   `byXPath('//*[@id="launcherLogOutButton"]')`));
setDescription("// add validation here");
//(