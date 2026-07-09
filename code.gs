function doGet(e) {
  var html = HtmlService.createHtmlOutputFromFile('index');
  html.setTitle('Calculadora NE - APME - UNISINÚ');
  html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  html.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return html;
}
