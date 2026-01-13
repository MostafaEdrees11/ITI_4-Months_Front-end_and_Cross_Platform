abstract class Car {
  void move(int Speed);
  void stop();
}

enum CarType { electrical, gas }

mixin SoundSystem {
  void playSound(String sound) {
    print("$sound is playing....");
  }

  void stopSound() {
    print("stoped.");
  }
}

class BMW with SoundSystem implements Car {
  String? model;
  String? color;
  int speed;
  CarType type;
  BMW(this.type, String this.model, String this.color, [this.speed = 0]);

  set Speed(int speed) {
    if (speed < 0) {
      print("invalid speed !!");
      return;
    }
    this.speed = speed;
  }

  get Speed => speed;

  void move(speed) {
    this.speed = speed;
    print("$model car moves with speed $speed");
  }

  void stop() {
    this.speed = 0;
    print("$model car stoped.");
  }

  void accelerate() {
    this.move(this.speed * 2);
  }
}

void printInfo(String name, int age) {
  print("I'm $name. I'm $age years old.");
}

void updateInfo([String? name, int? age]) {
  if (name == null && age == null) {
    print("You don't enter any data.");
    return;
  }

  if (name != null) print("Your name is updated to $name");
  if (age != null) print("Your age is updated to $age");
}

// void testOptionalWithNamed({String ?name}, [int age = 0]) {
//   print("$name $age");
// }

void createNewUser(
  String data, {
  required String name,
  required int age,
  int id = 0,
}) {
  print("New User Created");
  print("Name: $name");
  print("Age: $age");
  print("Id: $id");
}

void main() {
  // BMW c = BMW(CarType.electrical, "BMW", "Blue");

  // c.move(150);
  // c.Speed = 120;
  // c.accelerate();
  // c.stop();
  // print(c.Speed);

  // c.playSound("Sound1");
  // c.stopSound();

  printInfo("Mostafa", 23);
  updateInfo();
  updateInfo("Sasa");
  updateInfo(null, 24);
  createNewUser("11122025", id: 1000205614, name: "Mostafa Edrees", age: 23);
  createNewUser("11122025", age: 23, name: "Mostafa");
}
