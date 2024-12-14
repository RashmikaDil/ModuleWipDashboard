import LineBox from "./com/LineBox";
import homeData from "./data/homeData";


function Home(){
    return(<>
    
    {homeData.map((homeData,index)=>{
        return(<>
          <LineBox key={index} data={homeData}/>
             
                 
        </>)
    })}
    </>)
}
export default Home;