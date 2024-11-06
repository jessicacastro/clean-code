// Boleanos
const userInfo = {
  name: 'Jessica Castro',
  height: 160,
  hasTicket: true,
}

const minAllowedHeight = 130

const currentHours = new Date().getHours()

const isParkOpen = currentHours > 9 && currentHours < 18

if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

const userHasTicket = userInfo.hasTicket

if (!userHasTicket) {
  throw new Error(`${userInfo.name} não possui um bilhete para entrar no parque!`)
}

const doesUserCanEnterToy = userInfo.height > minAllowedHeight

if (!doesUserCanEnterToy) {
  throw new Error(`${userInfo.name} não pode entrar no brinquedo!`)
} 

console.log(`${userInfo.name} se divertiu muito! :)`)