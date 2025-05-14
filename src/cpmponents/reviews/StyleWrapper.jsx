// StyledWrapper.js
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    width: 900px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 14px;
  }
  .content::before {
    content: "";
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    width: 40px;
    height: 96px;
    background-image: linear-gradient(90deg, #0000001c, transparent);
    z-index: 2;
    border-radius: 10px 0 0 10px;
  }
  .content::after {
    content: "";
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    width: 40px;
    height: 96px;
    background-image: linear-gradient(-90deg, #0000001c, transparent);
    z-index: 9;
    border-radius: 0 10px 10px 0;
  }
  .basic-marquee {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 500%;
  }
  .basic-marquee .button {
    transition: all 0.3s ease;
  }
  .basic-marquee .button:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  .basic-marquee-1 {
    animation: marquee 40s linear infinite;
  }
  .basic-marquee-2 {
    animation: marquee 40s linear infinite;
  }
  .benefits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    min-width: 900px;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    inset: 0;
  }
@keyframes marquee {
  0% {
    transform: translateX(0%);  /* Start off-screen to the right */
  }
  100% {
    transform: translateX(-100%);  /* End off-screen to the left */
  }
}

  .basic-marquee svg {
    width: 40px;
  }
  .basic-marquee button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cls-1 {
    fill: #1ab7ea;
  }

  .cls-1,
  .cls-2 {
    fill-rule: evenodd;
  }

  .cls-2 {
    fill: #fff;
  }

  .cls-3 {
    fill: #ee8208;
    fill-rule: evenodd;
  }

  .cls-4 {
    fill: #fff;
  }

  .cls-5,
  .cls-6 {
    fill-rule: evenodd;
  }

  .cls-5 {
    fill: #48dd55;
  }

  .cls-6 {
    fill: #fff;
  }

  .cls-7 {
    fill: #0a66c2;
  }

  .cls-7,
  .cls-8 {
    fill-rule: evenodd;
  }

  .cls-8 {
    fill: #fff;
  }

  .cls-9 {
    fill: #10b7f4;
  }

  .cls-9,
  .cls-10 {
    fill-rule: evenodd;
  }

  .cls-10 {
    fill: #fff;
  }

  .cls-11 {
    fill: #1da1f2;
  }

  .cls-11,
  .cls-12 {
    fill-rule: evenodd;
  }

  .cls-12 {
    fill: #fff;
  }

  .cls-13 {
    fill: #ea4c89;
  }

  .cls-13,
  .cls-14 {
    fill-rule: evenodd;
  }

  .cls-14 {
    fill: #fff;
  }

  .cls-15 {
    fill: #1769ff;
  }

  .cls-15,
  .cls-16 {
    fill-rule: evenodd;
  }

  .cls-16 {
    fill: #fff;
  }

  .cls-17 {
    fill: #f26522;
  }

  .cls-17,
  .cls-18 {
    fill-rule: evenodd;
  }

  .cls-18 {
    fill: #fff;
  }`;


export default StyledWrapper;
