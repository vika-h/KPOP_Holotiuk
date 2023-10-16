// 1.1. Базові типи
function getAllWorkers() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432: ".concat(workers.length));
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available) {
            console.log("\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0430: ".concat(worker.Name, " ").concat(worker.surname));
            break; // Виводимо тільки першого доступного робітника
        }
    }
}
// 1.2. Enum
var Category;
(function (Category) {
    Category[Category["Business analyst"] = 0] = "Business analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum master"] = 4] = "Scrum master";
})(Category || (Category = {}));
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = Category.Designer; }
    var names = [];
    for (var _i = 0, _a = getAllWorkers(); _i < _a.length; _i++) {
        var worker = _a[_i];
        if (worker.category === category) {
            names.push(worker.surname);
        }
    }
    return names;
}
function logWorkersNames(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
// 1.3. Стрілочні функції
function getWorkerByID(id) {
    var worker = getAllWorkers().find(function (worker) { return worker.id === id; });
    return worker ? { Name: worker.Name, surname: worker.surname, salary: worker.salary } : null;
}
// 1.4. Типи функцій
function createCustomerID(name, id) {
    return "".concat(name).concat(id);
}
var IdGenerator = function (name, id) { return "".concat(name).concat(id); };
IdGenerator = createCustomerID;
// 1.5. Необхідні, додаткові та залишкові параметри
function createCustomer(name, age, city) {
    console.log("\u0406\u043C'\u044F \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0430: ".concat(name));
    if (age !== undefined) {
        console.log("\u0412\u0456\u043A: ".concat(age));
    }
    if (city !== undefined) {
        console.log("\u041C\u0456\u0441\u0442\u043E: ".concat(city));
    }
}
function checkoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    var workers = getAllWorkers();
    var availableWorkerNames = [];
    var _loop_1 = function (id) {
        var worker = workers.find(function (worker) { return worker.id === id; });
        if (worker && worker.available) {
            availableWorkerNames.push("".concat(worker.Name, " ").concat(worker.surname));
        }
    };
    for (var _a = 0, workerIDs_1 = workerIDs; _a < workerIDs_1.length; _a++) {
        var id = workerIDs_1[_a];
        _loop_1(id);
    }
    console.log("\u0417\u0430\u043C\u043E\u0432\u043D\u0438\u043A: ".concat(customer));
    return availableWorkerNames;
}
// Виклики функцій
console.log("Task 1.1");
var workers = getAllWorkers();
logFirstAvailable(workers);
console.log("");
console.log("Task 1.2");
var category = Category.Designer;
logWorkersNames(getWorkersNamesByCategory(category));
console.log("");
console.log("Task 1.3");
// Виведення імен та прізвищ робітників з категорії "Developer"
workers.forEach(function (worker) {
    if (worker.category === Category.Developer) {
        console.log("\u0406\u043C'\u044F: ".concat(worker.Name, ", \u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435: ").concat(worker.surname));
    }
});
var workerID = 2;
var workerByID = getWorkerByID(workerID);
if (workerByID) {
    console.log("\u0420\u043E\u0431\u0456\u0442\u043D\u0438\u043A \u0437 ID ".concat(workerID, ": ").concat(workerByID.Name, " ").concat(workerByID.surname, ", \u0417\u041F: ").concat(workerByID.salary));
}
else {
    console.log("\u0420\u043E\u0431\u0456\u0442\u043D\u0438\u043A \u0437 ID ".concat(workerID, " \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0438\u0439."));
}
console.log("");
console.log("Task 1.4");
var myID = createCustomerID('Ann', 10);
console.log("\u041C\u0456\u0439 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440: ".concat(myID));
var generatedID = IdGenerator('John', 20);
console.log("\u0417\u0433\u0435\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440: ".concat(generatedID));
console.log("");
console.log("Task 1.5");
createCustomer('Alice');
createCustomer('Bob', 30);
createCustomer('Charlie', 25, 'New York');
var myWorkers = checkoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(function (worker) { return console.log("\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A: ".concat(worker)); });
logFirstAvailable();
getWorkersNamesByCategory();
