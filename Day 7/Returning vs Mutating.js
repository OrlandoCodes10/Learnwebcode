let pets = [
    {name: "Meowsalot", species: "cat", age: 2},
    {name: "Barksalot", species: "dog", age: 3},
    {name: "Purrsloud", species: "cat", age: 8},
]

console.log(pets.push({name: "Puppster", species: "dog", age: 1}))
pets.map(nameOnly)

function nameOnly()