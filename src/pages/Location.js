import React, {useRef, useEffect} from 'react'
import naverMapIcon from '../images/naver.webp';
import kakaoMapIcon from '../images/kakao.png';

function Location() {
  const mapRef = useRef(null);
  const lat = 36.0173995; // 위도
  const lng = 129.3436585; // 경도

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  const gotoNavermap = () => {
    window.open('https://naver.me/5xjpTXe1', '_blank');
  }

  const gotoKakaomap = () => {
    window.open('https://place.map.kakao.com/246592883', '_blank');
  }
  

  return (
    <div className='container'>
    <div className='title'>오시는 길</div>
    <div className='location__details'>
      <div>포항 더퀸 5층 크라운홀</div>
      <div>경북 포항시 남구 대이로 18 5층</div>
    </div>
    <div ref={mapRef} className='location__map'></div>
    <div className='location__map-icon-box'>
        <div className='location__map-item' onClick={gotoNavermap}>
          <img src={naverMapIcon} className='location__map-icon' alt="naverMap"/>
          <span>네이버지도</span>
        </div>
        <div className='location__map-item' onClick={gotoKakaomap}>
          <img src={kakaoMapIcon} className='location__map-icon' alt='kakaoMap'/>
          <span>카카오지도</span>
        </div>
    </div>
</div>
  )
}


export default Location
