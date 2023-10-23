//2.1. Визначення інтерфейсу
interface Worker1 {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    markPrize: PrizeLogger; // 2.2
}

function getAllWorkers(): Worker1[] {
    let workers: Worker1[] = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, markPrize: logPrize },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, markPrize: logPrize },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, markPrize: logPrize },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, markPrize: logPrize }
    ];
    return workers;
}

function getWorkerByID(id: number): Worker1 | undefined {
    const workers = getAllWorkers();
    return workers.find(worker => worker.id === id);
}

function PrintWorker(worker: Worker1): void {
    console.log(worker.name + ' ' + worker.surname + ' отримав(ла) зарплату ' + worker.salary + ' грн.');
}

//2.2. Визначення інтерфейсів для типів функцій
interface PrizeLogger {
    (message: string): void;
}

const logPrize: PrizeLogger = (message: string) => {
    console.log(`Result: ${message}`);
};

let workerID = 1;
const foundWorker = getWorkerByID(workerID);

if (foundWorker) {
    PrintWorker(foundWorker);
    foundWorker.markPrize('Prize!');
} else {
    console.log('Робітник з таким ID не знайдений.');
}

//2.3 Розширення інтерфейсів

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

const favoriteAuthor: Author = {
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
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
  
    constructor(name: string, email: string, department: string) {
      this.name = name;
      this.email = email;
      this.department = department;
    }
  
    assistCustomer(custName: string): void {
      console.log(`${this.name} is assisting ${custName}`);
    }
}

const favoriteLibrarian: Librarian = new UniversityLibrarian('Alice Johnson', 'alice.johnson@example.com', 'Reference');
favoriteLibrarian.assistCustomer('John');

// 2.5 Створення та використання класів
//2.7
abstract class ReferenceItem {
    public title: string;
    // 2.6
    protected year: number;
    private _publisher: string;
    static department: string = 'Default Department';
  
    constructor(newTitle: string, newYear: number) {
      this.title = newTitle;
      this.year = newYear;
      console.log('Creating a new ReferenceItem ...');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
  
    get publisher(): string {
      return this._publisher.toUpperCase();
    }
  
    set publisher(newPublisher: string) {
      this._publisher = newPublisher;
    }

    //2.7
    abstract printCitation(): void;
}
  
// Створення об'єкту ref на основі класу ReferenceItem та виклик методу printItem() 2.5
//const ref = new ReferenceItem('Sample Title', 2023);
//ref.publisher = 'Publisher Name';
//ref.printItem();

//2.6. Розширення класів

class Encyclopedia extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number) {
      super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    //2.7
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`); 
    }
}

const refBook = new Encyclopedia('Sample Encyclopedia', 2023, 3);
refBook.printItem();

//2.7. Створення абстрактних класів
refBook.printCitation(); 




  