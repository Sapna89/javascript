//address Object
//properties: street, city and zip
//showAddress(address) will display the address

const address = {
    street: 'abc',
    city: 'xyz',
    zip: 123
};

function showAddress(address)
{
    let fullAddress = '';
    for (const key in address) {
        fullAddress += address[key];     
    }
    console.log(fullAddress);
    
}

showAddress(address);
