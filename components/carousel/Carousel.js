import React, {useState, useEffect} from 'react'
import style from './Carousel.module.scss'

function Carousel({ children }) {
    const [active, setActive] = React.useState(0)

    const updateActive = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActive(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateActive(active + 1);
        }, 1000)
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
      <div className={style.carousel}>
        <div className={style.inner} style={{transform: `translateX(-${active * 100}%)`}}>
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    );
}

export default Carousel
