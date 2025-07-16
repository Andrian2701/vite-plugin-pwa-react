import { useState } from "react"
import { registerSW } from "virtual:pwa-register"

export const UpdateAppDialog = () => {
    const [isOpen, setIsOpen] = useState(false)

    const updateServiceWorker = registerSW({
        immediate: true,
        onNeedRefresh() {
            setIsOpen(true)
        },
        onOfflineReady() {
            console.log('App is ready to work offline')
        }
    })

    if (!isOpen) return null;

    return (
        <div className="dialog">
            <p className="dialog__title">New version is available</p>
            <div className="dialog__controls">
                <button onClick={() => updateServiceWorker(false)}>Cancel</button>
                <button onClick={() => updateServiceWorker(true)}>Update</button>
            </div>
        </div>
    )
}
