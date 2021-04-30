let result;
function combine(input1: number | string, input2: number | string) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        
        result = input1 + input2;
    }else{
      result =  input1.toString() + input2.toString();
    }
    return result;

    }
    const combinedAges = combine(22,17);
    console.log(combinedAges);

    const combinedNames = combine('George ','Gerald');
    console.log(combinedNames);
    
    