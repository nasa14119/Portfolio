export const Images = ({row, data}) => {
    if(!data) return; 
    return (
      <div className={`images-conteiner-row-${row}`} >
        {data.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Images of the proyect"
              className="animation-load-image"
            />
        ))}
      </div>
    );
  }