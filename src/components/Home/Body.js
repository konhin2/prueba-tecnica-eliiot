import React, { useContext } from 'react'
import CurrencyContext from './../../context/CurrencyContext'


export default function Body() {
    const context = useContext(CurrencyContext)
    const {
        currency,
    } = context
    return (
        <div className="my-8 mx-5">
            <div className="text-center text-xl text-eliiot-g2 font-bold">
                <h1>Valor Bitcoin actual</h1>
            </div>
            <div className="shadow-sm mt-4 h-36 w-full text-eliiot-g2 bg-white rounded-2xl text-center">
                <div className="pt-7 text-lg font-normal">
                    <h2>Moneda</h2>
                </div>
                <div className="flex justify-around w-auto bg-eliiot-bg rounded-3xl mx-5 my-3 font-medium text-eliiot-b2">
                    <div className="bg-white w-16 rounded-3xl p-3 mt-1.5 mb-1.5">USD</div>
                    <div className="text-eliiot-c w-16 rounded-3xl p-3 mt-1.5 mb-1.5">GBP</div>
                    <div className="text-eliiot-c w-16 rounded-3xl p-3 mt-1.5 mb-1.5">EUR</div>
                </div>
            </div>
            <div className="details mt-8 w-full">
                <div className="pt-3 pl-4 text-base font-normal font-semibold text-eliiot-b1">
                    <h2>Detalle</h2>
                </div>
                <div className="pt-3 pl-4 text-base font-normal font-base text-eliiot-c">
                    <h2>United States Dollar</h2>
                </div>
                <div className="pt-4 px-4 pb-4">
                    <input className="p-4 w-full h-12 rounded-3xl font-normal text-eliiot-b3" value={'$ ' + currency} readOnly/>
                </div>
            </div>
        </div>
    )
}
