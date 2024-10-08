export const dummyData = {
  users: [
    {
      userId: 1,
      username: 'john_doe',
      email: 'john@example.com',
      transactions: [
        {
          id: 1,
          title: 'Grocery Shopping',
          amount: 200,
          date: '2024-08-03',
          category: 'Food',
          type: 'expense',
          icon: 'fa-solid fa-utensils',
          notes: 'groceries for the week',
        },
        {
          id: 2,
          title: 'Freelance Project',
          amount: 1200,
          date: '2024-08-05',
          category: 'Work',
          type: 'income',
          icon: 'fa-solid fa-briefcase',
          notes: 'freelance project for BofA',
        },
        {
          id: 3,
          title: 'Electricity Bill',
          amount: 100,
          date: '2024-08-10',
          category: 'Utilities',
          type: 'expense',
          icon: 'fa-solid fa-plug',
          notes: 'SDGE electricity bill',
        },
        {
          id: 4,
          title: 'Rent',
          amount: 1200,
          date: '2024-09-01',
          category: 'Rent',
          type: 'expense',
          icon: 'fa-solid fa-house-chimney',
          notes: 'monthly mortgage payment',
        },
        {
          id: 5,
          title: 'Salary',
          amount: 3000,
          date: '2024-09-01',
          category: 'Salary',
          type: 'income',
          icon: 'fa-solid fa-money-bill',
          notes: 'monthly salary',
        },
        {
          id: 6,
          title: 'Bonus',
          amount: 8000,
          date: '2024-09-12',
          category: 'Salary',
          type: 'income',
          icon: 'fa-solid fa-money-bill',
          notes: 'sign on bonus for new client',
        },
        {
          id: 7,
          title: 'Restaurant',
          amount: 150,
          date: '2024-09-12',
          category: 'Food',
          type: 'expense',
          icon: 'fa-solid fa-utensils',
          notes: 'celebration dinner with family',
        },
        {
          id: 8,
          title: 'Gym Membership',
          amount: 50,
          date: '2024-09-15',
          category: 'Health',
          type: 'expense',
          icon: 'fa-solid fa-kit-medical',
          notes: 'monthly gym membership',
        },
        {
          id: 9,
          title: 'Vacation',
          amount: 1000,
          date: '2024-09-17',
          category: 'Leisure',
          type: 'expense',
          icon: 'fa-solid fa-umbrella-beach',
          notes: 'family vacation to Japan',
        },
        {
          id: 10,
          title: 'Jackpot',
          amount: 11000,
          date: '2024-09-19',
          category: 'Other Income',
          type: 'income',
          icon: 'fa-solid fa-money-bill',
          notes: 'jackpot at casino',
        },
        {
          id: 11,
          title: 'Online Course',
          amount: 300,
          date: '2024-09-03',
          category: 'Education',
          type: 'expense',
          icon: 'fa-solid fa-school',
          notes: 'Udemy programming course',
        },
        {
          id: 12,
          title: 'Car Insurance',
          amount: 600,
          date: '2024-09-06',
          category: 'Insurance',
          type: 'expense',
          icon: 'fa-solid fa-user-shield',
          notes: 'monthly car insurance',
        },
        {
          id: 13,
          title: 'Clothing Shopping',
          amount: 350,
          date: '2024-09-10',
          category: 'Clothing',
          type: 'expense',
          icon: 'fa-solid fa-shirt',
          notes: 'New suit for wedding',
        },
        {
          id: 14,
          title: 'Freelance Project 2',
          amount: 2500,
          date: '2024-09-18',
          category: 'Freelance',
          type: 'income',
          icon: 'fa-solid fa-money-bill',
          notes: 'freenlance project for accounting firm',
        },
        {
          id: 15,
          title: 'Car Payment',
          amount: 200,
          date: '2024-09-18',
          category: 'Freelance',
          type: 'expense',
          icon: 'fa-solid fa-car-side',
          notes: 'car payment',
        },
      ],
      budgets: [
        {
          category: 'Food',
          period: 'monthly',
          limit: 500,
          currentSpending: 350,
          startDate: '2024-09-01',
          endDate: '2024-09-30',
        },
        {
          category: 'Utilities',
          period: 'monthly',
          limit: 200,
          currentSpending: 100,
          startDate: '2024-09-01',
          endDate: '2024-09-30',
        },
        {
          category: 'Activities',
          period: 'monthly',
          limit: 300,
          currentSpending: 100,
          startDate: '2024-09-01',
          endDate: '2024-09-30',
        },
        {
          category: 'Rent',
          period: 'monthly',
          limit: 1200,
          currentSpending: 1200,
          startDate: '2024-09-01',
          endDate: '2024-09-30',
        },
      ],
      reminders: [
        {
          id: 1,
          title: 'Pay Rent',
          dueDate: '2024-09-25',
          recurring: true,
        },
        {
          id: 2,
          title: 'Electricity Bill',
          dueDate: '2024-09-29',
          recurring: true,
        },
        {
          id: 3,
          title: 'Pay Gym Membership',
          dueDate: '2024-09-20',
          recurring: true,
        },
      ],
    },
  ],
};
