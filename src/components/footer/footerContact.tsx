function FooterContact (){
    return(
        <div>
            <hr />
            <div>
                <div className="flex justify-between p-5">
                    <div>
                        <p className="text-sm font-light text-left pl-16">Country/region</p>
                        <select className="border border-black rounded p-2 mt-2" name="" id="">
                            <option  value="">United States (CAD $)</option>
                        </select>
                        <p className="font-extralight text-xs p-6">2024, theme-spotlight-demo Powered by Shopify</p>
                    </div>
                    <div className="flex gap-3">
                        <img className="w-8 h-8 border p-1" src="assets/visa.png" alt="logo visa" />
                        <img className="w-8 h-8 border p-1" src="assets/mastercard.png" alt="logo mastercard" />
                        <img className="w-8 h-8 border p-1" src="assets/paypal.png" alt="logo paypal" />
                        <img className="w-8 h-8 border p-1" src="assets/discover.png" alt="logo disco" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterContact
