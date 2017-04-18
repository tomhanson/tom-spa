const uniqueArrayCheck = (array) => {
    let a = array.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i].id === a[j].id)
                a.splice(j--, 1);
        }
    }
    return a;
};
export default uniqueArrayCheck;