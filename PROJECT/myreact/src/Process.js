import React from 'react';
import './App.css';


const SCAN = ({isRed,temp}) => {  
    var b = main();

	function main() {
        var table = [[1,5,5,5,5], [5,2,5,5,5], [5,5,3,5,5], [5,5,5,4,5], [5,5,5,5,5]];
        var statement = isRed;
        var str_inp = 0, state = 0, flag = 0, input ;
        var dot = '.';
        var cin = 'cin';
        var temp2 = 'temp';
        var semicolon = ';';
        str_inp = splitting(statement);
        try{
            for (var i =0;i<str_inp.length;i++){
                
                if (str_inp[i] === cin){
                    input = 0;
                }
                else if (str_inp[i] === dot){
                    input = 1;
                }
                else if (str_inp[i] === temp2) {
                    input = 2;
                }
                else if (str_inp[i] === semicolon){
                    input = 3; 
                }
                else {
                    input = 4;
                }
                
                state = table[state][input];
                if (state === 4){
                    flag = 1;
                } else if (state === 5){
                    break;
                }
             }
        
        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
    }


    function splitting(state_ment){
        var str =toCharArray(state_ment);
        var split = varsplit(state_ment);
        var l=split.length - 1;
        try{
            var str1 = [];
            var from = 0;
            var testme = 0;
            for (var i=0;i<l;i++){
                str1.push(split[i]);
                from = split[i].length + from;
                str1.push(str[from + testme]);
                testme++;
            }
            var cap = str1.length;
            var save2 = [];
            for (i=0;i<cap;i++){
                save2.push(str1[i]);
            }
            
        }
        catch(err){
        }
        
        return save2;

    }


    function toCharArray(str){
        var charArray =[];
        try{
        for(var i=0;i<str.length;i++){
             charArray.push(str[i]);
        }}catch(err){}
        
        return charArray;
    }


    function varsplit(state_ment){
        var spl=state_ment.split(/[.;]/);
        return spl;
    }


    var ask_value;
    if(temp===1) ask_value = prompt("Enter Value");

    function twodigit(ask_value){
        var table = [ [1,3], [2,3], [3,3] ];
        var state = 0, flag = 0, input;
        try{
            for (var i =0;i<ask_value.length;i++){
                if (numcheck(ask_value[i]) === true){
                    input = 0;
                }
                else {
                    input = 1;
                }
                
                state = table[state][input];
                if (state === 2 || state === 1){
                    flag = 1;
                } else if (state === 3){
                    flag = 0;
                    break;
                }
             }

        }catch(err){}
        if (flag === 1){
            return 1;
        } 
        else {
            return 0;
        }
    }

    function numcheck(value){
        return value >= '0' && value <='9';
    }


    return(
        <div className="App">
            <header className="App-footer">
               <textarea 
                    cols="75" 
                    defaultValue={temp===1 ? b===1 ? twodigit(ask_value)===1 ? 
                        "\n \n \n \n VALID NUMBER INPUT \n \n \n temp = " + ask_value + "\n" 
                        : "\n \n \n \n INVALID NUMBER INPUT\n \n \n Accepts number \n \n up to two digits only" 
                        : "\n \n \n \n ERROR: \n \n \nInvalid Syntax \n" : "" 
                    }
                    
                    placeholder="Result:" 
                    className={temp===1 ? b===1 ? twodigit(ask_value)===1 ? "green" 
                    : "red" : "red" : "inline-textarea"}
                    >
                </textarea>

            </header>
           
        </div>
    );
}

export default SCAN;
