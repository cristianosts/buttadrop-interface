'use client'

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function AOSInit() {
    
    useEffect(() => {
        
            AOS.init({
                duration: 900,
                easing: "ease-in-out",
                once: true,
            })

    }, [])
    
    return null
}