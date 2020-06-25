import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const incomeTypeTransactions = this.transactions.filter(
      transaction => transaction.type === 'income',
    );

    const outcomeTypeTransactions = this.transactions.filter(
      transaction => transaction.type === 'outcome',
    );

    const income = incomeTypeTransactions.reduce(
      (total, transaction) => total + transaction.value,
      0,
    );

    const outcome = outcomeTypeTransactions.reduce(
      (total, transaction) => total + transaction.value,
      0,
    );

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: Request): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
