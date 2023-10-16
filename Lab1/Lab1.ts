// 1.1. Базові типи

function getAllWorkers() {
    let workers = [
      { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer },
      { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
      { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
      { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
  }
  
  function logFirstAvailable(workers: any[]=getAllWorkers()) {
    console.log(`Кількість працівників: ${workers.length}`);
  
    for (const worker of workers) {
      if (worker.available) {
        console.log(`Ім'я та прізвище доступного робітника: ${worker.Name} ${worker.surname}`);
        break; // Виводимо тільки першого доступного робітника
      }
    }
  }
  
  // 1.2. Enum
  
  enum Category {
    "Business analyst",
    "Developer",
    "Designer",
    "QA",
    "Scrum master"
  }
  

  function getWorkersNamesByCategory(category: Category = Category.Designer): Array<string> {
    const names: Array<string> = [];
    for (const worker of getAllWorkers()) {
      if (worker.category === category) { 
        names.push(worker.surname);
      }
    }
    return names;
  }

  function logWorkersNames(names: string[]): void {
    for (const name of names) {
      console.log(name);
    }
  }
  
  // 1.3. Стрілочні функції
  
  function getWorkerByID(id: number) {
    const worker = getAllWorkers().find(worker => worker.id === id);
    return worker ? { Name: worker.Name, surname: worker.surname, salary: worker.salary } : null;
  }

  
  // 1.4. Типи функцій
  
  function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
  }
  
  type IdGeneratorFunction = (name: string, id: number) => string;
  let IdGenerator: IdGeneratorFunction = (name, id) => `${name}${id}`;
  IdGenerator = createCustomerID;
  
  // 1.5. Необхідні, додаткові та залишкові параметри
  
  function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Ім'я замовника: ${name}`);
    if (age !== undefined) {
      console.log(`Вік: ${age}`);
    }
    if (city !== undefined) {
      console.log(`Місто: ${city}`);
    }
  }
  
  function checkoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    const workers = getAllWorkers();
    const availableWorkerNames: string[] = [];
  
    for (const id of workerIDs) {
      const worker = workers.find(worker => worker.id === id);
      if (worker && worker.available) {
        availableWorkerNames.push(`${worker.Name} ${worker.surname}`);
      }
    }
  
    console.log(`Замовник: ${customer}`);
    return availableWorkerNames;
  }
  
  // Виклики функцій
  console.log("Task 1.1");
  const workers = getAllWorkers();
  logFirstAvailable(workers);

  console.log("");
  console.log("Task 1.2");
  const category = Category.Designer;
  logWorkersNames(getWorkersNamesByCategory(category))

  console.log("");
  console.log("Task 1.3");
// Виведення імен та прізвищ робітників з категорії "Developer"
workers.forEach(worker => {
    if (worker.category === Category.Developer) {
      console.log(`Ім'я: ${worker.Name}, Прізвище: ${worker.surname}`);
    }
  });

  const workerID = 2;
  const workerByID = getWorkerByID(workerID);
  if (workerByID) {
    console.log(`Робітник з ID ${workerID}: ${workerByID.Name} ${workerByID.surname}, ЗП: ${workerByID.salary}`);
  } else {
    console.log(`Робітник з ID ${workerID} не знайдений.`);
  }

  console.log("");
  console.log("Task 1.4");
  const myID:string = createCustomerID('Ann', 10);
  console.log(`Мій ідентифікатор: ${myID}`);
  
  const generatedID = IdGenerator('John', 20);
  console.log(`Згенерований ідентифікатор: ${generatedID}`);

  console.log("");
  console.log("Task 1.5");
  createCustomer('Alice');
  createCustomer('Bob', 30);
  createCustomer('Charlie', 25, 'New York');
  
  const myWorkers = checkoutWorkers('Ann', 1, 2, 4);
  myWorkers.forEach(worker => console.log(`Доступний робітник: ${worker}`));

  logFirstAvailable();
  getWorkersNamesByCategory()
