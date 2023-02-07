let buttonAdd = document.querySelector('#btn');
let myBook = document.querySelector('#library-container');
let valTitle = document.querySelector('#val-ti');
let valAu = document.querySelector('#val-au');
let valNum = document.querySelector('#val-num');
let p;
let pCont;



let myLibrary = [];

function Book(p,pCont,title,author,pages,haveRead) {
    this.pCont = pCont
    this.p = p
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = document.createElement('button')
    this.haveRead.innerText = haveRead
    this.haveRead.classList.add('btn-status')
    pCont.appendChild(this.haveRead)
    this.haveRead.addEventListener('click', ()  => {
        if(this.haveRead.innerText === "yes") {
            this.haveRead.innerText = "no";
           
        }
        else if(this.haveRead.innerText === "no") {
            this.haveRead.innerText = "yes";
            
       }

    })


    this.buttonDel = document.createElement('button')
    this.buttonDel.innerText = 'Remove this book from the list'    
    this.buttonDel.classList.add('btn-del')
    pCont.appendChild(this.buttonDel)
    this.buttonDel.addEventListener('click', () => {
        deleteItem()
        this.pCont.remove()
    })
  }
 

  function addBookToLibrary() {
    if (document.querySelector('#title').value === "") { 
        valTitle.setAttribute("style", "visibility: visible;");
    } else {valTitle.setAttribute("style", "visibility: hidden;");}; 
    if  (document.querySelector('#author').value === "") {
        valAu.setAttribute("style", "visibility: visible;");
       } else {valAu.setAttribute("style", "visibility: hidden;");}; 
    if (document.querySelector('#pages').value === "" ) {
        valNum.setAttribute("style", "visibility: visible;");
    } else {valNum.setAttribute("style", "visibility: hidden;");};

    if (document.querySelector('#title').value === "" ||
        document.querySelector('#author').value === "" ||
        document.querySelector('#pages').value === "") {
            return;
        }
    else {
    pCont = document.createElement("div");
    pCont.classList.add('pCont');
    myBook.appendChild(pCont);
    
    p = document.createElement("div");
    p.classList.add('par');
    pCont.appendChild(p);
        
   
    const newBook = new Book(p,pCont, document.querySelector('#title').value, document.querySelector('#author').value,
    document.querySelector('#pages').value, document.querySelector('#read').value);
    myLibrary.push(newBook);
    p.setAttribute('id', myLibrary.indexOf((newBook)));
    
     }

    addBookToScreen();
}
  

  function addBookToScreen() {

    for(let i =0; i < myLibrary.length; i++) {
        p.textContent = `Book's name: ${myLibrary[i].title} | Author: ${myLibrary[i].author} |
         Number of pages: ${myLibrary[i].pages} | Have read:`;
        
    }
}

  buttonAdd.addEventListener('click',addBookToLibrary);

  function deleteItem() {
 
    myLibrary.splice(myLibrary.indexOf(this.Book),1);
  
}

