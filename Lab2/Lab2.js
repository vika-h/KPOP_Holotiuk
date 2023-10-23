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
function getAllWorkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, markPrize: logPrize },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, markPrize: logPrize },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, markPrize: logPrize },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, markPrize: logPrize }
    ];
    return workers;
}
function getWorkerByID(id) {
    var workers = getAllWorkers();
    return workers.find(function (worker) { return worker.id === id; });
}
function PrintWorker(worker) {
    console.log(worker.name + ' ' + worker.surname + ' отримав(ла) зарплату ' + worker.salary + ' грн.');
}
var logPrize = function (message) {
    console.log("Result: ".concat(message));
};
var workerID = 1;
var foundWorker = getWorkerByID(workerID);
if (foundWorker) {
    PrintWorker(foundWorker);
    foundWorker.markPrize('Prize!');
}
else {
    console.log('Робітник з таким ID не знайдений.');
}
var favoriteAuthor = {
    name: 'John Smith',
    email: 'john.smith@example.com',
    numBooksPublished: 10,
};
// const favoriteLibrarian: Librarian = {
//     name: 'Alice Johnson',
//     email: 'alice.johnson@example.com',
//     department: 'Reference',
//     assistCustomer(custName: string) {
//       console.log(`Assisting customer ${custName}`);
//     },
// };
//2.4 Інтерфейси для типів класів
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log("".concat(this.name, " is assisting ").concat(custName));
    };
    return UniversityLibrarian;
}());
var favoriteLibrarian = new UniversityLibrarian('Alice Johnson', 'alice.johnson@example.com', 'Reference');
favoriteLibrarian.assistCustomer('John');
// 2.5 Створення та використання класів
//2.7
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        this.title = newTitle;
        this.year = newYear;
        console.log('Creating a new ReferenceItem ...');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year));
        console.log("Department: ".concat(ReferenceItem.department));
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.department = 'Default Department';
    return ReferenceItem;
}());
// Створення об'єкту ref на основі класу ReferenceItem та виклик методу printItem() 2.5
//const ref = new ReferenceItem('Sample Title', 2023);
//ref.publisher = 'Publisher Name';
//ref.printItem();
//2.6. Розширення класів
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, edition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: ".concat(this.edition, " (").concat(this.year, ")"));
    };
    //2.7
    Encyclopedia.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia('Sample Encyclopedia', 2023, 3);
refBook.printItem();
//2.7. Створення абстрактних класів
refBook.printCitation();
