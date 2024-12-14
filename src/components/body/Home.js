import ChartComponent from "./com/ChartComponnent";
import LineBox from "./com/LineBox";
import homeData from "./data/homeData";


function Home(){
    return(<>
   
   {homeData.map((homeData,index)=>{
        return(<>
          <LineBox key={index} data={homeData}/>
             
                 
        </>)
    })}

    <div className="w-full h-auto">
      <ChartComponent></ChartComponent>
      </div> 
    
    </>)
}
export default Home;