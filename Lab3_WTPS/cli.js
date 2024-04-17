const { randomUserMock, additionalUsers } = require('./FE4U-Lab3-mock.js');
const scripts = require('./script.js');

// Завдання 1: Форматування даних та об'єднання об'єктів
const formattedData = scripts.processUserData(randomUserMock, additionalUsers);
//console.log("Formatted Data:", formattedData);

// Завдання 2: Валідація об'єкта
const objectToValidate = {
    // Приклад об'єкта для валідації
    full_name: "John Doe",
    gender: "Male",
    note: "Loremipsum",
    state: "California",
    city: "Los Angeles",
    country: "USA",
    age: 25,
    phone: "123-4567899",
    email: "john.doe@example.com"
};
const isValid = scripts.validateObject(objectToValidate);
//console.log("Object is valid:", isValid);

const objectToValidate2 = {
    full_name: "john doe",
    gender: "Male",
    note: "Loremipsum",
    state: "California",
    city: "Los Angeles",
    country: "USA",
    age: 25,
    phone: "123-4567899",
    email: "john.doe@example.com"
};
const isValid2 = scripts.validateObject(objectToValidate2);
//console.log("Object is valid:", isValid2);

// Завдання 3: Фільтрація об'єктів
const country = "Germany";
const age = 30;
const gender = "male";
const favorite = true;
const filteredUsers = scripts.filterUsers(formattedData, country, age, gender, favorite);
//console.log("Filtered Users:", filteredUsers);

const country2 = "Germany";
const age2 = 65;
const gender2 = "male";
const favorite2 = false;
const filteredUsers2 = scripts.filterUsers(formattedData, country2, age2, gender2, favorite2);
//console.log("Filtered Users:", filteredUsers2);

// Завдання 4: Сортування об'єктів
const sortBy = "city";
const sortOrder = "desc";
const sortedUsers = scripts.sortUsers(formattedData, sortBy, sortOrder);
console.log("Sorted Users:", sortedUsers);

// Завдання 5: Пошук об'єкта
const searchParam = "John";
const foundUser = scripts.findUser(formattedData, searchParam);
//console.log("Found User:", foundUser);

const searchParam2 = "Norbert";
const foundUser2 = scripts.findUser(formattedData, searchParam2);
//console.log("Found User:", foundUser2);

// Завдання 6: Обчислення відсотка
const percentageParam = "John";
const percentage = scripts.calculatePercentage(formattedData, percentageParam);
//console.log("Percentage:", percentage);

const percentageParam2 = "Norbert";
const percentage2 = scripts.calculatePercentage(formattedData, percentageParam2);
//console.log("Percentage:", percentage2);
