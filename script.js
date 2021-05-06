class Writer{
    constructor(){
        this.args = arguments;
        this.ID   = arguments[arguments.length-2];
        this.MS   = arguments[arguments.length-1];
        this.texts   = []
        this.denetle()
    }
    denetle(){
        if(typeof(this.MS) != "number"){
            console.error("msError: Please Give Number MS Value")
        }
        if(this.args.length<3){
            console.error("argError: Please Give 3 Argument")
        }
        if(document.getElementById(this.ID) == undefined){
            console.error("idError: Element Not Found")
        }
        if(this.args.length>=3){
            for(var i = 0; i< this.args.length-2;i++){
                this.texts.push(this.args[i])
            }
        }
    }
    mod1(){
        var status = "write";
        var word_index   = 0;
        var character_index = 0;
        var time = 0;

        setInterval(() => {
            var element = document.getElementById(this.ID);
            
            if(status == "write"){ 
                element.innerHTML+=this.texts[word_index][character_index]
                if(this.texts[word_index].length>character_index){
                    character_index++;
                }
                if(this.texts[word_index].length == character_index){
                    status = "remove"
                }
            }

            if(status == "remove"){
                time++;
                if(time>9){
                    var element = document.getElementById(this.ID)
                    if(element.innerHTML.length!=0){
                        element.innerHTML = element.innerHTML.substring(element.innerHTML.length-1,element.innerHTML+1)
                    }
                    if(this.texts.length-1>= word_index && element.innerHTML.length == 0){
                        word_index++;
                        character_index = 0;
                        time = 0;
                        status="write";    
                    }
                    
                }
                if(word_index == this.texts.length){
                    word_index = 0;
                    character_index = 0;
                    time = 0;
                    status ="write"
                }
                }
        }, this.MS)
    }
    mod2(){
        var status = "write";
        var word_index   = 0;
        var character_index = 0;
        var time = 0;

        setInterval(() => {
            var element = document.getElementById(this.ID);
            
            if(status == "write"){ 
                element.innerHTML+=this.texts[word_index][character_index]
                if(this.texts[word_index].length>character_index){
                    character_index++;
                }
                if(this.texts[word_index].length == character_index){
                    status = "remove"
                }
            }

            if(status == "remove"){
                time++;
                if(time>9){
                    var element = document.getElementById(this.ID)
                    if(element.innerHTML.length!=0){
                        element.innerHTML = element.innerHTML.substring(1)
                    }
                    if(this.texts.length-1>= word_index && element.innerHTML.length == 0){
                        word_index++;
                        character_index = 0;
                        time = 0;
                        status="write";    
                    }
                    
                }
                if(word_index == this.texts.length){
                    word_index = 0;
                    character_index = 0;
                    time = 0;
                    status ="write"
                }
                }
        }, this.MS)
    }
}

const writer = new Writer("Welcome!","With Postegro you will be able to see private Instagram accounts.","DENEME","DENEDMAEDADA","DENEMASDMSAKD","textt",100 )
writer.mod1()