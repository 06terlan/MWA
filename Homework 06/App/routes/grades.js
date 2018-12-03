var express = require('express');
const { check, validationResult } = require('express-validator/check');
var router = express.Router();

const Grades = {
	grades: [],
	id_: 0,
	get generateId() {
		return ++this.id_;
	},
	get count(){
		return this.grades.length;
	},
	getGradeById(id_){
		for(const grade of this.grades){
			if(grade.id == id_) return grade;
		}

		return null;
	},
	addGrade: function(grade) {
		this.grades.push(grade);
	},
	removeGradebyId(id_){
		this.grades = this.grades.filter(function(grade){
			return grade.id != id_;
		});
	}
};

class Grade{
	constructor(name, course, grade, id_){
		this.name = name;
		this.course = course;
		this.grade = grade;
		this.id = id_;
	}
	
	update(name, course, grade){
		this.name = name;
		this.course = course;
		this.grade = grade;
	}
}

//init data
Grades.addGrade( new Grade('Tarlan', 'MWA', 98, 1) );

/* GET users listing. */
router.get('/', function(req, res, next) {
  	return res.json(Grades.grades);
});
router.post('/add', [
		check(['name', 'course', 'grade']).exists()
	],function(req, res, next) {

	const errors = validationResult(req);
  	if(errors.isEmpty()){
  		
  		Grades.addGrade( new Grade(req.body.name, req.body.course, req.body.grade, Grades.generateId) );
  		return res.send('Grade added');

  	}
  	else return next({status: 500, message: 'Sorry there is somethig wrong.'});
});
router.put('/update/:id', [
		check(['name', 'course', 'grade', 'id']).exists()
	], function(req, res, next) {
	
	const errors = validationResult(req);
  	if(errors.isEmpty() && Grades.getGradeById(req.params.id)){
  	
  		const grade = Grades.getGradeById(req.params.id);
  		grade.update(req.body.name, req.body.course, req.body.grade);

  	}
  	
  	return res.send('Grade updated');
});
router.delete('/delete/:id',[ 
	check(['id']).exists() ],
	function(req, res, next) {
		
	const errors = validationResult(req);
  	if(errors.isEmpty() && Grades.getGradeById(req.params.id)){
		Grades.removeGradebyId(req.params.id);
	}

	return res.send('Item deleted');
});

module.exports = router;
