const { randomUserMock, additionalUsers } = require('./FE4U-Lab3-mock.js');

// Завдання 1: Форматування даних та об'єднання об'єктів
// Функція для форматування та об'єднання об'єктів
function processUserData(randomUserMock, additionalUsers) {
    if (!randomUserMock || !Array.isArray(randomUserMock)) {
        console.error("randomUserMock is not defined or is not an array");
        return [];
    }

    function formatUserData(user) {
      return {
        gender: user.gender,
        title: user.name.title,
        full_name: `${user.name.first} ${user.name.last}`,
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
        postcode: user.location.postcode,
        coordinates: user.location.coordinates,
        timezone: user.location.timezone,
        email: user.email,
        b_date: user.dob.date,
        age: user.dob.age,
        phone: user.phone,
        picture_large: user.picture.large,
        picture_thumbnail: user.picture.thumbnail
      };
    }
  
    function addFieldsAndRandomCourse(users) {
        let idCounter = 1;
        const courses = ["Mathematics", "Physics", "English", "Computer Science", "Dancing", "Chess", "Biology", "Chemistry", "Law", "Art", "Medicine", "Statistics"];
  
      return users.map(user => {
        const newUser = { ...user };
        newUser.id = idCounter++;
        newUser.favorite = false;
        newUser.bg_color = null; 
        newUser.note = null;
        newUser.course = courses[Math.floor(Math.random() * courses.length)];
        return newUser;
      });
    }
  
    function mergeAndRemoveDuplicates(users1, users2) {
      const mergedUsers = [...users1, ...users2];
  
      const uniqueUsers = mergedUsers.filter((user, index, self) =>
        index === self.findIndex(u => u.email === user.email)
      );
  
      return uniqueUsers;
    }
  
    const formattedRandomUsers = randomUserMock.map(formatUserData);
  
    const usersWithFieldsAndCourse = addFieldsAndRandomCourse(formattedRandomUsers);
  
    const mergedUsers = mergeAndRemoveDuplicates(usersWithFieldsAndCourse, additionalUsers);
  
    return mergedUsers;
}

// Завдання 2: Валідація об'єкта
// Функція для проведення валідації об'єкта
function validateObject(object) {

    const isValid = Object.keys(object).every(key => {
        switch (key) {
            case 'full_name':
            case 'gender':
            case 'note':
            case 'state':
            case 'city':
            case 'country':
                return typeof object[key] === 'string' && /^[A-Z]/.test(object[key]);
            case 'age':
                return typeof object[key] === 'number';
            case 'phone':
                return typeof object[key] === 'string' && /^\d{3}-\d{7}$/.test(object[key]);
            case 'email':
                return typeof object[key] === 'string' && object[key].includes('@');
            default:
                return true;
        }
    });

    return isValid;
}

// Завдання 3: Фільтрація об'єктів
// Функція для фільтрації масиву об'єктів за заданими параметрами
function filterUsers(users, country, age, gender, favorite) {
    return filteredUsers = users.filter(user => user["age"]      == age && 
                                       user["gender"]   == gender &&
                                       user["country"]  == country &&
                                       user["favorite"] == favorite)
}

// Завдання 4: Сортування об'єктів
// Функція для сортування масиву об'єктів за заданими параметрами
function sortUsers(users, sortBy, sortOrder) {
    return users.sort((a, b) => {
        if (typeof a[sortBy] === 'number') {
            return sortOrder === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
        } else if (typeof a[sortBy] === 'string') {
            return sortOrder === 'asc' ? a[sortBy].localeCompare(b[sortBy]) : b[sortBy].localeCompare(a[sortBy]);
        } else {
            return 0;
        }
    });
}

// Завдання 5: Пошук об'єкта
// Функція для пошуку об'єкта у масиві за параметром
function findUser(users, searchParam) {
    return matchingUsers = users.filter(user => {
        return Object.values(user).some(value => {
            if (typeof value === 'string') {
                return value.toLowerCase().includes(searchParam.toLowerCase());
            } else if (typeof value === 'number') {
                return value === searchParam;
            }
        });
    });
}

// Завдання 6: Обчислення відсотка
// Функція для обчислення відсотка об'єктів, що відповідають пошуковому критерію
function calculatePercentage(users, searchParam) {
    let matchingUsers = findUser(users, searchParam);
    let matchingCount = matchingUsers.length;
    console.log(matchingCount);
    const totalCount = users.length;
    const percentage = (matchingCount / totalCount) * 100;
    return percentage;
}

// Експортуємо функції для використання в інших модулях
module.exports = { processUserData, validateObject, filterUsers, sortUsers, findUser, calculatePercentage };
