
function Form({handleSubmit}) {
  return (
    <form className="contact" onSubmit={ async (e) => {
        e.preventDefault(); 
        const data = Object.fromEntries(new FormData(e.target))
        const isOk = await handleSubmit(data); 
        if(isOk){
          e.target.reset()
        }
      }}>
    <label htmlFor="email">
      <span>Email</span>
      <input type="email" name="email" id="email"/>
    </label>
    <label htmlFor="name">
      <span>Name</span>
      <input type="text" name="name" id="name"/>
    </label>
    <label htmlFor="comment">
      <span>Comment</span>
      <textarea type="text" name="comment" id="comment" rows={3} />
    </label>
    <input type="submit" name="submit" id="submit" value="send" />
  </form>
  )
}

export default Form