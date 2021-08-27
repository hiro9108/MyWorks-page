import React, { useState } from "react";
import Image from "next/image";
import { css, SerializedStyles } from "@emotion/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rootStyle: SerializedStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #00000025;
`;

// const image01Style: SerializedStyles = css`
//   transform-style: preserve-3d;
//   backface-visibility: hidden;
// `;

// const image02Style: SerializedStyles = css`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   transform-style: preserve-3d;
//   backface-visibility: hidden;
//   transform: rotateY(180deg);
// `;

const imageBoxStyle: SerializedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: left;
  transform-style: preserve-3d;
  background: #000;
  transition: 1s;
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
`;

const foldableCardStyle: SerializedStyles = css`
  position: relative;
  width: 300px;
  height: 400px;
  background: #fff;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
  transition: 1s;

  &:hover {
    transform: translateX(50%);
  }

  &:hover .css-${imageBoxStyle.name} {
    transform: rotateY(-180deg);
  }
`;

const detailsStyle: SerializedStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const contentStyle: SerializedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    text-align: center;
    font-weight: 700;
    line-height: 1em;
    font-size: 1.6rem;

    span {
      color: #e21212;
      font-size: 1.1rem;
    }
  }
`;

const socialIconsStyle: SerializedStyles = css`
  position: relative;
  display: flex;
  margin-top: 10px;

  a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 0.5rem;
    font-size: 18px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background: #e21212;
    }
  }
`;

const titleStyle: SerializedStyles = css`
  color: #ffffffdd;
  font-size: 10rem;
  font-family: "Nanum Pen Script", cursive;
  white-space: nowrap;
`;

const FoldableCard: React.FC<any> = ({
  sectionTitle,
  title,
  text,
  mainSrc,
  subSrc,
  githubUrl,
  webUrl,
  backgroudStyle,
}) => {
  return (
    <>
      <div css={[rootStyle, backgroudStyle]}>
        <div
          css={titleStyle}
          className="absolute top-16 left-1/2 transform -translate-x-2/4"
        >
          <h2>{sectionTitle}</h2>
        </div>
        <div css={foldableCardStyle}>
          <div css={imageBoxStyle}>
            <Image
              className={""}
              src={mainSrc}
              alt="picture of profile01"
              layout="fill"
              objectFit="cover"
            />
            {/* <Image
              css={image02Style}
              src={subSrc}
              alt="picture of profile02"
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
          <div css={detailsStyle}>
            <div css={contentStyle}>
              <h2>
                {title}
                <br />
                <span className="my-2 inline-block">{text}</span>
              </h2>
              <div css={socialIconsStyle}>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href={webUrl} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faCloudUploadAlt} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoldableCard;
