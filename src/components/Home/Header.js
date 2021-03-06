import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className="lg:static lg:overflow-y-visible">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="relative flex justify-between xl:grid xl:grid-cols-12">
                    <div className="flex text-eliiot-b2 md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                        <Link to="#" className="flex-shrink-0 flex items-center">
                            <svg className="block h-6 w-6 w-auto fill-current" enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m54 30h-39.892l15.272-14.552c.799-.762.83-2.028.068-2.828-.762-.798-2.027-.831-2.828-.068l-17.445 16.625c-.758.758-1.175 1.761-1.175 2.823s.417 2.063 1.21 2.858l17.41 16.59c.387.369.884.552 1.38.552.528 0 1.055-.208 1.448-.62.762-.8.731-2.065-.068-2.828l-15.341-14.552h39.961c1.104 0 2-.896 2-2s-.896-2-2-2z" /></svg>
                        </Link>
                    </div>
                    <div className="min-w-0 flex-1 xl:col-span-8 relative -left-2 md:-left-0">
                        <div className="flex items-center px-6 py-4">
                            <div className="w-full">
                                <div className="relative">
                                    <span className="block text-center text-eliiot-b3 font-medium text-base">Resumen Bitcoin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
