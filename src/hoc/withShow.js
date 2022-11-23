import { useCallback, useState } from "react"


const withShow = (Component) => {
    return (props) => {
        const [show, setShow] = useState(false)

        const handlerShow = useCallback(() => {
            setShow(prev => !prev)
        }, [])
        return <Component {...{show, handlerShow}} {...props} />
    }

}

export default withShow