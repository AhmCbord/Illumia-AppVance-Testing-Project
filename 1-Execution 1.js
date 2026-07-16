addHashDPL("{ds}/Default.csv",0);
setFailOnValidations(true);
prepareDomain($baseURL);
prepareDomain("https://pfs-dev09.cbhzdev.com/NetMenu/Login/Index/?application=mobilecardfile");
setShadowDOM(true);
setFindOnlyVisible(true);
setFindOnlyEnabled(true);
navigateTo($baseURL + "/NetMenu/Login/Index/?application=mobilecardfile");
/*Error during setup: com.appvance.aitestgen.exceptions.EngineInitException: Can't initialize DSManager
	at com.appvance.aitestgen.engine.DSManager.<init>(DSManager.java:66)
	at com.appvance.aitestgen.thread.web.WebBrowserThread.setup(WebBrowserThread.java:69)
	at com.appvance.aitestgen.thread.BaseExtractorThread.run(BaseExtractorThread.java:173)
	at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
	at java.base/java.lang.Thread.run(Thread.java:829)
Caused by: java.net.ConnectException: Connection timed out (Connection timed out)
	at java.base/java.net.PlainSocketImpl.socketConnect(Native Method)
	at java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:412)
	at java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:255)
	at java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:237)
	at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)
	at java.base/java.net.Socket.connect(Socket.java:609)
	at java.base/java.net.Socket.connect(Socket.java:558)
	at java.base/java.net.Socket.<init>(Socket.java:454)
	at java.base/java.net.Socket.<init>(Socket.java:231)
	at com.appvance.ds.client.NetworkClient.connect(NetworkClient.java:84)
	at com.appvance.ds.client.NetworkClient.process(NetworkClient.java:104)
	at com.appvance.ds.client.NetworkClient.get(NetworkClient.java:127)
	at com.appvance.ds.client.NetworkClient.getString(NetworkClient.java:131)
	at com.appvance.ds.client.DSConnectionClient.doGet(DSConnectionClient.java:40)
	at com.appvance.ds.client.DSBasicClient.startSession(DSBasicClient.java:665)
	at com.appvance.aitestgen.engine.DSManager.<init>(DSManager.java:43)
	... 7 more
*/
