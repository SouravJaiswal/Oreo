import React, { useState } from 'react';
import { Modal } from './index';
import { Button } from '../Button';
import { Input } from '../Input';
import { Paragraph } from '../Typography';

export default {
  title: 'Modal',
};

export const Default = () => {
  let [modal, setModal] = useState(false);

  return (
    <>
      <Button state="grey" onClick={() => setModal(true)}>
        Open modal
      </Button>
      <Modal
        type={'default'}
        collapsed={modal}
        onClose={() => setModal(false)}
        heading="This is a popup!"
        action={
          <>
            <Button state="success" onClick={() => setModal(false)}>
              Ok
            </Button>
          </>
        }>
        {' '}
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aspernatur nobis nisi voluptas molestias quaerat consectetur
          dignissimos ipsam nostrum quibusdam maxime consequatur amet! Libero
          magni tempore distinctio quaerat magnam molestias!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aspernatur nobis nisi voluptas molestias quaerat consectetur
          dignissimos ipsam nostrum quibusdam maxime consequatur amet! Libero
          magni tempore distinctio quaerat magnam molestias!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aspernatur nobis nisi voluptas molestias quaerat consectetur
          dignissimos ipsam nostrum quibusdam maxime consequatur amet! Libero
          magni tempore distinctio quaerat magnam molestias!
        </Paragraph>
      </Modal>
    </>
  );
};

export const Empty = () => {
  let [emptyModal, setEmptyModal] = useState(false);

  return (
    <>
      <Button state="grey" onClick={() => setEmptyModal(true)}>
        Empty Modal
      </Button>
      <Modal
        collapsed={emptyModal}
        className="sign-up"
        onClose={() => setEmptyModal(false)}
        type="empty">
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aspernatur nobis nisi voluptas molestias quaerat consectetur
          dignissimos ipsam nostrum quibusdam maxime consequatur amet! Libero
          magni tempore distinctio quaerat magnam molestias!
        </Paragraph>
      </Modal>
    </>
  );
};

export const Small = () => {
  let [smallModal, setSmallModal] = useState(false);

  return (
    <>
      <Button state="grey" onClick={() => setSmallModal(true)}>
        Small Modal
      </Button>
      <Modal
        collapsed={smallModal}
        heading="Delete you account?"
        action={
          <>
            <Button state="grey" onClick={() => setSmallModal(false)}>
              No
            </Button>
            <Button state="danger" onClick={() => setSmallModal(false)}>
              Yes
            </Button>
          </>
        }
        onClose={() => setSmallModal(false)}
        type="small">
        <Paragraph>Are you sure?</Paragraph>
      </Modal>
    </>
  );
};
