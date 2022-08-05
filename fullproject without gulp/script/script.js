class CreateContent{
    constructor(parentElem,image,smTitle,bgTitle,author,date,viewers,mainDescr){
        this.parentElem = document.querySelector(parentElem);
        this.image = image;
        this.smTitle = smTitle;
        this.bgTitle = bgTitle;
        this.author = author;
        this.date = date;
        this.viewers = viewers;
        this.mainDescr = mainDescr;
    }
    render(){
        let newELem = document.createElement('div');
        newELem.classList.add("main_content_box");
        newELem.innerHTML = ` 
        <img class ="main_content_img" srcset = ${this.image}
        sizes="(max-width: 600px) 360px,200px"
        src=${this.image}
        alt="Content Box Image">
        <a class ='main_content_sm_title'>${this.smTitle}</a>
        <a class ='main_content_bg_title'>${this.bgTitle}</a>
                <div class="main_content_descr">
                        <p class="main_content_author">${this.author}</p>
                        <p class ='main_content_date'>${this.date}</p>
                        <p class ='main_content_date'>${this.viewers}</p>
                </div>
        <p class ='main_content_text_descr'>
        ${this.mainDescr}
        </p>
        `
        this.parentElem.append(newELem);
    }
}

for(let i = 0;i <= 9;i++){
    new CreateContent(
        '.main_content_container',
        "img/Rectangle.png",
        'Lifestyle',
        'Eat Right For Your Exercise Regime',
        'Niek Bove',
        'April 8, 2018',
        '3K Views',
        ' Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…'
        ).render()
}

// MOBILE MODAL WINDOW

class ModalWindow{
    constructor(bigHeader,smHeader,openBtn,closeBtn){
        this.bigHeader = document.querySelector(bigHeader);
        this.smHeader = document.querySelector(smHeader);
        this.openBtn = document.querySelector(openBtn);
        this.closeBtn = document.querySelector(closeBtn);
    }

    hideModal(){
       this.bigHeader.classList.remove("hide");
       this.bigHeader.classList.add("show");

       this.smHeader.classList.remove('fade');
       this.smHeader.classList.remove("show");
       this.smHeader.classList.add("hide");
    }
    showModal(){
       this.smHeader.classList.remove("hide");
       this.smHeader.classList.add("show");
        
       this.smHeader.classList.add('fade');
       this.bigHeader.classList.remove("show");
       this.bigHeader.classList.add("hide");
    }

}

let Modal = new ModalWindow('.header_big_screen_menu','.header-sm-screen','.header_hamburger','.second_header_hamburger');

function show(){
    Modal.showModal();
}
function hide(){
    Modal.hideModal();
}
// Функция вызова модального окна работает только когда ширина экрана меньше или равна 810пикселях,на остальных экранах вызвать модальное окно не возможно
if(window.innerWidth <= 810){
    Modal.openBtn.addEventListener("click",show);
    Modal.closeBtn.addEventListener('click',hide);
}else{
    Modal.openBtn.removeEventListener("click",show);
    Modal.closeBtn.removeEventListener('click',hide);
}

// SCROLL APPEARANCE


let myScrollFunc = () => {
    let y = window.scrollY;
    if (y >= 200) {
      Modal.bigHeader.classList.add("close")
      Modal.bigHeader.classList.remove("appear")
    } else {
        Modal.bigHeader.classList.add("appear")
        Modal.bigHeader.classList.remove("close")
    }
  };
  
  window.addEventListener("scroll", myScrollFunc);