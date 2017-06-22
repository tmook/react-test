import React from 'react';
import CommentBox from './firstComponent.jsx';
import Welcome from './welcome.jsx';
import StaticClock from './staticClock.jsx';
import Clock from './Clock.jsx';
import ToggleButton from './ToggleButton.jsx';
import ActionLink from './actionLink.jsx';
import NumberList from './numberList.jsx';
import AlphaList from './alphaList.jsx';
//import TestPromise from './testPromise.jsx';
import NameForm from './NameForm.jsx';
import TextAreaForm from './TextAreaForm.jsx';
import Select from './Select.jsx';
import Reservation from './Reservation.jsx';
import UncontrolledNameForm from './UncontrolledNameForm.jsx';


export default function AppTest(){
  return (
    <div>
      <CommentBox />
      <Welcome name="LAVA" />
      <StaticClock msg="static clock:" />
      <Clock msg="current time:"/>
      <ToggleButton />
      <ActionLink name="action link"/>
      <NumberList numbers={[1,2,3,4]} multiplier={2} />
      <AlphaList alphas={["a","b","c","d"]} />
      {/*<TestPromise />*/}
      <NameForm ph="enter your name" />
      <TextAreaForm ph="Write and essay" />
      <Select options={["grapefruit","lime","coconut","mango"]}/>
      <Reservation />
      <UncontrolledNameForm ph="uncontrolled: entert your name" />
    </div>
  );
}
//export default AppTest;







