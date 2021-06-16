import React, { useState, useRef } from "react"
import { Link } from 'gatsby'
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'
import Industry from '../components/industrySol'
const IndexPage = () => {

    const [Style, setStyle] = useState({ width: "427px", height: "576px" })
    const [Style2, setStyle2] = useState({ width: "471px", height: "414px" })
    const [Style3, setStyle3] = useState({ width: "840px", height: "580px" })

    const [Filter, setFilter] = useState({})
    const [Filter2, setFilter2] = useState({})
    const [Filter3, setFilter3] = useState({})


    const [Data, setData] = useState([{
            image: "/images/wallet-buy.png",
            id: 0,
            title: "A top-tier VMware cloud Infrastructure network with 13 datacenters powered by Equinix",
            desc: "Its a Dummay Text using in this website  "
        },
        {
            image: "/images/wallet-control-funds.png",
            id: 1,
            title: "Multi-cloud managed, We take the complexity out of the question so you can focus on your core services. From VM provisioning orchestration and migration ",
            desc: "Description for a blockchain "
        },
        {
            image: "/images/wallet-earn-interest.png",
            id: 2,
            title: "Encrypted cloud with military-grade encryption technology",
            desc: "Description for a blockchain "
        },
        {
            image: "/images/wallet-borrow.png",
            id: 3,
            title: "Application management and DevOps tools",
            desc: "Description for a blockchain "
        },
        {
            image: "/images/wallet-swap.png",
            id: 4,
            title: ". Cloud backup and storage",
            desc: "Description for a blockchain "
        }
    ])

    const [DataTwo, setDataTwo] = useState([{
            image: "/images/exchange-fiat-currencies.png",
            id: 0,
            title: " Industry 4.0 Security- ICS/SCADA Security Consulting, Blockchain Assessment, IoT Security Assessment, Cloud Security Assessment",
            desc: "Description for a blockchain "

        },
        {
            image: "/images/exchange-matching-engine.png",
            id: 1,
            title: "Risk Advisory- SOC 1 Advisory Services, PCI DSS Compliance Audit, HITRUST Compliance Consulting, ISO Certification Advisory",
            desc: "Description for a blockchain "

        },
        {
            image: "/images/exchange-chat-support.png",
            id: 2,
            title: " Architecture Review and Assessment- Security Automation and DevSecOps Consultation, Security Architecture and Configuration Reviews, Threat intelligence and Modelling, Managed Compliance Services ",
            desc: "Description for a blockchain "

        },
        {
            image: "/images/exchange-api.png",
            id: 3,
            title: "Penetration Testing- API Security Assessment, Secure Source Code Review, Mobile Application Security Assessment, Web Application and Services Security Assessment, Firewall Security Assessment, Thick Client Security Assessment, Infrastructure Security Assessment, Red Team Assessment",
            desc: "Description for a blockchain "

        },
        {
          image: "/images/exchange-api.png",
          id: 4,
          title: " Email security that protects against malicious email at danger point-endpoint and your business from cyberattacks",
          desc: "Description for a blockchain "

      },
    ])

    const [DataThree, setDataThree] = useState([{
            image: "/images/explore-blockchains.png",
            id: 0,
            title: "Headless ecommerce consulting",
            desc: "Description for a blockchain "

        },
        {
            image: "/images/explore-api.png",
            id: 1,
            title: "Managed public Cloud for ecommerce",
            desc: "Description for a blockchain "

        },
        {
            image: "/images/explore-charts.png",
            id: 2,
            title: "Managed security crafted for ecommerce storefront",
            desc: "Description for a blockchain "

        },
        {
            image: "/images/explore-prices.png",
            id: 3,
            title: "Digital experience for SMB’s",
            desc: "Description for a blockchain "

        },
    ])
    const [Index, setIndex] = useState(0)
    const [Index2, setIndex2] = useState(0)
    const [Index3, setIndex3] = useState(0)


    function ActiveOne(data) {

        if (data.id === 3) {
            setStyle({ width: "1100px", height: "816px" })
        } else if (data.id === 4) {
            setStyle({ width: "1100px", height: "816px" })

        } else {
            setStyle({ width: "427px", height: "576px" })
        }
        setFilter(data)
        setIndex(data.id)

    }

    function ActiveTwo(data) {

        if (data.id === 3) {
            setStyle2({ width: "782px", height: "539px" , marginLeft : "-6rem" })

        } else {
            setStyle2({ width: "471px", height: "414px" })
        }
        setFilter2(data)
        setIndex2(data.id)

    }


    function ActiveThree(data) {
        if (data.id === 0) {
            setStyle3({ width: "840px", height: "580px" })

        } 
       
        else if (data.id === 2) {
            setStyle3({ width: "767px", height: "580px" })
        }
        
        else if (data.id === 3) {
            setStyle3({ width: "927px", height: "655px" })

        } else {
            setStyle3({ width: "556px", height: "540px" })
        }
        setFilter3(data)
        setIndex3(data.id)
    }
    const sliderRef  = useRef();
    const sliderRef2  = useRef();
    const sliderRef3 = useRef();
    const next = () => {
      sliderRef.current.slickNext()
    }
    const previous = () => {
      sliderRef.current.slickPrev()
    }
    const next2 = () => {
      sliderRef2.current.slickNext()
    }
    const previous2 = () => {
      sliderRef2.current.slickPrev()
    }
    const next3 = () => {
      sliderRef3.current.slickNext()
    }
    const previous3 = () => {
      sliderRef3.current.slickPrev()
    }


    console.log("my nam", Style)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (

        <
        div >
        <
        Seo title = "Home" / >
        <
        div className = "mainPage" >
        <
        div className = "row" >
        <
        div className = "col-md-12" > 
            <header className="header">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-xl-2 col-lg-2">
                            <div className="header__logo">
                            <div className="Header__NavInner-ra9ecu-3 iOduCZ"><a aria-label="homepage" class="Header__CustomLink-ra9ecu-18 eSyNeo" intl="[object Object]" href="/"><svg height="64" class="Logotype__Logo-kddhy2-0 ktiruQ" fill="none" viewBox="0 0 438 64" width="438" xmlns="http://www.w3.org/2000/svg"><path d="m4.10706 25.6934-2.18999 2.19c-.60615.5823-1.088401 1.281-1.417833 2.0543-.329431.7733-.499237 1.6051-.499237 2.4457 0 .8405.169806 1.6724.499237 2.4456.329432.7733.811683 1.4721 1.417833 2.0544l17.64293 17.817c.4182.4278.9049.7827 1.44 1.05v-21.597z" fill="#3d89f5"></path><path d="m43.8929 25.6934 2.19 2.19c.6062.5823 1.0884 1.281 1.4179 2.0543.3294.7733.4992 1.6051.4992 2.4457 0 .8405-.1698 1.6724-.4992 2.4456-.3295.7733-.8117 1.4721-1.4179 2.0544l-17.6429 17.817c-.4182.4278-.9049.7827-1.44 1.05v-21.597z" fill="#1656b9"></path><path d="m39.6569 21.2234-11.04-11.07c-.5845-.60237-1.2839-1.0813-2.0569-1.40834s-1.6038-.49555-2.4431-.49555-1.6702.16851-2.4431.49555c-.773.32704-1.4725.80597-2.0569 1.40834l-11.07002 11.07 15.51002 7.74z" fill="#85b5f8"></path><path d="m67.1605 50h15.5362c8.1676 0 12.5178-4.2614 12.5178-10.0497 0-5.38-3.853-8.6293-7.9901-8.8246v-.3551c3.782-.8523 6.5696-3.5334 6.5696-7.8125 0-5.451-4.0483-9.3217-12.0738-9.3217h-14.5597zm7.6882-6.2855v-9.6591h6.4453c3.6932 0 5.9837 2.1307 5.9837 5.1314 0 2.7344-1.8643 4.5277-6.1612 4.5277zm0-14.8615v-9.0021h5.8416c3.4091 0 5.3445 1.7578 5.3445 4.3856 0 2.8764-2.3437 4.6165-5.4865 4.6165zm31.5403-15.2166h-7.5639v36.3636h7.5639zm17.132 36.8963c8.274 0 13.423-5.6641 13.423-14.0625 0-8.4517-5.149-14.098-13.423-14.098-8.275 0-13.424 5.6463-13.424 14.098 0 8.3984 5.149 14.0625 13.424 14.0625zm.035-5.8594c-3.817 0-5.77-3.4979-5.77-8.2564s1.953-8.2741 5.77-8.2741c3.747 0 5.7 3.5156 5.7 8.2741s-1.953 8.2564-5.7 8.2564zm29.379 5.8594c7.262 0 11.825-4.2614 12.18-10.5291h-7.138c-.444 2.9119-2.361 4.5454-4.954 4.5454-3.533 0-5.823-2.9652-5.823-8.1854 0-5.1491 2.308-8.0966 5.823-8.0966 2.77 0 4.546 1.8289 4.954 4.5455h7.138c-.32-6.3033-5.096-10.4403-12.216-10.4403-8.274 0-13.388 5.735-13.388 14.098 0 8.2919 5.025 14.0625 13.424 14.0625zm15.773-.5327h7.564v-8.6648l2.042-2.326 7.439 10.9908h8.86l-10.635-15.4652 10.121-11.8075h-8.683l-8.736 10.3515h-.408v-19.4424h-7.564zm39.051.5327c7.262 0 11.825-4.2614 12.18-10.5291h-7.138c-.443 2.9119-2.361 4.5454-4.953 4.5454-3.534 0-5.824-2.9652-5.824-8.1854 0-5.1491 2.308-8.0966 5.824-8.0966 2.77 0 4.545 1.8289 4.953 4.5455h7.138c-.319-6.3033-5.096-10.4403-12.216-10.4403-8.274 0-13.387 5.735-13.387 14.098 0 8.2919 5.024 14.0625 13.423 14.0625zm23.337-16.2997c.018-3.5157 2.166-5.5753 5.256-5.5753 3.071 0 4.883 1.9709 4.865 5.3267v16.0156h7.564v-17.3651c.017-6.392-3.747-10.2627-9.429-10.2627-4.137 0-6.907 1.9531-8.149 5.1669h-.32v-13.9027h-7.351v36.3636h7.564zm30.164 16.2819c4.031 0 6.641-1.7578 7.973-4.2969h.213v3.782h7.173v-18.3949c0-6.4986-5.504-9.2329-11.577-9.2329-6.534 0-10.831 3.125-11.878 8.0966l6.995.5681c.515-1.811 2.131-3.1427 4.848-3.1427 2.574 0 4.048 1.2961 4.048 3.5334v.1065c0 1.7578-1.864 1.9886-6.605 2.4503-5.398.4971-10.245 2.3082-10.245 8.3984 0 5.3977 3.853 8.1321 9.055 8.1321zm2.166-5.2202c-2.326 0-3.995-1.0831-3.995-3.1605 0-2.1306 1.758-3.1782 4.422-3.5511 1.651-.2308 4.35-.6215 5.255-1.2251v2.8941c0 2.8587-2.361 5.0426-5.682 5.0426zm17.811 4.7053h7.564v-27.2727h-7.564zm3.8-30.7884c2.255 0 4.101-1.7223 4.101-3.8352 0-2.0952-1.846-3.8175-4.101-3.8175-2.237 0-4.084 1.7223-4.084 3.8175 0 2.1129 1.847 3.8352 4.084 3.8352zm16.137 15.0214c.018-3.5157 2.113-5.5753 5.167-5.5753 3.036 0 4.865 1.9886 4.847 5.3267v16.0156h7.564v-17.3651c0-6.3565-3.728-10.2627-9.41-10.2627-4.048 0-6.978 1.9886-8.203 5.1669h-.32v-4.8118h-7.209v27.2727h7.564z" fill="#fff"></path><path d="m327.885 50.4616c2.273 0 4.244-1.8998 4.261-4.2613-.017-2.326-1.988-4.2259-4.261-4.2259-2.344 0-4.279 1.8999-4.261 4.2259-.018 2.3615 1.917 4.2613 4.261 4.2613zm21.544.0711c7.262 0 11.825-4.2614 12.18-10.5291h-7.138c-.443 2.9119-2.361 4.5454-4.953 4.5454-3.534 0-5.824-2.9652-5.824-8.1854 0-5.1491 2.308-8.0966 5.824-8.0966 2.769 0 4.545 1.8289 4.953 4.5455h7.138c-.319-6.3033-5.096-10.4403-12.216-10.4403-8.274 0-13.387 5.735-13.387 14.098 0 8.2919 5.024 14.0625 13.423 14.0625zm28.096 0c8.274 0 13.423-5.6641 13.423-14.0625 0-8.4517-5.149-14.098-13.423-14.098-8.275 0-13.424 5.6463-13.424 14.098 0 8.3984 5.149 14.0625 13.424 14.0625zm.035-5.8594c-3.817 0-5.771-3.4979-5.771-8.2564s1.954-8.2741 5.771-8.2741c3.746 0 5.7 3.5156 5.7 8.2741s-1.954 8.2564-5.7 8.2564zm17.056 5.3267h7.564v-16.3707c0-3.0185 1.918-5.0249 4.439-5.0249 2.486 0 4.155 1.7045 4.155 4.3857v17.0099h7.333v-16.6548c0-2.8232 1.616-4.7408 4.368-4.7408 2.415 0 4.226 1.5092 4.226 4.5455v16.8501h7.546v-18.3416c0-5.9127-3.516-9.2862-8.594-9.2862-3.995 0-7.102 2.0419-8.221 5.1669h-.284c-.87-3.1605-3.658-5.1669-7.404-5.1669-3.675 0-6.463 1.9531-7.599 5.1669h-.32v-4.8118h-7.209z" fill="#b1b8c7"></path></svg></a></div>
                            </div>
                          </div>
                          <div className="col-xl-10 col-lg-10 manu">
                            <nav className="header__menu">
                              <ul> 
                                <li className="active"><Link to="./index.html">Compute </Link>
                                <ul class="drop">
                                    
                                   <li> <Link to="">Infrastructure</Link> </li> 
                                    <li><Link to="./product-details.html" className="lists"> multi-cloud managed service</Link></li>
                                    <li><Link to="./shop-cart.html" className="lkdkoT">encrypted cloud host</Link></li>
                                    
                                  
                                  </ul>

                                
                                </li>
                                <li><Link to="/page-2">Secure </Link>
                                
                                <ul class="drop">
                                    
                                    <li> <Link to="./product-details.html" className="lists">Industry 4.0 Security</Link> </li> 
                                     <li><Link to="./product-details.html" className="lists"> Risk Advisory</Link></li>
                                     <li><Link to="./shop-cart.html" className="lkdkoT">Architecture Review & Assessment</Link></li>
                                     <li><Link to="./checkout.html" className="lkdkoT">Penetration Testing </Link></li>
                                     <li><Link to="./blog-details.html" className="lkdkoT">Secure e-commerce</Link></li>
                                   
                                   </ul>
                                </li>
                                <li><Link to="/">Governance</Link>
                                <ul class="drop">
                                    
                                   <li> <Link to="">Data protection consultation</Link> </li> 
                                    <li><Link to="./product-details.html" className="lists"> backup and storage</Link></li>
                                    <li><Link to="./shop-cart.html" className="lkdkoT">File sharing and communication , email security</Link></li>
                                    
                                  
                                  </ul>
                                </li>
                                <li><Link to="/">Marketplace</Link></li>
                                <li ><Link to="/" style={{fontSize:'30px'}}>...</Link>
                                  <ul class="drop">
                                    <div className="row">
                                    <div className="col-md-4">
                                   <li> <h5 style={{color:'black'}} className="lists">Products</h5> </li> 
                                    <li><Link to="./product-details.html" className="lists"> <a href="https://www.blockchain.com/api" class="MegaMenu__Link-fwgpnb-6 lkdkoT">APIs</a></Link></li>
                                    <li><Link to="./shop-cart.html" className="lkdkoT">Shop Cart</Link></li>
                                    <li><Link to="./checkout.html" className="lkdkoT">Checkout</Link></li>
                                    <li><Link to="./blog-details.html" className="lkdkoT">Blog Details</Link></li></div>
                                    <div className="col-md-4">
                                   <li> <h5 style={{color:'black'}}>Products</h5> </li> 

                                      <li><Link to="./product-details.html" className="lkdkoT">Product Details</Link></li>
                                    <li><Link to="./shop-cart.html" className="lkdkoT">Shop Cart</Link></li>
                                    <li><Link to="./checkout.html" className="lkdkoT">Checkout</Link></li>
                                    <li><Link to="./blog-details.html" className="lkdkoT">Blog Details</Link></li></div>
                                    <div className="col-md-4">
                                   <li> <h5 style={{color:'black'}}>Products</h5> </li> 

                                      <li><Link to="./product-details.html" className="lkdkoT">Product Details</Link></li>
                                    <li><Link to="./shop-cart.html" className="lkdkoT">Shop Cart</Link></li>
                                    <li><Link to="./checkout.html" className="lkdkoT">Checkout</Link></li>
                                    <li><Link to="./blog-details.html" className="lkdkoT">Blog Details</Link></li></div>
                                    
                                  </div>
                                  </ul>
                                </li>
                               <li>
                               
                                 </li>
                                 <li><Link to="./product-details.html">Cyber Network </Link></li>
                                    <li><Link to="./shop-cart.html">Get started</Link></li>
                              
                              </ul>
                         
                            </nav>
                            <button color="white" class="MenuButtonHeader__ButtonContainer-urn3wi-0 jBpvMa"><img class="menu" src="/images/icon-menu.svg" aria-label="open menu" height="24" width="24"/><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" class="close" aria-label="close menu" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                          </div>
                        </div>
                      </div>
                      </header> 
                      

                   

         
        <div className="blockchain">
        <div className="container">
        <div className="Hero__Content-qcrt3z-2 ihFzyG">
  <h1 className="Text__H1-sc-1fwf07x-0 Hero__Title-qcrt3z-3 bXOxZm">WE ARE THE ALL-IN-ONE –CLOUD & SECURITY MANAGED SOLUTIONS EXPERTS FOR AFRICAN BUSINESSES
</h1>
  <p className="Text__Subtitle1-sc-1fwf07x-5 Hero__Subtitle-qcrt3z-4 hYkJYl">We aspire to create digitally secure Africa; our business is your cloud journey and Data Sovereignty 
</p>
  <div className="Hero__Actions-qcrt3z-5 dZfOdn">
    <a className="Link__CustomLink-sc-1p80yfz-20 chwvAc Button__ButtonLink-sc-1e82yhp-1 jHkljB Hero__HeroButton-qcrt3z-6 jViBwBB" rel="nofollow noopener noreferrer" href="https://login.blockchain.com/#/signup?showWallet?utm_campaign=dcommarketing_getstarted">WATCH VIDEO</a>
    <a className="Link__CustomLink-sc-1p80yfz-10 chwvAc Button__ButtonLink-sc-1e82yhp-1 gNbMkg Hero__HeroButton-qcrt3z-6 Hero__LoginButton-qcrt3z-7 iwHypJ" href="https://login.blockchain.com/#/login">
   .
    </a>
  </div>
</div>


        </div>
      </div>
      
      <div classname="container">
      <div className="Prices__Wrapper-n3azef-0 hPrCxG pages__CoinsPrices-sc-4cqbfo-1 gETplh">
        <div className="Prices__ContentContainer-n3azef-1 jVLwBo">
          <div className="Prices__ScrollContainer-n3azef-4 KMnhL">
            <div className="Prices__ListContainer-n3azef-5 zsWV">
              <a className="Prices__CoinCardLink-n3azef-6 ioooOI" href="https://www.blockchain.com/prices/BTC/">
               
                <div className="Prices__CoinNameContainer-n3azef-11 jeNYII">
                  <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highligh-sc-1fwf07x-8 Prices__Text-n3azef-3 SzvxD">
                  Addic Cloud
                   
                  </p>
                  
                </div>
                
              </a>
              <a className="Prices__CoinCardLink-n3azef-6 ioooOI" intl="[object Object]" href="https://www.blockchain.com/prices/ETH/"><div className="Prices__Header-n3azef-16 bNDbFp"><div className="Prices__IconContainer-n3azef-17 bsCBuV">
                    
                    </div>
                    </div>
                <div className="Prices__CoinNameContainer-n3azef-11 jeNYII">
                  <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highligh-sc-1fwf07x-8 Prices__Text-n3azef-3 SzvxD">
                  Addic cyber Defense
                  
                  </p>
                 
                </div>
                <div className="Prices__ChartContainer-n3azef-10 dBOFHT">
                  <div style={{ width: '100%', height: '100%' }} /></div>
              </a>
              <a className="Prices__CoinCardLink-n3azef-6 ioooOI" intl="[object Object]" href="https://www.blockchain.com/prices/XLM/">
              
                <div className="Prices__CoinNameContainer-n3azef-11 jeNYII">
                  <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highligh-sc-1fwf07x-8 Prices__Text-n3azef-3 SzvxD">
                  Addic Data Governance
                   
                  </p>
                  
                </div>
                <div className="Prices__ChartContainer-n3azef-10 dBOFHT"><div style={{ width: '100%', height: '100%' }} /></div>
              </a>
              <a className="Prices__CoinCardLink-n3azef-6 ioooOI" intl="[object Object]" href="https://www.blockchain.com/prices/BCH/">
                <div className="Prices__Header-n3azef-16 bNDbFp">
                 
                  <div className="Prices__Actions-n3azef-19 kTHItA">
                   
                  </div>
                </div>
                <div className="Prices__CoinNameContainer-n3azef-11 jeNYII">
                  <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highligh-sc-1fwf07x-8 Prices__Text-n3azef-3 SzvxD">
                   Addic commerce
                    
                  </p>
                 
                </div>
                <div className="Prices__ChartContainer-n3azef-10 dBOFHT">
                  <div style={{ width: '100%', height: '100%' }} />
                </div>
              </a>
            </div>
          </div>
          {/* <a className="Prices__CustomLink-n3azef-2 cfxqqw" intl="[object Object]" href="https://www.blockchain.com/prices/">
            <span className="Text__Button2-sc-1fwf07x-12 Prices__PricesText-n3azef-15 kYWddG">View More Prices</span><svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a> */}
              
              </div></div>
    </div>
    
      <div >
      
      <section id="mobile-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="walts">
                <div aria-hidden="true" class="FeatureSectionComponents__Icon-sc-1j7c5-5 iexjyW"><svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff"></path><path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#5322e5" fillOpacity=".36"></path><path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" stroke="#7349f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m2.66797 21.3335v-8h26.66663v8c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff" stroke="#7349f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#fff"></path><path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#5322e5" fillOpacity=".36"></path><g stroke="#7349f2" strokeWidth="2"><path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="16.668" cy="19.3335" fill="#fff" r="2"></circle></g></svg><p class="Text__Subtitle1-sc-1fwf07x-5 FeatureSectionComponents__ProductTitle-sc-1j7c5-6 jmLzBp">Cloud</p></div>
                <h2 className="Text__H2-sc-1fwf07x-1 FeatureSectionComponents__SectionTitle-sc-1j7c5-11 ASrJp">Public cloud infrastructure and service
</h2>
              </div>
      <Slider {...settings} ref={sliderRef2}>
              

              {  Data.map((item , index) => {
             return(
              <div className="list-pic" key={index}>
                <div className="HomePageImages__Wrapper-hjwwi0-0 GMKvW feature-image-enter-done" style={{textAlign:'center'}}>
                </div>
                <div
                  onClick={() => setIndex(index)} style={{marginBottom:'1.5rem'}}>
                       <p> {item.title}</p>
                       
                  </div>

              </div>

             )
           })}
          
           
              


  </Slider>
  
  
  <a className="Link__CustomLink-sc-1p80yfz-0 chwvAc Button__ButtonLink-sc-1e82yhp-1 jHkljB FeatureSectionComponents__ProductButton-sc-1j7c5-12 FeatureSectionComponents__WalletButton-sc-1j7c5-13 cpgdIt" id="start" rel="nofollow noopener noreferrer" target="_blank" href="https://login.blockchain.com/#/signup?showWallet?utm_campaign=dcommarketing_createwallet">Get started</a>
  
  </div>
  </div>

        </div>

  
  

      </section>
  </div>

   <div >
      
      <section id="country-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="walts">
                <div aria-hidden="true" class="FeatureSectionComponents__Icon-sc-1j7c5-5 iexjyW"><svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><mask id="a" height="30" maskUnits="userSpaceOnUse" width="30" x="1" y="1"><rect fill="#c4c4c4" height="28" rx="3" stroke="#f5a250" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="28" x="2" y="2"></rect></mask><g mask="url(#a)" stroke="#0c6cf2" strokeWidth="2"><g strokeLinecap="round"><rect fill="#fff" height="28" rx="3" strokeLinejoin="round" width="28" x="2" y="2"></rect><path d="m27 7 3-1v24h-28v-5l3-7 4 1 7-8 7-1z" fill="#0c6cf2" fillOpacity=".36" strokeLinejoin="round"></path><path d="m16 16v14"></path><path d="m9 22v8"></path><path d="m16 2v4"></path><path d="m23 14v16"></path></g><circle cx="16" cy="11" fill="#fff" r="2"></circle></g></svg><p class="Text__Subtitle1-sc-1fwf07x-5 FeatureSectionComponents__ProductTitle-sc-1j7c5-6 jmLzBp">Exchange</p></div>

                <h2 className="Text__H2-sc-1fwf07x-1 FeatureSectionComponents__SectionTitle-sc-1j7c5-11 ASrJp">Lightning-Fast Crypto Trading</h2>
              </div>
      <Slider {...settings} ref={sliderRef}>
              

              {  DataTwo.map((item , index) => {
             return(
              <div className="list-pic" key={index}>
                <div className="HomePageImages__Wrapper-hjwwi0-0 GMKvW feature-image-enter-done" style={{textAlign:'center'}}>
                </div>
                <div
                  onClick={() => setIndex2(index)} style={{marginBottom:'1.5rem'}}>
                       <p> {item.title}</p>
                        
                  </div>

              </div>

             )
           })}
          
           
              


  </Slider>
  
  
  <a className="Link__CustomLink-sc-1p80yfz-0 chwvAc Button__ButtonLink-sc-1e82yhp-1 jHkljB FeatureSectionComponents__ProductButton-sc-1j7c5-12 FeatureSectionComponents__WalletButton-sc-1j7c5-13 cpgdIt" id="start" rel="nofollow noopener noreferrer" target="_blank" href="https://login.blockchain.com/#/signup?showWallet?utm_campaign=dcommarketing_createwallet">Get started</a>
  
  </div>
  </div>

        </div>

  
  

      </section>
  </div>
      

      <div >
      
      

      {/* <div> */}
  
     

      <section id="first">

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="walts">
                <div aria-hidden="true" className="FeatureSectionComponents__Icon-sc-1j7c5-5 iexjyW"><svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff"></path><path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#5322e5" fillOpacity=".36"></path><path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" stroke="#7349f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m2.66797 21.3335v-8h26.66663v8c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff" stroke="#7349f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#fff"></path><path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#5322e5" fillOpacity=".36"></path><g stroke="#7349f2" strokeWidth="2"><path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="16.668" cy="19.3335" fill="#fff" r="2"></circle></g></svg><p className="Text__Subtitle1-sc-1fwf07x-5 FeatureSectionComponents__ProductTitle-sc-1j7c5-6 jmLzBp">
Cloud
</p></div>
                <h2 className="Text__H2-sc-1fwf07x-1 FeatureSectionComponents__SectionTitle-sc-1j7c5-11 ASrJp">Public cloud infrastructure and service
</h2>
              </div>
              <div id="list">
                <ul>
                  { Data.map((item , index)=>{
                    return(
                        <li className={Index === index ? "active" : null } onClick={() => ActiveOne(item)} key={index}>
                       <p>
                       {item.title}
                           </p>
                        
                        </li>
                      
                      
                    )

                  })}
                 
                 
                </ul>
              </div>
              <div className="Hero__Actions-qcrt3z-5 dZfOdn " >
                <a  className="Link__CustomLink-sc-1p80yfz-0 chwvAc Button__ButtonLink-sc-1e82yhp-1 jHkljB Hero__HeroButton-qcrt3z-6 jViBwB" rel="nofollow noopener noreferrer" href="https://login.blockchain.com/#/signup?showWallet?utm_campaign=dcommarketing_getstarted">Get Started</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list-pic">
                <div className="HomePageImages__Wrapper-hjwwi0-0 GMKvW feature-image-enter-done"></div>
              </div>
            </div>
          </div>


        </div>

      </section>
      {/* <div className="labtop" style={{ float: 'right' }}>
        <img alt="Wallet Borrow laptop" src={Object.keys(Filter).length > 0 ? Filter.image : Data[0].image } srcSet="/images/exchange-api@2x.png 2x" style={{ width:Style.width , height: Style.Height} }  class="HomePageImages__FeatureImage-hjwwi0-1 HomePageImages__AlignedLeftImage-hjwwi0-2 ZJjgV" />
      </div> */}

      <section className="section-two">

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="list-pic">
                <div className="HomePageImages__Wrapper-hjwwi0-0 GMKvW feature-image-enter-done"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="walts">
                <div aria-hidden="true" className="FeatureSectionComponents__Icon-sc-1j7c5-5 iexjyW"><svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><mask id="a" height="30" maskUnits="userSpaceOnUse" width="30" x="1" y="1"><rect fill="#c4c4c4" height="28" rx="3" stroke="#f5a250" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="28" x="2" y="2"></rect></mask><g mask="url(#a)" stroke="#0c6cf2" strokeWidth="2"><g strokeLinecap="round"><rect fill="#fff" height="28" rx="3" strokeLinejoin="round" width="28" x="2" y="2"></rect><path d="m27 7 3-1v24h-28v-5l3-7 4 1 7-8 7-1z" fill="#0c6cf2" fillOpacity=".36" strokeLinejoin="round"></path><path d="m16 16v14"></path><path d="m9 22v8"></path><path d="m16 2v4"></path><path d="m23 14v16"></path></g><circle cx="16" cy="11" fill="#fff" r="2"></circle></g></svg><p className="Text__Subtitle1-sc-1fwf07x-5 FeatureSectionComponents__ProductTitle-sc-1j7c5-6 jmLzBp">Cyber defense </p></div>

                <h2 className="Text__H2-sc-1fwf07x-1 FeatureSectionComponents__SectionTitle-sc-1j7c5-11 ASrJp">360 Security and Managed Service –SOC
</h2>
              </div>
              <div id="list">
                <ul>
                { DataTwo.map((item , index)=>{
                    return(
                        <li className={Index2 === index ? "active" : null } onClick={() => ActiveTwo(item)} key={index}>
                       <p> {item.title}</p> 
                        
                        </li>
                      
                      
                    )

                  })}
                </ul>
              </div>
              <div className="Hero__Actions-qcrt3z-5 dZfOdn " >
                <a  className="Link__CustomLink-sc-1p80yfz-0 chwvAc Button__ButtonLink-sc-1e82yhp-1 jHkljB Hero__HeroButton-qcrt3z-6 jViBwB" rel="nofollow noopener noreferrer" href="https://login.blockchain.com/#/signup?showWallet?utm_campaign=dcommarketing_getstarted">Get Started</a>
              </div>
            </div>

          </div>


        </div>

      </section>
      

      <section className="section-three">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="walts">
                <div aria-hidden="true" className="FeatureSectionComponents__Icon-sc-1j7c5-7 iexjyW"><svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g stroke="#677185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99999"><path d="m2.66666 13c-.36818 0-.66666-.2985-.66666-.6667v-2.66663c0-.36819.29848-.66667.66666-.66667h26.66664c.3681 0 .6666.29848.6666.66667v2.66663c0 .3682-.2985.6667-.6666.6667z" fill="#b1b8c7"></path><path d="m27.9999 8.99998c0-3.99999-5.9999-7.99998-11.9999-7.99998-6.00001 0-12 3.99999-12 7.99998"></path><path d="m3 27c-.55228 0-1-.4477-1-1v-2c0-.5523.44772-1 1-1h25.9999c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1z" fill="#b1b8c7"></path><path d="m2 31h27.9999"></path><path d="m4 13v10"></path><path d="m8 13v10"></path><path d="m12 13v10"></path><path d="m20 13v10"></path><path d="m28 13v10"></path><path d="m24 13v10"></path></g></svg><p class="Text__Subtitle1-sc-1fwf07x-5 FeatureSectionComponents__ProductTitle-sc-1j7c5-7 jmLzBp">Data Governance </p></div>
                <h2 className="Text__H2-sc-1fwf07x-1 FeatureSectionComponents__SectionTitle-sc-1j7c5-11 ASrJp">Data protection and governance consulting</h2>
                <p className="Text__Body1-sc-1fwf07x-7 Institutional__SectionContent-efptb1-0 kSltmh">What principles and framework guide your internal data sharing and communication in your organization? We help to implement your data governance strategy policies to share data privately and securely for data ownership and sovereignty.
</p>
              </div>

              <div className="Hero__Actions-qcrt3z-5 dZfOdn " >
                <a  className="Link__CustomLink-sc-1p80yfz-0 chwvAc Button__ButtonLink-sc-1e82yhp-1 jHkljB Hero__HeroButton-qcrt3z-6 jViBwB" rel="nofollow noopener noreferrer" href="https://login.blockchain.com/#/signup?showWallet?utm_campaign=dcommarketing_getstarted">Become a Client</a>
              </div>
            </div>
            
          </div>


        </div>

      </section>

      <section id="explore-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="walts">
                <div aria-hidden="true" className="FeatureSectionComponents__Icon-sc-1j7c5-5 iexjyW"><svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m26.229 6.53163 4.353 12.50847-14.582 2.9599-14.58203-2.9599 4.35297-12.50847c.73586-2.11453 2.72947-3.53163 4.96836-3.53163 2.9054 0 5.2607 2.35526 5.2607 5.26063 0-2.90537 2.3553-5.26063 5.2606-5.26063 2.2389 0 4.2325 1.4171 4.9684 3.53163z" fill="#f5a250" fillOpacity=".36"></path><g stroke="#f5a250" strokeWidth="2"><path d="m16 22v-13.73937m0 13.73937-14.58203-2.9599 4.35297-12.50847c.73586-2.11453 2.72947-3.53163 4.96836-3.53163 2.9054 0 5.2607 2.35526 5.2607 5.26063m0 13.73937 14.582-2.9599-4.353-12.50847c-.7359-2.11453-2.7295-3.53163-4.9684-3.53163-2.9053 0-5.2606 2.35526-5.2606 5.26063" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="8.5" cy="21.5" fill="#fff" r="7.5"></circle><circle cx="23.5" cy="21.5" fill="#fff" r="7.5"></circle></g><path d="m11 21.5c0 .5523.4477 1 1 1s1-.4477 1-1zm-2.5-4.5c-.55228 0-1 .4477-1 1s.44772 1 1 1zm0 2c1.38071 0 2.5 1.1193 2.5 2.5h2c0-2.4853-2.0147-4.5-4.5-4.5z" fill="#f5a250"></path><path d="m26 21.5c0 .5523.4477 1 1 1s1-.4477 1-1zm-2.5-4.5c-.5523 0-1 .4477-1 1s.4477 1 1 1zm0 2c1.3807 0 2.5 1.1193 2.5 2.5h2c0-2.4853-2.0147-4.5-4.5-4.5z" fill="#f5a250"></path></svg><p class="Text__Subtitle1-sc-1fwf07x-5 FeatureSectionComponents__ProductTitle-sc-1j7c5-6 jmLzBp" style={{color: 'rgb(242, 139, 36)'}}>Explore</p></div>
                <h2 className="Text__H2-sc-1fwf07x-1 FeatureSectionComponents__SectionTitle-sc-1j7c5-11 ASrJp">Blockchain Data is in our DNA</h2>
              </div>
      <Slider {...settings} ref={sliderRef3} >
              

              {  DataThree.map((item , index) => {
             return(
              <div className="list-pic" key={index}>
                <div className="HomePageImages__Wrapper-hjwwi0-0 GMKvW feature-image-enter-done" style={{textAlign:'center'}}>
                </div>
                <div
                  onClick={() => setIndex2(index)} style={{marginBottom:'1.5rem'}}>
                       <p> {item.title}</p>
                        
                  </div>

              </div>

             )
           })}
          
           
              


  </Slider>
  
 
  <a className="Link__CustomLink-sc-1p80yfz-0 chwvAc Button__ButtonLink-sc-1e82yhp-1 jHkljB FeatureSectionComponents__ProductButton-sc-1j7c5-12 FeatureSectionComponents__WalletButton-sc-1j7c5-13 cpgdIt" id="start" rel="nofollow noopener noreferrer" target="_blank" href="https://login.blockchain.com/#/signup?showWallet?utm_campaign=dcommarketing_createwallet">Get started</a>
  
  </div>
  </div>

        </div>

  
  

      </section>
  </div>
      



      <section className="section-forth">

        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="walts">
                <div aria-hidden="true" className="FeatureSectionComponents__Icon-sc-1j7c5-5 iexjyW"><svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m26.229 6.53163 4.353 12.50847-14.582 2.9599-14.58203-2.9599 4.35297-12.50847c.73586-2.11453 2.72947-3.53163 4.96836-3.53163 2.9054 0 5.2607 2.35526 5.2607 5.26063 0-2.90537 2.3553-5.26063 5.2606-5.26063 2.2389 0 4.2325 1.4171 4.9684 3.53163z" fill="#f5a250" fillOpacity=".36"></path><g stroke="#f5a250" strokeWidth="2"><path d="m16 22v-13.73937m0 13.73937-14.58203-2.9599 4.35297-12.50847c.73586-2.11453 2.72947-3.53163 4.96836-3.53163 2.9054 0 5.2607 2.35526 5.2607 5.26063m0 13.73937 14.582-2.9599-4.353-12.50847c-.7359-2.11453-2.7295-3.53163-4.9684-3.53163-2.9053 0-5.2606 2.35526-5.2606 5.26063" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="8.5" cy="21.5" fill="#fff" r="7.5"></circle><circle cx="23.5" cy="21.5" fill="#fff" r="7.5"></circle></g><path d="m11 21.5c0 .5523.4477 1 1 1s1-.4477 1-1zm-2.5-4.5c-.55228 0-1 .4477-1 1s.44772 1 1 1zm0 2c1.38071 0 2.5 1.1193 2.5 2.5h2c0-2.4853-2.0147-4.5-4.5-4.5z" fill="#f5a250"></path><path d="m26 21.5c0 .5523.4477 1 1 1s1-.4477 1-1zm-2.5-4.5c-.5523 0-1 .4477-1 1s.4477 1 1 1zm0 2c1.3807 0 2.5 1.1193 2.5 2.5h2c0-2.4853-2.0147-4.5-4.5-4.5z" fill="#f5a250"></path></svg><p class="Text__Subtitle1-sc-1fwf07x-5 FeatureSectionComponents__ProductTitle-sc-1j7c5-6 jmLzBp" style={{color: 'rgb(242, 139, 36)'}}>E-Commerce </p></div>
                <h2 className="Text__H2-sc-1fwf07x-1 FeatureSectionComponents__SectionTitle-sc-1j7c5-11 ASrJp">Headless ecommerce at scale for modern businesses-
</h2>
              </div>
              <div id="list">
                <ul>
                { DataThree.map((item , index)=>{
                    return(
                        <li className={Index3 === index ? "active" : null } onClick={() => ActiveThree(item)} key={index}>
                        <p>{item.title}</p>
                       
                        </li>
                      
                      
                    )

                  })}
                </ul>
              </div>
              <div className="Hero__Actions-qcrt3z-5 dZfOdn " >
                <a  className="Link__CustomLink-sc-1p80yfz-0 chwvAc Button__ButtonLink-sc-1e82yhp-1 jHkljB Hero__HeroButton-qcrt3z-6 jViBwB" rel="nofollow noopener noreferrer" href="https://login.blockchain.com/#/signup?showWallet?utm_campaign=dcommarketing_getstarted">Explore now</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list-pic">
                <div className="HomePageImages__Wrapper-hjwwi0-0 GMKvW feature-image-enter-done"></div>
              </div>
            </div>


          </div>


        </div>

      </section>
      
     



  
    

      <Industry/>



      <div class="logo-list">
      <div class="container">
          <h2>Strategic partners</h2>
          <div class="row">
              <div class="col-lg-3 col-md-4 col-6 first">
                  <a href="#"><img src="/images/part1.png" class="img-fluid" alt="Bluehost logo"/></a>
              </div>
              
              <div class="col-lg-2 col-md-4 col-6 ">
                  <a href="#"><img src="/images/cstack-logo-1000.png" class="img-fluid" alt="Hostgator logo"/></a>
              </div>
              <div class="col-lg-2 col-md-4 col-6 third">
                  <a href="#"><img src="/images/wasabi1.png" class="img-fluid" alt="Green Geeks logo"/></a>
              </div>
              <div class="col-lg-2 col-md-4 col-6">
                  <a href="#"><img src="/images/bunnyshell.png" class="img-fluid" alt="WordPress logo"/></a>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                  <a href="#"><img src="/images/whiteshield_logo2.jpg" class="img-fluid" alt="DreamHost logo"/></a>
              </div>
             
          </div>
      </div>
  </div>

      {/*  Footer  */}

      <footer className="footer" >
  <div className="container">
    <div className="row" >
      <div className="col-lg-3 col-md-3 col-sm-4">
        <div className="footer__about">
          <div className="footer__widget">
            <h6>Product</h6>
            <ul>
            <li><Link to="/">Addic Cloud

</Link></li>
            <li><Link to="/">
Addic Cyber defense 

</Link></li>
            <li><Link to="/">
Addic Data Governance

</Link></li>
            <li><Link to="/">
Addic AI Backup

</Link></li>
            <li><Link to="/">
Addic Commerce.
</Link></li>
          </ul>
          </div>
          {/* <div className="Footer__SocialLinksWrapper-sc-13334au-11 xKZIB">
          <a href="https://twitter.com/blockchain" target="_blank" rel="nofollow noopener noreferrer" className="SocialLinks-sc-1z9brw-0 cwIUpI">
          <img alt="Twitter logo" src="/images/twitter-color.svg" height="24" width="24"/>
          <span>Twitter</span></a><a href="https://www.instagram.com/blockchainofficial/" target="_blank" rel="nofollow noopener noreferrer" className="SocialLinks-sc-1z9brw-0 cwIUpI">
          <img alt="Instagram logo" src="/images/instagram.png" height="24" width="24"/>
          <span>Instagram</span></a><a href="https://medium.com/blockchain/" target="_blank" rel="nofollow noopener noreferrer" className="SocialLinks-sc-1z9brw-0 cwIUpI">
          <img alt="Medium logo" src="/images/medium-plain.svg" height="24" width="24"/>
          <span>Medium</span></a></div> */}
          
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-3">
        <div className="footer__widget">
          <h6>Services</h6>
          <ul>
            <li><Link to="/">Industry 4.0 Security

</Link></li>
            <li><Link to="/">
Risk Advisory

</Link></li>
            <li><Link to="/">
Architecture Review and Assessment

</Link></li>
            <li><Link to="/">
Penetration Testing

</Link></li>
            <li><Link to="/">
Multi-Cloud managed Service

</Link></li>
            <li><Link to="/">
Data protection and Governance

</Link></li>
            <li><Link to="/">
Backup and storage

</Link></li>
            <li><Link to="/">
Encrypted Cloud hosting
</Link></li>
            <li><Link to="/">
Ecommerce managed hosting
</Link></li>
          </ul>

        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-3">
        <div className="footer__widget">
          <h6>Addicnet Group</h6>
          <ul>
            <li><Link to="/">Addicnet Ghana

</Link></li>
            <li><Link to="/">
Addicnet Nigeria

</Link></li>
            <li><Link to="/">
Addicnet Rwanda
</Link></li>
            <li><Link to="/">
Addicnet South Africa
</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-3">
        <div className="footer__widget">
          <h6>About us 
</h6>
          <ul>
            <li><Link to="/">Company

</Link></li>
            <li><Link to="/">
News &Updates

</Link></li>
            <li><Link to="/">
Support Service
</Link></li>
            <li><Link to="/">
Contact
</Link></li>

          </ul>
        
        </div>
      </div>
    </div>
  

  </div>
</footer>

    </div>
  </div>
</div>

</div >



    )
}

export default IndexPage