describe("start",function(){
	it("should pass",function(){
		expect(true).toBe(true);
	});
});


describe("click confirm button",function(){
	it("should have no list",function(){
		expect($('#totalList>li').length).toBe(0);
	});

	it("should add some list",function(){
		$('#weibo').html("first");
		$('#submit').click();
		expect($('#totalList>li')).not.toBeNull();
		expect($('#totalList>li').length).toBe(1);
		$('#delete').click();
		expect($('#totalList>li').length).toBe(0);		
	});
});

describe("click delete button",function(){
	it("should have one list",function(){
		$('#weibo').html("first");
		$('#submit').click();
		$('#delete').click();
		expect($('#totalList>li').length).toBe(0);
	});
});