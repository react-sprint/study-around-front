import React, { Fragment } from 'react';
import styled from 'styled-components';

function ImageSeletor() {
  function setThumbnail(e) {
    const item = document.querySelector('.Thumbnail_Image')!;
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
    // 기존에 Thumbnail_Image에 Child가 있을경우 전부 삭제합니다.
    // => 기존 썸네일 교체
    const reader = new FileReader();
    reader.onload = function (e: any) {
      const img: any = document.createElement('img');
      img.setAttribute('src', e.target.result);
      document.querySelector('.Thumbnail_Image')!.appendChild(img);
      img.style.width = '100%';
      img.style.marginTop = '20px';
      img.style.height = '300px';
      //onload 될 시 엘레멘트 생성후 어트리뷰트 설정하고 해당 스타일 부여해서 썸네일을 표시합니다.
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  return (
    <Fragment>
      <ThumbnailImage className="Thumbnail_Image"></ThumbnailImage>
      <ImageUploadButtonWrapper>
        파일 업로드
        <ImageUploadButton
          type="file"
          id="file"
          onChange={(e) => setThumbnail(e)}
          style={{ opacity: 0 }}
        />
      </ImageUploadButtonWrapper>
    </Fragment>
  );
}

export default ImageSeletor;
const ImageUploadButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  background-color: #d3d3d3;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  border-radius: 5px;
`;
const ImageUploadButton = styled.input`
  cursor: pointer;
  position: absolute;
  width: 100px;
  height: 40px;
  background-color: #fff;
`;
const ThumbnailImage = styled.div`
  .Thumbnail_Image {
    margin-bottom: 10px;
    width: 100%;
    height: 200px;
    border: 1px solid red;
    background-size: 100% auto;
  }
`;
