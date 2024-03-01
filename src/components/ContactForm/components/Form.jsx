import React, {useRef} from 'react'

function Form({handleSubmit}) {
  const email = useRef("");
  const name = useRef("");
  const comment= useRef("");
  return (
    <form className="contact" onSubmit={ async (e) => {
        e.preventDefault(); 
        const isOk = await handleSubmit({
          email: email.current, 
          name: name.current,
          comment: comment.current
        }); 
        if(isOk){
          email.current = "", 
          name.current= "", 
          comment.current = ""
        }
      }}>
    <label htmlFor="email">
      <span>Email</span>
      <input type="email" name="email" id="email" onChange={(e)=> email.current = e.target.value}/>
    </label>
    <label htmlFor="name">
      <span>Name</span>
      <input type="text" name="name" id="name" onChange={(e)=> name.current = e.target.value}/>
    </label>
    <label htmlFor="comment">
      <span>Comment</span>
      <textarea type="text" name="comment" id="comment" rows={3} onChange={(e)=> comment.current = e.target.value}/>
    </label>
    <input type="submit" name="submit" id="submit" value="send" />
  </form>
  )
}

export default Form