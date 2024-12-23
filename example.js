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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = {
    name: "John",
    age: 30,
    email: "",
};
var colorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};
var colorMap2 = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};
var table = {
    color: "brown",
    name: "Table",
    legs: 4,
};
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    return UserDto;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(UserDto));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(UserDto));
var teacher = new Teacher();
teacher.age = 30;
teacher.subject = "Math";
