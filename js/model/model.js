annaPortfolio.factory('Model', function ($resource) {

	this.subjects = [];

	this.addSubjectToSubjects = function(subject) {
		var newObj = {
			"id" : subject,
			"name" : subject,
			"notes" : [],
			"deadlines" : [],
			"goals" : []
		};

		subjectList.push(newObj);
	}

	this.getSubjectFromSubjects = function() {
		return this.subjects;
	}

	this.getAllSubjects = function() {
		this.subjects = [];
		for (i in subjectList) {
			this.subjects.push(subjectList[i]);
		}
		//console.log(this.subjects);
		return this.subjects;
	}


	var subjectList = [{
		'id':'1',
		'name':'ABOUT'
		},{
		'id':'2',
		'name':'PROJECTS'
		},{
		'id':'3',
		'name':'TOKYO DIARY'
		},{
		'id': '4',
		'name':'CONTACT'
		}];


return this;

})