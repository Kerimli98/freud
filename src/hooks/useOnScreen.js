import {useState, useEffect} from "react";

function UseOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                setIntersecting(entry?.isIntersecting ?? false);
            },
            {
                rootMargin,
                threshold: 0.5
            }
        );
        const currentRef = ref.current;
        if(currentRef){
            observer.observe(currentRef);
        }
        return ()=>{
            if(currentRef){
                observer.unobserve(currentRef);
            }
        };
    }, [ref, rootMargin]);

    return isIntersecting;
}

export default UseOnScreen;