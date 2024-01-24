// 도봉이 옮겨 놓기
// 오늘은 Header만 !


function Gallery() {
    const images = Array.from({length: 14}, (_, i) => `https://picsum.photos/200?random=${i + 1}`);
  
    return (
      <div>
        <h1>도봉이의 갤러리</h1>
        <div id="gallery">
          {images.map((src, index) => <img key={index} src={src} alt={`도봉이 갤러리 ${index + 1}`} />)}
        </div>
      </div>
    );
  }
  export default Gallery;