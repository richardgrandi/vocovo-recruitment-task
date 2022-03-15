const randomChar = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

const appliances = []

for (let i = 0; i < 30; i++) {
  appliances.push({
    id: i,
    name: `${randomChar()} Appliance`,
    createdAt: randomDate(new Date(2022, 0, 1), new Date(2022, 0, 30)),
  })
}

export default appliances
