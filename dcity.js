
class city{
    constructor(name, country, area) {
        this.name = name;
        this.country = country;
        this.area = area;
    }
    photo(){
        switch(this.name) {
            case "Istanbul": 
            return "https://media-cdn.tripadvisor.com/media/photo-s/05/9c/58/fc/tarihi-istanbul.jpg";
            break;
            case "New york": 
            return "https://www.city-journal.org/sites/cj/files/New-York.jpg";
            break;
            case "tokyo": 
            return "http://www.socialventurepartners.org/wp-content/uploads/2014/12/Tokyo.Rainbow.Bridge.resized.jpg";
            break;
            case "Tehran":
            return "https://photorator.com/photos/images/-view-of-tehran-from-the-nature-bridge-pol-e-tabiat-iran-74985.jpg"
        }
    }
    displayInfo() {
        console.log(`${this.name} is in ${this.country} and its totalt area is ${this.area} .`);
    }
    getHTMLElement() {
        const divElement = document.createElement("div");
        divElement.className = "circular-button";    
        divElement.style.backgroundImage = `url('${this.photo()}')`;
        divElement.onclick = this.speak.bind(this); 
        return divElement;

    }
    /*playSound(){
        this.playSound.bind(this);
        switch(this.type) {
            case "dog": SoundManager.play("./sounds/dog.mp3"); break;
            case "cow": SoundManager.play("./sounds/cow.mp3"); break;
            case "cat": SoundManager.play("./sounds/cat.mp3"); break;
        }
    }*/

    speak() {
          let text = `${this.name} is in ${this.country} and its totalt area is ${this.area} Square kilometre .`
          
          let msg = new SpeechSynthesisUtterance();

          let voices = window.speechSynthesis.getVoices();
          msg.text = text;    
          speechSynthesis.speak(msg);
        }
      
}