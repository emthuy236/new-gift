import React,{useEffect} from "react";
import "./main.css";
import "./main.scss";
import img1 from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img6 from "../../Assets/img6.jpg"
import img7 from "../../Assets/img7.jpg"
import img8 from "../../Assets/img8.jpg"
import img9 from "../../Assets/img9.jpg"
import img10 from "../../Assets/img10.jpg"
import img11 from "../../Assets/img11.jpg"
import img12 from "../../Assets/img12.jpg"
import img13 from "../../Assets/img13.jpg"
import img14 from "../../Assets/img14.jpg"
import img15 from "../../Assets/img15.jpg"
import img16 from "../../Assets/img16.jpg"
import img17 from "../../Assets/img17.jpg"
import img18 from "../../Assets/img18.jpg"
import img19 from "../../Assets/img19.jpg"
import img20 from "../../Assets/img20.jpg"
import img21 from "../../Assets/img21.jpg"
import img22 from "../../Assets/img22.jpg"
import img23 from "../../Assets/img23.jpg"
import img24 from "../../Assets/img24.jpg"
import img25 from "../../Assets/img25.jpg"
import img26 from "../../Assets/img26.jpg"
import img27 from "../../Assets/img27.jpg"
import img28 from "../../Assets/img28.jpg"
import img29 from "../../Assets/img29.jpg"
import img30 from "../../Assets/img30.jpg"
import img31 from "../../Assets/img31.jpg"
import img32 from "../../Assets/img32.jpg"
import img33 from "../../Assets/img33.jpg"
import img34 from "../../Assets/img34.jpg"
import img35 from "../../Assets/img35.jpg"
import img36 from "../../Assets/img36.jpg"
import img37 from "../../Assets/img37.jpg"
import img38 from "../../Assets/img38.jpg"
import img39 from "../../Assets/img39.jpg"
import img40 from "../../Assets/img40.jpg"
import img41 from "../../Assets/img41.jpg"
import img42 from "../../Assets/img42.jpg"
import img43 from "../../Assets/img43.jpg"
import img44 from "../../Assets/img44.jpg"
import img45 from "../../Assets/img45.jpg"
import img46 from "../../Assets/img46.jpg"
import img47 from "../../Assets/img47.jpg"
import img48 from "../../Assets/img48.jpg"
import img49 from "../../Assets/img49.jpg"
import img50 from "../../Assets/img50.jpg"

import {HiOutlineLocationMarker,HiOutlineClipboardCheck} from "react-icons/hi"
import Aos from "aos"
import "aos/dist/aos.css"


const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    }
    ,{
        id: 8,
        imgSrc: img8,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 10,
        imgSrc: img10,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 11,
        imgSrc: img11,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 12,
        imgSrc: img12,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 13,
        imgSrc: img13,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 14,
        imgSrc: img14,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 15,
        imgSrc: img15,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 16,
        imgSrc: img16,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 17,
        imgSrc: img17,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 18,
        imgSrc: img18,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 19,
        imgSrc: img19,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },{
        id: 20,
        imgSrc: img20,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 21,
        imgSrc: img21,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 22,
        imgSrc: img22,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 23,
        imgSrc: img23,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 24,
        imgSrc: img24,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 25,
        imgSrc: img25,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 26,
        imgSrc: img26,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 27,
        imgSrc: img27,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 28,
        imgSrc: img28,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 29,
        imgSrc: img29,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 30,
        imgSrc: img30,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 31,
        imgSrc: img31,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 32,
        imgSrc: img32,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 33,
        imgSrc: img33,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 34,
        imgSrc: img34,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 35,
        imgSrc: img35,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 36,
        imgSrc: img36,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 37,
        imgSrc: img37,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 38,
        imgSrc: img38,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 39,
        imgSrc: img39,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 40,
        imgSrc: img40,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 41,
        imgSrc: img41,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 42,
        imgSrc: img42,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 43,
        imgSrc: img43,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 44,
        imgSrc: img44,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 45,
        imgSrc: img45,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 46,
        imgSrc: img46,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 47,
        imgSrc: img47,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 48,
        imgSrc: img48,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 49,
        imgSrc: img49,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },
    {
        id: 50,
        imgSrc: img50,
        destTitle: "Bé Thủy",
        location: "Nam Dinh City",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: `The moment attracted by your eyes, smile and beauty.\nLove you with all my heart.\nLove you 3000`
    },

]


const Main = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Memories Moments
                </h3>
            </div>

            <div className="secContent grid">
            {Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                return (
                    <div data-aos="fade-up" key={id} className="singleDestination">

                        <div className="imgDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                            <h4 className="destTitle">
                                {destTitle}
                            </h4>
                            <span className="continent flex">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className="name">{location}</span>
                            </span>

                            {/* <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div> */}

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className="btn flex">
                                 
                                DETAILS <HiOutlineClipboardCheck className="icon"/>
                            </button>
                        </div>
                    </div>
                )
            })}
            </div>

        </section>
    )
}

export default Main;