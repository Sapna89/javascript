const name = 'sapna';
function emailBody(value){
    let msgBody;
    if (value === 'new'){
        msgBody = 
        `Welcome ${name}!! We value your time
        and thanks for joining our team`;
    }
    if (value === 'old'){
        msgBody = 
        `Hey ${name}!! We value your time
and thanks for being in our team`;
    }

    return msgBody;
}
const msg = 
`Hi ${name},

${emailBody('old')}

Regards,
Team`;

console.log(msg);
