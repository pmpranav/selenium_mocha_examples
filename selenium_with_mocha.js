var webdriver = require('selenium-webdriver');
var driver;
describe('sample suite',function(){
	
	before(function(done){
		driver = new webdriver.Builder()
				 .forBrowser('chrome')
				 .build();
		done();
	});

	after(function(done){
		driver.quit().then(function(){
			done();
		});
	});

	it('sample test',function(done){
		by = driver.By;
		driver.get('http://www.google.com');
		driver.findElement(by.name('q')).sendKeys('webdriver');
		driver.findElement(by.name('btnG')).click().then(done);
	});
});
