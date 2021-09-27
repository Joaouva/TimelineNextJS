
import style from './CarouselItem.module.scss'

function CarouselItem( {children, width}) {
    return (
    
      <div className={style.carousel_item} style={{ width: width }}>
        {children}
      </div>
      
    );
}

export default CarouselItem
