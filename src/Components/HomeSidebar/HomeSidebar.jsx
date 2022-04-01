import React from 'react';
import styles from "./HomeSidebar.module.css";
import {Link} from "react-router-dom";
import {useState} from 'react';



export const HomeSidebar = ({handleClick}) => {
    const [name,setName] = useState("")

    


  return (
    <div className={styles.topContent}>
        <div className={styles.sidemenu}>
            <ul className={styles.navarea}>
                <p className={styles.sidebarheading} >TOP CATEGORIES</p>
                <li>
                    <Link to={"/men"}>
                        <span className={styles.insidesidebarmain}
                        value={"men"}
                        onChange={(e)=>setName(e.target.value)}
                        // onClick={handleClick(name)}
                        >
                            <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png" width="28px" /></span>

                        <span className={styles.insidesidebarmain2}>
                            <p className={styles.in}>Men's Fashion</p>
                        </span>  
                        </Link>

                    <div className={styles.subnav}>
                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>FOOTWEAR</span><br/>
                                    Sports Shoes<br/>
                                    Casual Shoes<br/>
                                    Slippers & Flip Flops<br/>
                                    Sandals & Floaters<br/>
                                    Formal Shoes<br/>
                                    Loafers<br/>
                                    Sneakers<br/>
                                    Ethnic Footwear<br/>
                                    Show Accessories<br/>
                                    <span className={styles.viewall}>View All &gt;</span>
                                    <br/>
                                    <br/>
                                    <span className={styles.submenuphead}>BAGS & LUGGAGE</span><br/>
                                    Backpacks<br/>
                                    Laptop Bags<br/>
                                    Hiking Bags<br/>
                                    Luggage & Suitcases<br/>
                                    Travel Accessories<br/>
                                    Office Bags<br/>
                                    <span className={styles.viewall}>View All &gt;</span>
                                    <br />
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>CLOTHING</span><br/>

                                    T-shirt Polos<br/>
                                    Half Sleeve Shirts<br/>
                                    Shirts<br/>
                                    Jeans<br/>
                                    Trousers & Chinos<br/>
                                    Innerwear & Sleepwear<br/>
                                    <span className={styles.viewall}>View All &gt;</span>
                                    <br/>
                                    <br />
                                    <span className={styles.submenuphead}>WINTER WEAR</span><br/>
                                    Jackets<br/>
                                    Sweatshirts<br/>
                                    Sweaters<br/>
                                    Thermals<br/>

                                    <br/>
                                    <br />
                                    <span className={styles.submenuphead}>SPORTSWEAR</span><br/>
                                    T-Shirts & Polos<br/>
                                    Trackpants & Tracksuits<br/>
                                    <span className={styles.viewall}>View All &gt;</span>
                                    <br />
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>FEATURED STORES</span><br/>
                                    99 Store<br/>
                                    Imports Store<br/>
                                    Beauty Store<br/>
                                    Wedding Store<br/>
                                    Travel Store<br/>
                                    Anti-Pollution Store<br/>
                                    Mobiles Accessories Mela<br/>
                                    Bicycle Store<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>SPECIAL OFFERS</span><br/>
                                    Sports Shoes 20-60% Off<br/>
                                    Sarees Starting Rs. 499<br/>
                                    TVs & Accessories<br/>
                                    Automotive Upto 60% Off<br/>
                                    Cricket Gear From Rs. 150<br/>
                                    Storage - Under 999<br/>
                                    Toys Upto 70% Off<br/>
                                    Best in PowerBanks
                                </p>
                            </div>
                        </div>
                        <div className={styles.submenu}>
                            <div>
                                <img src="https://n4.sdlcdn.com/imgs/i/1/o/MF-05994.jpg" />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.sidebarmain}><Link to={"/women"}>
                        <span className={styles.insidesidebarmain}><img src="https://i2.sdlcdn.com/img/leftnavicon09/30x30home_living2.png" width="28px" /></span>
                        <span className={styles.insidesidebarmain2}>
                            <p className={styles.in}>Women's Fashion</p>
                        </span></Link>

                    <div className={styles.subnav}>
                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>MOBILE PHONES</span><br/>
                                    Smartphones<br/>
                                    Feature Phones<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>MOBILE CASES & COVERS</span><br/>
                                    New Launches Covers<span> 🔥</span> <br/>
                                    Printed Back Covers<br/>
                                    Plain Back Covers<br/>
                                    Flip Covers<br/>
                                    Premium Covers<br/>
                                    <span className={styles.viewall}>View All  &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>POWER BANKS</span><br/>
                                    Ambrane<br/>
                                    Intex<br/>
                                    Syska<br/>
                                    Polymer Power Banks<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>TOP BRANDS</span><br/>
                                    Panasonic<br/>
                                    Micromax<br/>
                                    Intex<br/>
                                    Samsung<br/>
                                    Karbonn
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}> MOBILE ACCESSORIES</span><br/>
                                    Batteries<br/>
                                    Screen Guards<br/>
                                    Cables & Chargers<br/>
                                    Smartwatch Accessories<br/>
                                    Selfie Sticks<br/>
                                    Bluetooth Devices<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>WEARABLES & SMARTWATCHES</span><br/>
                                    Life Like<br/>
                                    Top Selling Wearables<br/>
                                    TABLETS<br/>
                                    iKall<br/>
                                    Samsung<br/>
                                    Micromax<br/>
                                    iBall<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>

                                    <br/>
                                    <span className={styles.submenuphead}>TABLET ACCESSORIES</span><br/>
                                    Tablet Covers<br/>
                                    Tablet Keyboards
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>FEATURED STORES</span><br/>
                                    POPULAR SMARTPHONES
                                    Redmi Note 5 Pro<br/>
                                    Redmi Note 6 Pro<br/>
                                    Samsung Galaxy J6+<br/>
                                    Vivo V11 Pro<span> 🔥</span> <br/>
                                    Oppo F9 Pro<br/>
                                    Oppo A3S<br/>
                                    Honor 9 Lite<br/>
                                    Vivo Y83 Pro<br/>
                                    Lenovo K8 Plus<br/>
                                    Samsung Galaxy J2 Core<br/>
                                    Vivo Y71i<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>POPULAR FEATURE PHONES</span><br/>
                                    I Kall K71 (Dark Blue)<br/>
                                    JIO MOBILE (Black, 4G)<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>POPULAR ACCESSORIES</span><br/>
                                    Ambrane 10000 mAh<br/>
                                    Ambrane 13000 mAh<br/>
                                    Callmate 15000 mAh<br/>
                                    Intex 12500 mAh<br/>
                                    Stonx 15000 mAh<br/>
                                    Must Haves Accessories<br/>
                                </p>
                            </div>
                        </div>
                        <div className={styles.submenu}>
                            <div>
                                <img src="https://n1.sdlcdn.com/imgs/i/n/g/MS_WomenWatches_LeftNav1Aug-e15a1.jpg" />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.sidebarmain}><Link to={"/kitchen"}>
                        <span className={styles.insidesidebarmain}><img src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg" width="28px"/></span>
                        <span className={styles.insidesidebarmain2}>
                            <p className={styles.in}>Home & Kitchen</p>
                        </span></Link>

                    <div className={styles.subnav}>
                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>TELEVISIONS</span><br/>

                                    Top Selling TVs<br/>
                                    Full HD TVs<br/>
                                    Smart TVs<br/>
                                    Ultra HD TVs<br/>
                                    DTH Services<br/>
                                    Streaming Media Players<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>SPEAKERS</span><br/>
                                    Home Audio Systems<br/>
                                    Bluetooth Speakers<br/>
                                    2.1 & 2.0 Speakers<br/>
                                    HEADPHONE & EARPHONES<br/>
                                    Headphones<br/>
                                    Earphones<br/>
                                    Headsets with Micromax<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>AUDIO & VIDEO</span><br/>
                                    iPods & MP3 Players<br/>
                                    DVD & Blu-ray Players<br/>
                                    Projectors<br/>
                                    Audio & Video Accessories<br/>
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>WINTER APPLIANCES</span><br/>
                                    Geysers<br/>
                                    Immersion Rods<br/>
                                    Room Heaters<br/>
                                    Oil Filled Radiators<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>WASHING MACHINES</span><br/>
                                    Semi Automatic<br/>
                                    Fully Automatic<br/>
                                    SUMMER APPLIANCES<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>FANS</span><br/>
                                    Ceiling Fans<br/>
                                    Table Fans<br/>
                                    Pedestal Fans<br/>
                                    Exhaust Fans
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>FEATURED STORES</span><br/>
                                    SMALL APPLIANCES<br/>
                                    Microwaves & OTG<br/>
                                    Air Purifiers<br/>
                                    Vacuum Cleaners<br/>
                                    Irons<br/>
                                    Landline Phones<br/>
                                    Home Security Systems<br/>
                                    Sewing Machines<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>GROOMING APPLIANCES</span><br/>
                                    Trimmers<br/>
                                    Shavers<br/>
                                    Hair Dryers<br/>
                                    Hair Straighteners<br/>
                                    Hair Curlers & More<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>CAMERAS & ACCESSORIES</span><br/>
                                    DSLRs<br/>
                                    Camera Accessories<br/>
                                    Camera Lenses<br/>
                                    Action Cameras<br/>
                                    Binoculars and Telescopes<br/>
                                    Digital CAMERAS
                                </p>
                            </div>
                        </div>
                        <div className={styles.submenu}>
                            <div>
                                <img src="https://n4.sdlcdn.com/imgs/i/1/o/electronics-7e68c.jpg"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.sidebarmain}><Link to={"/kids"}>
                        <span className={styles.insidesidebarmain}><img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30music1.png" width="28px" /></span>
                        <span className={styles.insidesidebarmain2}>
                            <p className={styles.in}>Toys, Kids'Fashion</p>
                        </span></Link>

                    <div className={styles.subnav}>
                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>LAPTOPS</span><br/>
                                    Core i3 Laptops<br/>
                                    Core i5/i7 Laptops<br/>
                                    Budget Laptops<br/>
                                    Thin & Light Laptops<br/>
                                    <span className={styles.viewall}><a href="category_product_page.html" style={{color: "#337ab7", paddingLeft: "1px"}}>View All &gt;</a></span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>PRINTERS & INKS</span><br/>
                                    Printers<br/>
                                    Scanners<br/>
                                    Inks & Toners<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>STORAGE</span><br/>
                                    External Hard Drives<br/>
                                    Memory cards<br/>
                                    Pen Drives<br/>
                                    SSD<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>NETWORKING DEVICES</span><br/>
                                    Data Cards<br/>
                                    Dongles<br/>
                                    Routers
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>TOP LAPTOP BRANDS</span><br/>
                                    HP<br/>
                                    Dell<br/>
                                    Lenovo<br/>
                                    Apple<br/>
                                    Acer<br/>
                                    Asus<br/>
                                    MSI<br/>
                                    <br/>
                                    <span className={styles.submenuphead}>COMPUTER ACCESSORIES</span><br/>
                                    Keyboards<br/>
                                    Mouse<br/>
                                    Webcams<br/>
                                    Laptop Skins<br/>
                                    Cooling Pads<br/>
                                    Extension Cords<br/>
                                    Warranty Insurance<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>DESKTOPS</span><br/>
                                    All in One<br/>
                                    Mini Desktop<br/>
                                    Tower Desktop<br/>
                                    Assembled Desktops<br/>
                                    <span className={styles.viewall}>View All &gt;</span>
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>GAMING</span><br/>
                                    Gaming Consoles<br/>
                                    Gaming Accessories<br/>
                                    Gaming Titles<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>COMPUTER COMPONENTS</span><br/>
                                    CPU<br/>
                                    Motherboard<br/>
                                    RAM<br/>
                                    Graphic Card<br/>
                                    Internal Hard Drive<br/>
                                    UPS<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>SOFTWARE</span><br/>
                                    Antivirus<br/>
                                    Operating System<br/>
                                    Office<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>MONITORS</span><br/>
                                    Full HD<br/>
                                    HD<br/>
                                    Wide XGA<br/>
                                    <span className={styles.viewall}>View All &gt;</span>
                                </p>
                            </div>
                        </div>
                        <div className={styles.submenu}>
                            <div>
                                <img src="https://n1.sdlcdn.com/imgs/i/1/r/Laptopacc_28oct-581f8.jpg" />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.sidebarmain}><Link to={"/beauty"}>
                        <span className={styles.insidesidebarmain}><img src="https://i1.sdlcdn.com/img/leftnavicon09/fashion30x30_3.png" width="28px" /></span>
                        <span className={styles.insidesidebarmain2}>
                            <p className={styles.in}>Beauty & Health</p>

                        </span></Link>

                    <div className={styles.subnav}>
                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>KITCHEN APPLIANCES</span><br/>
                                    Juicer Mixer Grinders<br/>
                                    Water Purifiers<br/>
                                    Gas Stoves & Hobs<br/>
                                    Chimneys<br/>
                                    Induction Cooktops<br/>
                                    Kettles & Coffee Makers<br/>
                                    Choppers & Blenders<br/>
                                    Sandwich Makers<br/>
                                    Roti Makers<br/>
                                    Electric Cookers<br/>
                                    Air Fryers<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>KITCHENWARE</span><br/>
                                    Cookware & Bakeware<br/>
                                    Kitchen Storage<br/>
                                    Dining & Serving<br/>
                                    Kitchen Tools<br/>
                                    Pressure Cookers<br/>
                                    Water Bottles<br/>
                                    Tea & Coffeeware<br/>
                                    Bar Accessories<br/>
                                    <span className={styles.viewall}>View All &gt;</span>
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>HOME FURNISHING</span><br/>
                                    Bed Linen<br/>
                                    Bath Linen<br/>
                                    Blankets & Quilts<br/>
                                    Curtains & Accessories<br/>
                                    Mattresses<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>FURNITURE</span><br/>
                                    Living Room<br/>
                                    Bedroom<br/>
                                    Dining Sets & Bar Units<br/>
                                    Chairs<br/>
                                    Storage & Display<br/>
                                    Bean Bags<br/>
                                    Tables & Desks<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>HOME DÉCOR</span><br/>
                                    Lighting Fixtures<br/>
                                    Wall Decor<br/>
                                    Gifts & Decor<br/>
                                    Religion & Spirituality<br/>
                                    LED Bulbs<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                </p>
                            </div>
                        </div>

                        <div className={styles.submenu}>
                            <div>
                                <p className={styles.submenup}><span className={styles.submenuphead}>FEATURED STORES</span><br/>
                                    HOME IMPROVEMENT<br/>
                                    Home Utility<br/>
                                    Cleaning Mops<br/>
                                    Plants & Gardening<br/>
                                    Ironing Boards<br/>
                                    Home Cleaning<br/>
                                    Laundry Accessories<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>TOOLS & HARDWARE</span><br/>
                                    Power & Hand Tools<br/>
                                    Bathroom Accessories<br/>
                                    Electrical<br/>
                                    Taps & Showers<br/>
                                    Safes Lock & Door Fitting<br/>
                                    Sanitaryware<br/>
                                    <span className={styles.viewall}>View All &gt;</span><br/>
                                    <br/>
                                    <span className={styles.submenuphead}>PET SUPPLIES</span><br/>
                                    Dog Supplies<br/>
                                    Cat Supplies<br/>
                                    Fish & Aquatic Supplies<br/>
                                    Bird Supplies<br/>
                                    <span className={styles.viewall}>View All &gt;</span>
                                </p>
                            </div>
                        </div>
                        <div className={styles.submenu}>
                            <div>
                                <img src="https://n1.sdlcdn.com/imgs/i/1/r/GM_28oct-e8cd1.jpg" />
                            </div>
                        </div>
                    </div>
                </li>

                <p className={styles.sidebarheading}>MORE CATEGORIES</p>
                <li><a href="">Automotives</a></li>
                <li><a href="">Mobile & Accessories</a></li>
                <li><Link to={"/electronic"}>Electronics</Link></li>
                <li><a href="">Sports, Fitness & Outdoor</a></li>
                <li><a href="">Computers & Gaming</a></li>
                <li><a href="">Books,Media & Music</a></li>
                <li><a href="">Hobbies</a></li>
                <p className={styles.sidebarheading}>TRENDING SEARCHES</p>
                <p className={styles.sidebarnohover}><a href=""><span className={styles.materialicons}>&#128269;</span><span>&nbsp; Boy Tshirts
                            </span></a></p>
                <p className={styles.sidebarnohover}><a href=""><span className={styles.materialicons}>&#128269;</span><span>&nbsp;
                            Slipper</span></a></p>
                <p className={styles.sidebarnohover}><a href=""><span className={styles.materialicons}>&#128269;</span><span>&nbsp; Watch
                            Women</span></a></p>
                <p className={styles.sidebarnohover}><a href=""><span className={styles.materialicons}>&#128269;</span><span>&nbsp; Anarkali
                            Kurti Women</span></a></p>
                <p className={styles.sidebarnohover}><a href=""><span className={styles.materialicons}>&#128269;</span><span>&nbsp;
                            Nighty</span></a></p>
            </ul>
        </div>
    </div>
  )
}