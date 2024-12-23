/**
 * number
 * string
 * boolean
 * object
 * null
 * undefined
 * symbol
 *
 * any
 * never
 * unknown
 * void
 */

type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "John",
  age: 30,
  email: "",
};

type Colors = "red" | "green" | "blue";

const colorMap: Record<Colors, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

const colorMap2: { [key in Colors]: string } = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

interface Wood {
  name: string;
  color: string;
}

interface Table extends Wood {
  legs: number;
}

const table: Table = {
  color: "brown",
  name: "Table",
  legs: 4,
};

class UserDto {
  private name: string;
  public age: number;
  protected email: string;
  readonly id: number;
}

class Teacher extends UserDto {
  public subject: string;
}

abstract class Student extends UserDto {
  public grade: number;
}

const teacher = new Teacher();
teacher.age = 30;
teacher.subject = "Math";
