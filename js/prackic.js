// first У тебе є об’єкт із зарплатами працівників. Потрібно:
// Вибрати лише тих працівників, у кого зарплата понад 3000
// Для кожного з них премія — 10 % від зарплати
// виведи імена цих працівників та розмір їхньої премії.

const salaries = {
  Anna: 2900,
  Ben: 3100,
  Clara: 2800,
  David: 3500,
  Eva: 4100
};

const premia = Object.entries(salaries)
  .filter(([_, value]) => value > 3000)
  .map(([key, value]) => ({ name: key, bonus: value * 0.1 }));

console.log(premia);

//  Умови:
// Премію отримують ті, у кого зарплата > 3000 і стаж більше 3 років. Премія = 15% від зарплати.
// Потрібно створити масив об’єктів у форматі: масив об'єктів

const employees = {
  Anna: { salary: 2900, years: 2 },
  Ben: { salary: 3100, years: 4 },
  Clara: { salary: 2800, years: 1 },
  David: { salary: 3500, years: 6 },
  Eva: { salary: 4100, years: 5 }
};

const premia = Object.entries(employees)
.filter(([_, value]) => value.salary > 3000 && value.years > 3)
    .map(([key, value]) => ({
        name: key,
        bonus: value.salary * 0.15
    }));

console.log(premia)

// Премії + підвищення зарплати
// У тебе є об'єкт співробітників із зарплатою та роками роботи.
// Якщо:
// salary > 3000
// years > 3
// Тоді:
// співробітник отримує премію 15% від зарплати;
// і підвищення основної зарплати на 5%.
// Твоя задача — створити масив об'єктів такого вигляду:
// [
//   { name: "Ben", bonus: 465, newSalary: 3255 },
//   ...
// ]

const employees = {
  Anna: { salary: 2900, years: 2 },
  Ben: { salary: 3100, years: 4 },
  Clara: { salary: 2800, years: 1 },
  David: { salary: 3500, years: 6 },
  Eva: { salary: 4100, years: 5 }
};

const bonusSalary = Object.entries(employees)
.filter(([_, value]) => value.salary > 3000 && value.years > 3)
.map(([key, value]) => ({
    name: key,
    bonus: value.salary * 0.15,
    newSalary: value.salary * 1.05,     
    
}));

console.log(bonusSalary)




// Завдання:
// Знайти співробітників, які мають досвід більше 2 років.
// Для цих співробітників порахувати:
// Середній (average) розмір зарплати.
// Загальну суму премій, де премія — це 10% від зарплати, якщо досвід до 5 років, і 20% — якщо більше 5 років.
// Повернути об’єкт із трьома властивостями:
// employeesList — масив імен відфільтрованих співробітників.
// averageSalary — середня зарплата серед них.
// totalBonus — загальна сума премій.


const employees = {
  Anna: { salary: 2900, years: 2 },
  Ben: { salary: 3100, years: 4 },
  Clara: { salary: 2800, years: 1 },
  David: { salary: 3500, years: 6 },
  Eva: { salary: 4100, years: 5 }
};


const filter = Object.entries(employees)
  .filter(([key, value]) => value.years > 2);
  
const salaryInfo = filter
  .map(([key, value]) => value.salary)
  .reduce((acc, array) => acc += array, 0);

const totalBonus = filter
  .map(([_, value]) => value.salary * (value.years > 5 ? 0.2 : 0.1))
  .reduce((acc, bonus) => acc + bonus, 0);
  
const allEmployees = {
  employeesList: filter.map(([key]) => key),
  averageSalary: Number((salaryInfo / filter.length).toFixed(2)),
  totalBonus: totalBonus,
  }

  console.log(allEmployees)