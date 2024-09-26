function Navbar (){
    return(
        <div className="flex justify-between">
            <img className="w-40" src="assets/spot.png" alt="logo" />
            <div className="flex">
                <img className="w-8 h-8" src="assets/search.png" alt="" />
                <div>
                    <img className="w-8 h-8" src="assets/panier.png" alt="panier" />
                    
                </div>

            </div>
        </div>

    )
}
export default Navbar