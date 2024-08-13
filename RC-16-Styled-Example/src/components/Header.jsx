import React from "react";
import DisplaySSS from "./styles/DisplaySSS";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";
import ButonSSS, { DetayButton } from "./styles/ButonSSS";

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <LogoSSS src="./images/logo.png" alt=""/>
        <div>
          <ButonSSS rengin="red">Apply Courses</ButonSSS>
          <ButonSSS fatih>Talk to Adviser</ButonSSS>
        </div>
      </DisplaySSS>

      <DisplaySSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <ButonSSS fatih>New Career</ButonSSS>
          <DetayButton>Details</DetayButton>
        </div>

        <ImageSSS src="./images/hero.jpg" alt=""/>
      </DisplaySSS>
    </div>
  );
};

export default Header;
