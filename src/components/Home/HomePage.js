import { useEffect, useRef } from "react";
import Hls from "hls.js";
import homepageBackgroundVideo from "../../assets/homepage_background_video.m3u8";
import './HomePage.scss';

const HomePage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = homepageBackgroundVideo;
            } else if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(homepageBackgroundVideo);
                hls.attachMedia(video);
            } else {
                console.error("HLS not supported");
            }
        }
    }, []);

    return (
        <div className="homepage-container">
            <div className="background-banner">
                <div className="left-half">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="background-video"
                    />
                </div>
                <div className="right-half">
                    <div className="product-description">
                        <div className="intro-title">Get to know your customers with forms worth filling out</div>
                        <p>Collect all the data you need to understand customers with forms designed to be refreshingly different.</p>
                    </div>
                    <button className="homepage-banner-button">Get started-it's free</button>
                </div>
            </div>
            <div className="container">
                <div className="customers_component">
                    <div className="w-dyn-list">
                        <div role="list" className="customers_row upper w-dyn-items">
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/6728923eb22e7ee7c15e8396_calendly.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/6728910a1c16455593c27afa_citizen_m%201.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/672890fcdec577bb01f7b5f8_loccitane.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/672890ec4a4f53e7ce97a439_wetransfer.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/672890d44ff06c03b9169b96_slack.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-dyn-list">
                        <div role="list" className="customers_row lower w-dyn-items">
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/672890ca58ffc8edfb664691_webflow.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/672890be48319096ffeb6bfe_zapier.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/672890b1d5a69d1620412cf7_barrys.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/672890a3d27752eaed89aa47_hubspot.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                            <div role="listitem" className="customers_logo-container w-dyn-item">
                                <img
                                    src="https://cdn.prod.website-files.com/6718da5ecf694c9af0e8d5d7/67289096a54485774b102f83_hermes.svg"
                                    loading="lazy"
                                    alt=""
                                    className="integrations_carousel-item-logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
