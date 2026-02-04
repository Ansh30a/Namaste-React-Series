import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

/*
const resList = [
    {
        info: {
            id: "188433",
            name: "KFC",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/e107a223-9f0c-40d4-ade6-4a2e373d756f_188433.JPG",
            locality: "Old Som Bazar Rd",
            areaName: "Palam",
            costForTwo: "₹400 for two",
            cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
            avgRating: 4.3,
            parentId: "547",
            avgRatingString: "4.3",
            totalRatingsString: "9.7K+",
            sla: {
                deliveryTime: 16,
                lastMileTravel: 0.1,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "0.1 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2026-01-31 03:00:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!",
                    },
                    {
                        imageId: "Rxawards/_CATEGORY-Burger.png",
                        description: "Delivery!",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId:
                                        "android/static-assets/icons/big_rx.png",
                                },
                            },
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Burger.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                discountTag: "FLAT DEAL",
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "FREE DELIVERY",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-298d4ebd-13d8-4e84-8111-790b5291ec3c",
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/kfc-old-som-bazar-rd-palam-rest188433",
            type: "WEBLINK",
        },
    },

    {
        info: {
            id: "221216",
            name: "The Good Bowl",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/845f60c9-925f-4098-a1b5-0b21a397b340_221216.jpg",
            locality: "Sector 8",
            areaName: "Dwarka",
            costForTwo: "₹400 for two",
            cuisines: [
                "Biryani",
                "North Indian",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages",
            ],
            avgRating: 4.4,
            parentId: "7918",
            avgRatingString: "4.4",
            totalRatingsString: "1.0K+",
            sla: {
                deliveryTime: 22,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2026-01-31 03:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹139",
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "FREE DELIVERY",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-298d4ebd-13d8-4e84-8111-790b5291ec3c",
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/the-good-bowl-sector-8-dwarka-rest221216",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "43908",
            name: "Burger King",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8a4eb497-8d4b-464e-b635-1e1ccc30e423_43908.jpg",
            locality: "Janakpuri",
            areaName: "Janakpuri",
            costForTwo: "₹350 for two",
            cuisines: ["Burgers", "American"],
            avgRating: 4.4,
            favourite: true,
            parentId: "166",
            avgRatingString: "4.4",
            totalRatingsString: "40K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 3.7,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "3.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2026-01-31 06:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹59",
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "FREE DELIVERY",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.6",
                    ratingCount: "1.6K+",
                },
                source: "GOOGLE",
                sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-298d4ebd-13d8-4e84-8111-790b5291ec3c",
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/burger-king-janakpuri-rest43908",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
    },

    {
        info: {
            id: "370680",
            name: "The Belgian Waffle Co.",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/e4c1586d-1c7e-449a-88fa-50fb3bf17f72_370680.jpg",
            locality: "Sector 4",
            areaName: "Dwarka",
            costForTwo: "₹200 for two",
            cuisines: ["Waffle", "Desserts", "Ice Cream"],
            avgRating: 4.6,
            veg: true,
            parentId: "2233",
            avgRatingString: "4.6",
            totalRatingsString: "4.8K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 4.6,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "4.6 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2026-01-31 05:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "FREE DELIVERY",
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-298d4ebd-13d8-4e84-8111-790b5291ec3c",
        },
        cta: {
            link: "https://www.swiggy.com/city/delhi/the-belgian-waffle-co-sector-4-dwarka-rest370680",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
]; 
*/

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
        {
        path: '/',
        element: <Body />
        },
        {
        path: '/about',
        element: <About />
        },
        {
        path: '/contactUs',
        element: <ContactUs />
        },
        ],
        errorElement: <Error />
    },
    
]);


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={appRouter} />);
