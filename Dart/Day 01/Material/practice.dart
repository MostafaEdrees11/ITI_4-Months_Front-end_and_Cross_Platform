enum Days {
    Sat,
    Sun,
    Mon,
    Tue,
    Wen,
    Thu,
    Fri
}

void checkDay(Days day) {
    switch(day) {
        case Days.Sun:
        case Days.Mon:
        case Days.Tue:
        case Days.Wen:
        case Days.Thu:
            print("Working day");
            
        case Days.Fri:
        case Days.Sat:
            print("Day off");
        
        default:
            print("Invalid Input");
    }
}
void main() {
    // var variable1 = "Mostafa";
    // print(variable1);
    // // variable1 = 4;
    // // print(variable1);
    
    // dynamic var2 = "Mostafa";
    // var2 = 5;
    // print(var2);
    
    // const double pi = 3.14;
    // // const double pi;
    // // pi = 3.14;
    // print(pi);
    
    
    // // final String variable2 = "Test";
    // final String variable2;
    // variable2 = "Test";
    // print(variable2);
    
    
    // String ?name;
    // print(name);
    // name ??= "Mostafa";
    // print(name);
    
    // int? age;
    // print(age);
    // age ??= 23;
    // print(age);
    
    
    // Map<String, int?> data = {
    //     // "Id": 1000205614,
    //     // null: 1000205614,
    //     "Id": null,
    //     "age": 23
    // };
    // print(data);
    // // data = null
    // // print(data);
    
    // int grade = 95;
    // int grade = 70;
    // int grade = 40;
    
    // if(grade >= 85) {
    //     print("Excellent");
    // } else if(grade >= 75) {
    //     print("Very Good");
    // } else if(grade >= 65) {
    //     print("Good");
    // } else if (grade >= 50) {
    //     print("Pass");
    // } else {
    //     print("Fail");
    // }
    
    // String name = "Mostafa";
    // print(name is String);
    // print(name is! String);
    // print(name is null); 
    
    
    // String day = "Sat";
    // String day = "Mon";
    // String day = "TEST";
    
    // Days day = Days.Fri;
    // Days day = Days.Mon;
    // checkDay(day);
    
    
    Map<String, String> standsFor = {
        "HTML": "Hypertext Markup Language",
        "CSS": "Cascading Style Sheets",
        "JS": "JavaScript",
        "TS": "Typescript"
    };
    
    // standsFor.forEach((key, value) {
    //     print("$key stands for $value");
    // });
    
    // standsFor.forEach((key, value) => print("$key stands for $value"));
    
    standsFor.forEach((key, value) => {
        print("$key stands for $value"),
    });
}