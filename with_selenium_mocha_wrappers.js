var webdriver = require('selenium-webdriver'),
	test = require('selenium-webdriver/testing');

var driver;
test.describe('sample suite',function(){
	
	test.before(function(done){
		driver = new webdriver.Builder()
				 .forBrowser('chrome')
				 .build();
		done();
	});

	test.after(function(done){
		driver.quit().then(function(){
			done();
		});
	});

	test.it('sample test',function(done){
		by = webdriver.By;
		driver.get('http://www.google.com');
		driver.findElement(by.name('q')).sendKeys('webdriver');
		driver.findElement(by.name('btnG')).click().then(done);
	});
});
