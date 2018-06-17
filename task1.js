function checkPalindrome() {
    
    process.argv.splice(0,2);
    
    var str = process.argv.join();
    var removeChar = str.replace(/[^a-zA-ZА-Яа-яЁё]/g,'').toLowerCase(); 
    var reverseChar = removeChar.split('').reverse().join('');
    
    if (removeChar == reverseChar) {
        return 'YES';
    } else {
        return 'NO';
    }
}

console.log(checkPalindrome());
