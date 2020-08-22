import React, { useState } from 'react';
import { Nav, NavActions, NavMenu } from './index';
import { Button } from '../Button';

export default {
  title: 'Nav',
};

export const Center = () => {
  let [modal, setModal] = useState(false);

  return (
    <>
      <Nav type={'center'} logo={<div className="main__logo">Exam lounge</div>}>
        <NavMenu>
          <Button type="text">Home</Button>
          <Button type="text">Blogs</Button>
          <Button type="text">Tests</Button>
          <Button type="text">Exams</Button>
        </NavMenu>
        <NavActions>
          <Button type="text">Sign in</Button>
          <Button type="primary">Sign up</Button>
        </NavActions>
      </Nav>
    </>
  );
};
