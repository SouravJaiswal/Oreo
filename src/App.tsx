import React, { useState } from 'react';
import { HeadingJumbo, H1, H2, H3, Paragraph } from './Typography/index';
import { UList, OList, Li } from './List/index';
import { Row, Col } from './Grid';
import './main.scss';
import { Button } from './Button';
import { Modal } from 'Modal';
import { Loading } from 'Loading';
import { Dimmer } from 'Dimmer';

export default () => {
  let [modal, setModal] = useState(false);
  let [emptyModal, setEmptyModal] = useState(false);
  let [smallModal, setSmallModal] = useState(false);

  return (
    <div className="app">
      <div className="app__hero u-margin-bottom-large">
        <HeadingJumbo className="app__jumbo">Oreo</HeadingJumbo>
        <h4>Functional React - SASS components</h4>
      </div>
      <Row className="app__typography u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#1</span> Typography
          </H2>
          <div className="app__demo">
            <H1>This is a heading!</H1>
            <Paragraph className="u-margin-bottom-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              aspernatur nobis nisi voluptas molestias quaerat consectetur
              dignissimos ipsam nostrum quibusdam maxime consequatur amet!
              Libero magni tempore distinctio quaerat magnam molestias!
            </Paragraph>
            <H2>This is a heading!</H2>
            <Paragraph className="u-margin-bottom-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              aspernatur nobis nisi voluptas molestias quaerat consectetur
              dignissimos ipsam nostrum quibusdam maxime consequatur amet!
              Libero magni tempore distinctio quaerat magnam molestias!
            </Paragraph>
            <H3>This is a heading!</H3>
            <Paragraph className="u-margin-bottom-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              aspernatur nobis nisi voluptas molestias quaerat consectetur
              dignissimos ipsam nostrum quibusdam maxime consequatur amet!
              Libero magni tempore distinctio quaerat magnam molestias!
            </Paragraph>
          </div>
        </Col>
      </Row>
      <Row className="app__list u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#2</span> Lists
          </H2>
          <H3 className="u-margin-bottom-nano">
            <span className="app__index">#2.1</span> Unordered list
          </H3>
          <UList className="u-margin-bottom-medium">
            <Li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Li>
            <Li>In commodo metus vel lectus blandit tristique.</Li>
            <Li>
              Nam sit amet nulla aliquet, vestibulum lorem non, pulvinar urna.
            </Li>
            <Li>Etiam quis diam vel metus imperdiet mollis.</Li>
            <Li>
              Maecenas varius eros sed nulla semper, ac convallis odio pharetra.
            </Li>
            <Li>Aliquam eget ex nec tellus commodo consequat.</Li>
            <Li>Donec molestie sapien vel imperdiet dignissim.</Li>
            <Li>Aenean a ligula ut risus pellentesque rutrum.</Li>
          </UList>
          <H3 className="u-margin-bottom-nano">
            <span className="app__index">#2.2</span> Ordered list
          </H3>
          <OList className="u-margin-bottom-nano">
            <Li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Li>
            <Li>In commodo metus vel lectus blandit tristique.</Li>
            <Li>
              Nam sit amet nulla aliquet, vestibulum lorem non, pulvinar urna.
            </Li>
            <Li>Etiam quis diam vel metus imperdiet mollis.</Li>
            <Li>
              Maecenas varius eros sed nulla semper, ac convallis odio pharetra.
            </Li>
            <Li>Aliquam eget ex nec tellus commodo consequat.</Li>
            <Li>Donec molestie sapien vel imperdiet dignissim.</Li>
            <Li>Aenean a ligula ut risus pellentesque rutrum.</Li>
          </OList>
        </Col>
      </Row>
      <Row className="app__grid u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#3</span> Grids
          </H2>
          <Row>
            <Col span={1} total={2}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={2}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={3}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={3}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={3}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={3}>
              <div className="app__box"></div>
            </Col>
            <Col span={2} total={3}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={4}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={4}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={4}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={4}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={4}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={4}>
              <div className="app__box"></div>
            </Col>
            <Col span={2} total={4}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={4}>
              <div className="app__box"></div>
            </Col>
            <Col span={3} total={4}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={2} total={5}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={3} total={5}>
              <div className="app__box"></div>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={5}>
              <div className="app__box"></div>
            </Col>
            <Col span={4} total={5}>
              <div className="app__box"></div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="app__btn u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#4</span> Buttons
          </H2>
          <div className="app__demo app__buttons">
            <Button state="default">Default</Button>
            <Button state="primary">Primary</Button>
            <Button state="danger">Danger</Button>
            <Button state="success">Success</Button>
            <Button state="grey">Grey</Button>
            <Button state="text">Read More</Button>
          </div>
        </Col>
      </Row>
      <Row className="app__modal u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#5</span> Modal
          </H2>
          <div className="app__demo app__modal">
            <Button state="grey" onClick={() => setModal(true)}>
              Open modal
            </Button>
            <Modal
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
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aspernatur nobis nisi voluptas molestias quaerat consectetur
                dignissimos ipsam nostrum quibusdam maxime consequatur amet!
                Libero magni tempore distinctio quaerat magnam molestias!
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aspernatur nobis nisi voluptas molestias quaerat consectetur
                dignissimos ipsam nostrum quibusdam maxime consequatur amet!
                Libero magni tempore distinctio quaerat magnam molestias!
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aspernatur nobis nisi voluptas molestias quaerat consectetur
                dignissimos ipsam nostrum quibusdam maxime consequatur amet!
                Libero magni tempore distinctio quaerat magnam molestias!
              </Paragraph>
            </Modal>
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
                dignissimos ipsam nostrum quibusdam maxime consequatur amet!
                Libero magni tempore distinctio quaerat magnam molestias!
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aspernatur nobis nisi voluptas molestias quaerat consectetur
                dignissimos ipsam nostrum quibusdam maxime consequatur amet!
                Libero magni tempore distinctio quaerat magnam molestias!
              </Paragraph>
            </Modal>
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
          </div>
        </Col>
      </Row>
      <Row className="app__loading u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#6</span> Loading
          </H2>
          <div className="app__demo app__loading">
            <Loading />
            <Loading shade="light" />
            <Loading type="modern" />
            <Loading type="line" />
          </div>
        </Col>
      </Row>
      <Row className="app__dimmer u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#7</span> Dimmer
          </H2>
          <div className="app__demo app__dimmer-demo">
            <Dimmer loading={<Loading type="modern" shade="light" />}>
              <H1>This is a heading!</H1>
              <Paragraph className="u-margin-bottom-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aspernatur nobis nisi voluptas molestias quaerat consectetur
                dignissimos ipsam nostrum quibusdam maxime consequatur amet!
                Libero magni tempore distinctio quaerat magnam molestias!
              </Paragraph>
              <H2>This is a heading!</H2>
              <Paragraph className="u-margin-bottom-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aspernatur nobis nisi voluptas molestias quaerat consectetur
                dignissimos ipsam nostrum quibusdam maxime consequatur amet!
                Libero magni tempore distinctio quaerat magnam molestias!
              </Paragraph>
            </Dimmer>
            <Dimmer loading={<Loading />}>
              <H1>This is a heading!</H1>
              <Paragraph className="u-margin-bottom-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aspernatur nobis nisi voluptas molestias quaerat consectetur
                dignissimos ipsam nostrum quibusdam maxime consequatur amet!
                Libero magni tempore distinctio quaerat magnam molestias!
              </Paragraph>
            </Dimmer>
          </div>
        </Col>
      </Row>
      <div className="app__form u-margin-bottom-large"></div>
      <div className="app__nav u-margin-bottom-large"></div>
      <div className="app__card u-margin-bottom-large"></div>
      <div className="app__chart u-margin-bottom-large"></div>
      <div className="app__img u-margin-bottom-large"></div>
      <div className="app__msg u-margin-bottom-large"></div>
    </div>
  );
};
