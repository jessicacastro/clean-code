class Recipient {
  public street: string
  public number: number
  public neighborhood: string
  public zipCode: string

  constructor(street: string, number: number, neighborhood: string, zipCode: string) {
    this.street = street
    this.number = number
    this.neighborhood = neighborhood
    this.zipCode = zipCode
  }
}