var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
			.forBrowser('chrome')
			.build();

var by = webdriver.By;

driver.get('http://www.google.com');
driver.findElement(by.name('q')).sendKeys('webdriver');
driver.findElement(by.name('btnG')).click();

driver.quit();