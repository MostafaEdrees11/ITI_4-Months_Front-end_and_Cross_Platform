let student = {
    name: "Mostafa",
    age: 23,
    track: "Frontend",
    isStudent: true,
    getSetGen: function () {
        for (let key in student) {
            if (key != "getSetGen") {
                let setKey = "set" + key[0].toUpperCase() + key.substring(1);
                let getKey = "get" + key[0].toUpperCase() + key.substring(1);
                
                student[setKey] = function (val) {
                    student[key] = val;
                }

                student[getKey] = function () {
                    return student[key];
                }
            }
        }
    },
};

student.getSetGen();
console.log(student);
console.log(student.getName());
student.setName("Anas");
console.log(student.getName());