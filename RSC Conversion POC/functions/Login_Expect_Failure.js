/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

// TODO:  pass un/pw into this function, not hard coded
// TODO:  get rid of hard coded URL... navigate should be at start of test and accept a parm

setShadowDOM(true);
navigateTo("https://pfs-dev09.cbhzdev.com/RoomServiceChoice/Launcher/Login");
setValue(fallback(`byXPath('//input[@id="UserID"]')`,
   `byXPath('//*[@id="UserID"]')`,
   `byXPath('//*[@name="UserID"]')`,
   `textbox("UserID")`,
   `textbox("UserID")`),"fake");
setValue(fallback(`byXPath('//input[@id="Password"]')`,
   `byXPath('//*[@id="Password"]')`,
   `password("Password")`,
   `password("Password")`),"fake");
click(fallback(`byXPath('//input[@id="LoginArea-SubmitButton"]')`,
   `byXPath('//*[@id="LoginArea-SubmitButton"]')`,
   `button("LoginArea-SubmitButton")`,
   `button("Log In")`));
// failed login... validate the mesage, text, and font color
setDescription("// add validation here");
