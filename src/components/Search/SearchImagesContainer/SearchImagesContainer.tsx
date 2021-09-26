import './SearchImagesContainer.css'

interface SearchLocationImages{
    title: string
    class: string
    notLeft: boolean
}
const SearchLocationImages: React.FC<SearchLocationImages> = (props) => {
    function checkNotLeft(){
        if(props.notLeft){
            return('search-location-images-not-left')
        }
        else{
            return('')
        }
    }
    return (
        <div className={`search-location-images ${checkNotLeft()} search-location-images-${props.class}`}>
            <div className="search-location-images-title">
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}

interface SearchImagesContainer{
    imagesTop: Array<Images>
    imagesBottom: Array<Images>
}
interface Images{
    title: string
    class: string
}
const SearchImagesContainer: React.FC<SearchImagesContainer> = (props) => {
    function iterateTitles(images: Array<Images>) {
        let locationImages = [];
        for (let i = 0; i < images.length; i++) {
            let notLeft = i % 2 != 0
            locationImages.push(<SearchLocationImages key={images[i].title} title={images[i].title} class={images[i].class} notLeft={notLeft}/>);
        }
        return locationImages;
    }
    return (
        <div className='search-content-images-container'>
            <div className="search-location-images-top">
                {iterateTitles(props.imagesTop)}
            </div>
            <div className="search-location-images-bottom">
                {iterateTitles(props.imagesBottom)}
            </div>
        </div>
    );
};

export default SearchImagesContainer;