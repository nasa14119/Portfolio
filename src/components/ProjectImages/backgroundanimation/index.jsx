import "./styles.css"
import { useFetchImage } from "./hooks/useFethchImage";
import {Images} from "./components/Images"; 
import {PlaceHolder} from "./components/PlaceHolder";
 
function BackgrounImageAnimation() {
  const {isLoading, data} = useFetchImage(); 
  
  if (isLoading) {
    return (
      <div className="overflow-hidden absolute inset-0 -z-50">
        <div className="conteiner-backgroundImage">
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden absolute inset-0 -z-50">
      <div className="conteiner-backgroundImage">
        <Images row={1} data={data}/>
        <Images row={2} data={data}/>
        <Images row={3} data={data}/>
      </div>
    </div>
  );

}

export default BackgrounImageAnimation