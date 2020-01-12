const fs = require('fs') 
let Phone = require('./model/Phone')
let QuickSort = require('./lib/QuickSort')

const Constants = {
     name: 0,
     color: 1,
     price: 2,
     storage: 3,
     rating: 4, 
     url: 5
}

const TestData = 
    [ {
        name: 'iPhone X',
        color: 'Black',
        price: '$799',
        storage: '256GB',
        rating: '3.5 stars',
        url: 'https://www.amazon.com/iPhone_X_Black' },
      {
        name: 'iPhone X',
        color: 'White',
        price: '$799',
        storage: '256GB',
        rating: '3.5 stars',
        url: 'https://www.amazon.com/iPhone_X_White' },
      {
        name: 'iPhone 11',
        color: 'Black',
        price: '$999',
        storage: '128GB',
        rating: '3.75 stars',
        url: 'https://www.amazon.com/iPhone_X_Black' },
       {
        name: 'iPhone 11',
        color: 'White',
        price: '$999',
        storage: '128GB',
        rating: '3.75 stars',
        url: 'https://www.amazon.com/iPhone_X_White' },
       {
        name: 'iPhone 11',
        color: 'Rose Gold',
        price: '$1099',
        storage: '256GB',
        rating: '4 stars',
        url: 'https://www.amazon.com/iPhone_11_Rose_Gold' },
      {
        name: 'iPhone 11',
        color: 'Black',
        price: '$1099',
        storage: '256GB',
        rating: '4 stars',
        url: 'https://www.amazon.com/iPhone_X_Black' } ]

const readFile = async (path) => {
     
    return new Promise((res, rej)=>{ 
        fs.readFile(path, 'utf8', (err, data)=> {
            if (err) rej(err)
            res(JSON.parse(data))
      })
    }) 
}


var getListOfPhones = async () => {
    
    return new Promise((res, rej)=> {
        let phonesList = []
        readFile('input_json.txt').then(data=>{
             data.forEach(phoneData=>{
                  let phone = new Phone(phoneData[Constants.name], phoneData[Constants.color], phoneData[Constants.price],
                    phoneData[Constants.storage], phoneData[Constants.rating], phoneData[Constants.url])
                    phonesList.push(phone)
             })
             res(phonesList)
        })
        .catch((err)=>{
             console.log(err)
             rej(err)
        })
    })
}

const writeFile = async () => {
    
    return new Promise((res, rej)=>{
        getListOfPhones().then((result)=>{
            let quickSort = new QuickSort()
            let outputJson = quickSort.quickSort(result, 0, result.length-1)
            outputJson.then(result=>{
                fs.writeFile('output_json.txt', JSON.stringify(result),(err)=>{
                    if(err) rej(err)
                    res(result)
                })
            })
        })
    })
}

const test_output = async ()=>{

        writeFile().then((result)=>{
            for(let i=0; i < result.length; i++) {
                if(result[i].price === TestData[i].price) {
                    console.log(`Expected: ${TestData[i].price}, Actual: ${result[i].price}`)
                }
                else {
                    console.log(`Test Failed: Expected: ${TestData[i].price}, Actual: ${result[i].price}`)
                    break
                }
                console.log('Test Passed')
            }
       })   
}

test_output()