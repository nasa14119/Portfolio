
export async function useSend(data) {
    let response = {
        succes : false, 
        error: ""
    }; 
    if(!data.name || !data.email || !data.comment){
        response.error = "Error in form"; 
        return response; 
    }
    const {name, email, comment} = data; 
    const body = {
        service_id: "service_4jdqfjp",
        template_id: "template_s12zw09",
        user_id: "A0vD7NY0LjlirK5LM",
        template_params:{
            name,
            email, 
            comment
        }
    }
    const url = "https://api.emailjs.com/api/v1.0/email/send"; 
    await fetch(url, {
        method: "POST", 
        body:JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res)=> {
        if(res.ok){
            response.succes = true; 
        }
    }
    ).catch(err =>{
        response.error = err; 
    })
    return response; 
}