type UiImageProps = {
   url: string
   width?: string
   height?: string
   className?: string
}

const UiImage: React.FC<UiImageProps> = ({ url, width, height, className }) => {
   return(
      <img 
         src={url} alt="" 
         className={className}
         style={ width || height ? width ? {width: width} : {height: height} : {}}
      />
   )
}

export default UiImage