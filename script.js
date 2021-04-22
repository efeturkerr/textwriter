//Author : Efe Türker

class setWriter{
    constructor(){
        this.state= [{"check_status":0}]
        this.arguments = arguments;
        this.Check(arguments)
    }
    Check(arg){
        if(document.getElementById(this.arguments[this.arguments.length-2]) == null){
            console.error("objectIdError: Element Not Found")
            this.state[0].check_status++;
        }
        if(arg.length <= 2){
            console.error("missingArgError: Enter At Least 3 Parameters")
            this.state[0].check_status++;
        }
        if(typeof(arg[arg.length-1])!= "number"){
            console.error("millisecondError: Enter a Number in Last Parameter");
            this.state[0].check_status++;
        }
    }
    Start(){
        if(this.state[0].check_status == 0){
            const texts   = [];
            var   writed_text = 0;
            var   timee    = 0;
            var   statuss = "write";
            var   milliseconds = this.arguments[this.arguments.length-1];
    
            for(var i =0; i<this.arguments.length-2;i++){
                texts.push(this.arguments[i])
            }
            var   length  = texts.length;
    
    
            setInterval(() => {
                var length_text = texts[writed_text].length;
                var element = document.getElementById(this.arguments[this.arguments.length-2])
                if(timee < length_text && statuss=="write"){
                    status == "write";
                    element.innerHTML += texts[writed_text][timee];
                    timee++
                    if(element.innerHTML == texts[writed_text]){
                        timee =0;
                    }
                }
                if(element.innerHTML == texts[writed_text] || statuss=="remove"){
                    statuss ="remove"
                    timee++;
                    if(timee >= milliseconds/6){
                        element.innerHTML = element.innerHTML.substring(element.innerHTML.length-1,element.innerHTML+1)
                    }
                    
                    if(element.innerHTML == ""){
                        if(writed_text<length){
                            writed_text++;
                            timee = 0;
                        }
                        if(writed_text == length){
                            writed_text= 0;
                        }
                        statuss = "write";
                    }
                }
                
            }, milliseconds)
        }
    }
}


//Örnek Kullanım
const deneme = new setWriter("Yazi1","Yazi2","İstediğiniz Kadar Yazi Ekleyebilirsiniz", "constreamtext", 100) //Sonda Verilen Değer Gecikme Süresidir
deneme.Start()


