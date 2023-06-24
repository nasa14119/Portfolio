import "./styles.css"
function BackgrounImageAnimation({data}) {
  const Images = (start) => {
    return (
      <div>
        {data.map((src, i) =>(
          <img src={src} alt="Images of the proyect" key={i + start} loading="lazy"/>
        ))}
      </div>
    );
  }
  return (
    <section className="conteiner-backgroundImage">
      <div className="grid-images-conteiner">
        <Images start={100}/> 
        <Images start={200}/> 
      </div>
      <div className="grid-images-conteiner">
        <Images start={300}/> 
      </div>
      <div className="grid-images-conteiner">
        <Images start={600}/> 
        <Images start={700}/> 
      </div>
    </section>
  );
}

export default BackgrounImageAnimation