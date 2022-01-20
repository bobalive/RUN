class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.selector)

        this.top = obj.top

        this.element.style.position = 'fixed'
        this.unit = obj.unit

        this.element.style.top = this.scroll()

        window.addEventListener('scroll', () => this.scroll())
    }

    scrollNumber() {
        if(this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            return (window.innerHeight / 100 * this.top) - this.element.clientHeight
        }
    }

    scroll() {
        this.window = this.scrollNumber()

        if(this.window - scrollY > 0) {
            this.element.style.top = this.window - scrollY + 'px'
        }else {
            this.element.style.top = 0
        }
    }
}

const myScroll = new Scroll(
    {
        selector: '.header__nav',
        top: 100
    }
    )


class Move{
    constructor(obj){

        this.element = document.querySelector(obj.selector);
        this.elementH = this.element.clientHeight;
        this.elementW = this.element.clientWidth;

        this.parent = document.querySelector(obj.parent);
        this.parentH = this.parent.clientHeight;
        this.parentW = this.parent.clientWidth;

        this.navH= document.querySelector(obj.nav).clientHeight

        this.element.addEventListener('mouseover', ()=>{
            this.randPostition()
        })
    }
    randPostition(){

        this.y = this.randY();
        this.x = this.randX()


        this.element.style =`
        left:${this.x}px;
        top:${this.y}px;
        
        `
        console.log(this.y);
        console.log(this.x);
        console.log(this.navH);
        console.log(this.parentH);
        console.log(this.parentW);
        console.log(this.elementW);
    }

    randY(){
        return Math.floor(Math.random()*((this.parentH-this.navH-this.elementH)+1))
    }
    randX(){
        return Math.floor(Math.random()*((this.parentW - this.elementW)+1))
    }
}

const run = new Move({
    selector:'.header__content',
    parent:'.header',
    nav:".header__nav"
})