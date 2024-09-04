 /* const student = {
    fullName : "shradha khapra",
    marks: 94.4,
    printMarks: function() {
        console.log("marks = ",this.marks); //this jb bhi hm use krta ha likhna cahata ha student.marks
    },
};*/
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
};

const karanArjun1 = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%")
    }
};


karanArjun.__proto__ = employee;