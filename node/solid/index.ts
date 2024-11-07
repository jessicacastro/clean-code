interface PaymentMethod {
  getDiscountAmount: (amount: number) => number
}

// OC Principle
class Credit implements PaymentMethod {
  private installments: number

  constructor(installments: number) {
    this.installments = installments
  }

  public getDiscountAmount = (amount: number) => {
    if (this.installments === 1) {
      return amount * 0.05
    }

    if (this.installments <= 6) {
      return amount * 0.02
    }

    return 0
  }
}

// OC Principle
class Debit implements PaymentMethod {
  public getDiscountAmount = (amount: number) => {
    return amount * 0.05
  }
}

// OC Principle
class Billet implements PaymentMethod {
  public getDiscountAmount = (amount: number) => {
    return amount * 0.1
  }
}

// OC Principle
class Pix implements PaymentMethod {
  public getDiscountAmount = (amount: number) => {
    return amount * 0.15
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod

  // LS Principle and DI Principle
  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod
  }

  public execute = (amount: number) => {
    // LS Principle
    return this.paymentMethod.getDiscountAmount(amount)
  }
}


const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(6))
const discount = calculateOrderDiscount.execute(2000)

console.log(discount)
