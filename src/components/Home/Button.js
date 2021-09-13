import React from 'react'

export default function Button(props) {
    return (
        <div className="adj-btn my-8 mx-5">
            <button type="button" className="w-full h-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-eliiot-b1 hover:bg-eliiot-b4" onClick={() => props.getInfo(props.url)}>
                Actualizar
            </button>
        </div>
    )
}