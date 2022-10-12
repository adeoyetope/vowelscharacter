
function readSentence(text){
    let sentenceLength = 0;
    let words = 0;
    let vowelCount = 0;
    let consonantCount = 0;

    char = {
        a:'a',
        e:'e',
        i:'i',
        o:'o',
        u:'u',
    }
    if (words = ' '){
        words ++
    }
    
    for(i = 0; i < text.length; i++){
        sentenceLength = text[i]

        if(char[text[i].toLowerCase()]){
            vowelCount++
        }
        else{consonantCount++}
        if([sentenceLength = [i] ]){
            sentenceLength++
        }
        
        }
        
    return {sentenceLength,vowelCount,consonantCount}
}
console.log(readSentence('This is just the begining of the point.'))
