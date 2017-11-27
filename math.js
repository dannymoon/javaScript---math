function zero_negativity(arr){
    for (let i = 0; i<arr.length; i++ ){
        if(arr[i] < 0){
            return false;
        }
    }
    return true;
}

function is_even(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}

function how_many_even(arr){
    let count = 0;
    for (let i = 0; i<arr.length; i++){
       if (is_even(arr[i])){
           count += 1
       }
    }
    return count
}

function create_dummy_array(n){
    const arr = [];
    for(let i = 0; i<n; i++){
        arr.push(Math.floor(Math.random()*10))
    } 
    return arr
}
let dot = 8
create_dummy_array(dot)

function random_choice(arr){
    let ind = Math.floor(Math.random()*arr.length);
    return arr[ind]
}

let ran = [1,3,5,8,11]
random_choice(ran)