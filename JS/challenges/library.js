const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os Segredos da Mente Milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O Homem Mais Rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai Rico, Pai Pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como Enfrentar o Mal do Século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 Hábitos das Pessoas Altamente Eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

let countCategories = booksByCategory.length
console.log("Total de Categorias:", countCategories)

for(let categories of booksByCategory) {
    console.log("Categoria:", categories.category)
    console.log("Número de livros nessa categoria:", categories.books.length)
}

function countAuthors() {
    let authors = []

    for(let categories of booksByCategory) {
        for(let books of categories.books) {
            if(authors.indexOf(books.author) == -1) {
                authors.push(books.author)
            }
        }
    }

    console.log("Total de Autores:", authors.length)
}

countAuthors()

function booksOfAuthor(author) {
    let books = []

    for(let categories of booksByCategory) {
        for(let book of categories.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

console.log(`Livros do Autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor("Augusto Cury")