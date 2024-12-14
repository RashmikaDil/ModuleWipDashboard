function Header({HeaderTxt,discription}){
return(
    <>
    
    <div className="bg-teal-950  h-auto text-white flex justify-center items-center flex-col p-1">

<h1 className="text-teal-100  text-2xl">
    {HeaderTxt}
</h1>
<h2>
    {discription}
</h2>
    </div>  
    </>
)
}

export default Header;