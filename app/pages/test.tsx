import React from "react";
import { Baskervville } from "next/font/google";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";

export default function test () {
    return (
        <div>
            <AppHeader logo='https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=docs_app_building-your-application_optimizing' pathToProfilePicture="/public/next.svg"/>
            <Sidebar logo='https://google.com'/>
        </div>
    )
}