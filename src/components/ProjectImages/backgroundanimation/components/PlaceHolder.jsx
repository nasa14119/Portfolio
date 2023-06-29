export const PlaceHolder = () => {
    return (
      <div className="loader-conteiner">
        {Array(70)
          .fill(null)
          .map((e, i) => (
            <div
              key={i}
            ></div>
          ))}
      </div>
    );}