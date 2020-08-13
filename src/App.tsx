import React, { useState } from 'react';
import { HeadingJumbo, H1, H2, H3, Paragraph } from './Typography/index';
import { UList, OList, Li } from './List/index';
import { Row, Col } from './Grid';
import './main.scss';
import { Button } from './Button';
import { Modal } from 'Modal';
import { Loading } from 'Loading';
import { Dimmer } from 'Dimmer';
import { Input } from 'Input';
import { Card } from 'Card';
import { Nav, NavMenu, NavActions, NavSideBar } from 'Nav';

export default () => {
  let [modal, setModal] = useState(false);
  let [emptyModal, setEmptyModal] = useState(false);
  let [smallModal, setSmallModal] = useState(false);
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [number, setNumber] = useState(0);
  let [radio, setRadio] = useState('male');
  let [city, setCity] = useState(['chennai']);
  let [image, setImage] = useState('');
  let [answer, setAnswer] = useState(['chennai']);
  let [collapsed, setCollapsed] = useState(false);

  let menu = [
    <>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
        </svg>
      </span>{' '}
      <span>Home</span>
    </>,
    <>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M1.004 5.998l10.996-5.998 10.99 6.06-10.985 5.86-11.001-5.922zm11.996 7.675v10.327l10-5.362v-10.326l-10 5.361zm-2 0l-10-5.411v10.376l10 5.362v-10.327z" />
        </svg>
      </span>
      <span>Products</span>
    </>,
    <>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
        </svg>
      </span>
      <span>About</span>
    </>,
    <>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
        </svg>
      </span>
      <span>Contact</span>
    </>,
  ];

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
      <Row className="app__input u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#8</span> Input
          </H2>
          <div className="app__demo">
            <Row>
              <Col span={1} total={3}>
                <Input
                  autoFocus={true}
                  type="text"
                  value={username}
                  onChange={setUsername}
                  name="username"
                  label="username"
                  placeholder="Username"
                  rules={[
                    { type: 'required', errMsg: 'Username is required' },
                    {
                      type: 'regex',
                      errMsg: 'Username does not match the required items',
                      limiter:
                        '/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/',
                    },
                  ]}
                  icon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.4141 11.9312C13.1194 11.2331 12.6916 10.5989 12.1547 10.0641C11.6195 9.52767 10.9854 9.10001 10.2875 8.80469C10.2813 8.80156 10.275 8.8 10.2688 8.79688C11.2422 8.09375 11.875 6.94844 11.875 5.65625C11.875 3.51562 10.1407 1.78125 8.00004 1.78125C5.85941 1.78125 4.12504 3.51562 4.12504 5.65625C4.12504 6.94844 4.75785 8.09375 5.73129 8.79844C5.72504 8.80156 5.71879 8.80312 5.71254 8.80625C5.01254 9.10156 4.38441 9.525 3.84535 10.0656C3.30896 10.6009 2.8813 11.235 2.58598 11.9328C2.29585 12.616 2.13939 13.3485 2.12504 14.0906C2.12462 14.1073 2.12755 14.1239 2.13364 14.1394C2.13974 14.1549 2.14888 14.1691 2.16053 14.181C2.17218 14.193 2.1861 14.2025 2.20147 14.2089C2.21684 14.2154 2.23336 14.2188 2.25004 14.2188H3.18754C3.25629 14.2188 3.31098 14.1641 3.31254 14.0969C3.34379 12.8906 3.82816 11.7609 4.68441 10.9047C5.57035 10.0188 6.74691 9.53125 8.00004 9.53125C9.25316 9.53125 10.4297 10.0188 11.3157 10.9047C12.1719 11.7609 12.6563 12.8906 12.6875 14.0969C12.6891 14.1656 12.7438 14.2188 12.8125 14.2188H13.75C13.7667 14.2188 13.7832 14.2154 13.7986 14.2089C13.814 14.2025 13.8279 14.193 13.8396 14.181C13.8512 14.1691 13.8603 14.1549 13.8664 14.1394C13.8725 14.1239 13.8755 14.1073 13.875 14.0906C13.8594 13.3438 13.7047 12.6172 13.4141 11.9312ZM8.00004 8.34375C7.28285 8.34375 6.60785 8.06406 6.10004 7.55625C5.59223 7.04844 5.31254 6.37344 5.31254 5.65625C5.31254 4.93906 5.59223 4.26406 6.10004 3.75625C6.60785 3.24844 7.28285 2.96875 8.00004 2.96875C8.71723 2.96875 9.39223 3.24844 9.90004 3.75625C10.4079 4.26406 10.6875 4.93906 10.6875 5.65625C10.6875 6.37344 10.4079 7.04844 9.90004 7.55625C9.39223 8.06406 8.71723 8.34375 8.00004 8.34375Z"
                        fill="#545454"
                      />
                    </svg>
                  }
                />
              </Col>
              <Col span={1} total={3}>
                <Input
                  type="text"
                  value={email}
                  onChange={setEmail}
                  name="email"
                  label="email"
                  placeholder="Email"
                  rules={[{ type: 'required', errMsg: 'Email is required' }]}
                />
              </Col>
              <Col span={1} total={3}>
                <Input
                  type="password"
                  value={password}
                  onChange={setPassword}
                  name="Password"
                  label="Password"
                  placeholder="Password"
                  rules={[
                    { type: 'required', errMsg: 'Password is required' },
                    {
                      type: 'regex',
                      errMsg: 'Username does not match the required items',
                      limiter:
                        '/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={1} total={3}>
                <Input
                  autoFocus={true}
                  type="number"
                  value={number}
                  onChange={setNumber}
                  min={10}
                  max={20}
                  name="number"
                  label="Age"
                  placeholder="Age"
                  rules={[
                    { type: 'required', errMsg: 'Age is required' },
                    {
                      type: 'min',
                      errMsg: 'Age should be more than 9',
                      min: 10,
                    },
                    {
                      type: 'max',
                      errMsg: 'Age should be less than 21',
                      max: 20,
                    },
                  ]}
                />
              </Col>
              <Col span={1} total={3}>
                <Input
                  type="radio"
                  value={radio}
                  onChange={setRadio}
                  name="radio"
                  label="Gender"
                  options={[
                    {
                      label: 'Male',
                      value: 'male',
                    },
                    {
                      label: 'Female',
                      value: 'female',
                    },
                  ]}
                />
              </Col>
              <Col span={1} total={3}>
                <Input
                  type="checkbox"
                  value={city}
                  onChange={setCity}
                  name="radio"
                  label="City"
                  icon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.4141 11.9312C13.1194 11.2331 12.6916 10.5989 12.1547 10.0641C11.6195 9.52767 10.9854 9.10001 10.2875 8.80469C10.2813 8.80156 10.275 8.8 10.2688 8.79688C11.2422 8.09375 11.875 6.94844 11.875 5.65625C11.875 3.51562 10.1407 1.78125 8.00004 1.78125C5.85941 1.78125 4.12504 3.51562 4.12504 5.65625C4.12504 6.94844 4.75785 8.09375 5.73129 8.79844C5.72504 8.80156 5.71879 8.80312 5.71254 8.80625C5.01254 9.10156 4.38441 9.525 3.84535 10.0656C3.30896 10.6009 2.8813 11.235 2.58598 11.9328C2.29585 12.616 2.13939 13.3485 2.12504 14.0906C2.12462 14.1073 2.12755 14.1239 2.13364 14.1394C2.13974 14.1549 2.14888 14.1691 2.16053 14.181C2.17218 14.193 2.1861 14.2025 2.20147 14.2089C2.21684 14.2154 2.23336 14.2188 2.25004 14.2188H3.18754C3.25629 14.2188 3.31098 14.1641 3.31254 14.0969C3.34379 12.8906 3.82816 11.7609 4.68441 10.9047C5.57035 10.0188 6.74691 9.53125 8.00004 9.53125C9.25316 9.53125 10.4297 10.0188 11.3157 10.9047C12.1719 11.7609 12.6563 12.8906 12.6875 14.0969C12.6891 14.1656 12.7438 14.2188 12.8125 14.2188H13.75C13.7667 14.2188 13.7832 14.2154 13.7986 14.2089C13.814 14.2025 13.8279 14.193 13.8396 14.181C13.8512 14.1691 13.8603 14.1549 13.8664 14.1394C13.8725 14.1239 13.8755 14.1073 13.875 14.0906C13.8594 13.3438 13.7047 12.6172 13.4141 11.9312ZM8.00004 8.34375C7.28285 8.34375 6.60785 8.06406 6.10004 7.55625C5.59223 7.04844 5.31254 6.37344 5.31254 5.65625C5.31254 4.93906 5.59223 4.26406 6.10004 3.75625C6.60785 3.24844 7.28285 2.96875 8.00004 2.96875C8.71723 2.96875 9.39223 3.24844 9.90004 3.75625C10.4079 4.26406 10.6875 4.93906 10.6875 5.65625C10.6875 6.37344 10.4079 7.04844 9.90004 7.55625C9.39223 8.06406 8.71723 8.34375 8.00004 8.34375Z"
                        fill="#545454"
                      />
                    </svg>
                  }
                  options={[
                    {
                      label: 'Bangalore',
                      value: 'bangalore',
                    },
                    {
                      label: 'Chennai',
                      value: 'chennai',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={1} total={3}>
                <Input
                  type="file"
                  value={image}
                  onChange={setImage}
                  name="radio"
                  label="City"
                  accept="image/*"
                  rules={[
                    {
                      type: 'maxSize',
                      errMsg: 'File size should be less than 1mb',
                      maxSize: 1024,
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={1} total={1}>
                <Col span={1} total={3}>
                  <Input
                    type="checkbox"
                    value={answer}
                    onChange={setAnswer}
                    name="answer"
                    label="City"
                    full={true}
                    options={[
                      {
                        label:
                          'Exam Lounge is an incremental learning platform that will help to develop and enhance the cognitive and logical reasoning skills.',
                        value: 'bangalore',
                      },
                      {
                        label:
                          'In the month on January, Suresh spend 55% of his monthly salary on bills and rent. Out of the remaining salary, he invested 50% in PPF and the remaining he deposited in the bank. He deposited Rs. 21,600 in the bank. What was his salary?',
                        value: 'chennai',
                      },
                    ]}
                  />
                </Col>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="app__card u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#9</span> Card
          </H2>
          <Row>
            <Col span={1} total={3}>
              <Card type="border">
                <H3 className=" u-margin-bottom-small">Batman Begins!</H3>
                <Paragraph>
                  No guns, no killing. I'll be standing where l belong. Between
                  you and the peopIe of Gotham. My anger outweights my guilt.
                  Bats frighten me. It's time my enemies shared my dread. I'm
                  not wearing hockey pads.
                </Paragraph>
              </Card>
            </Col>
            <Col span={1} total={3}>
              <Card type="border">
                <H3 className=" u-margin-bottom-small">The Dark Knight</H3>
                <Paragraph>
                  Well, you see... I'm buying this hotel and setting some new
                  rules about the pool area. Accomplice? I'm gonna tell them the
                  whole thing was your idea. Well, you see... I'm buying this
                  hotel and setting some new rules about the pool area.
                </Paragraph>
              </Card>
            </Col>
            <Col span={1} total={3}>
              <Card type="border">
                <H3 className=" u-margin-bottom-small">
                  The Dark Knight Returns
                </H3>
                <Paragraph>
                  Someone like you. Someone who'll rattle the cages. I seek the
                  means to fight injustice. To turn fear against those who prey
                  on the fearful. I'll be standing where l belong. Between you
                  and the peopIe of Gotham.
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={1} total={1}>
              <Card type="shadow" className="app__card--full">
                <H2 className="app__card__heading u-margin-bottom-medium u-center-text">
                  I'm Batman I seek the means to fight injustice.
                </H2>
                <div className="app__para">
                  <Paragraph>
                    I seek the means to fight injustice. To turn fear against
                    those who prey on the fearful.
                  </Paragraph>
                  <Paragraph>
                    It's not who I am underneath but what I do that defines me.
                    I will go back to Gotham and I will fight men Iike this but
                    I will not become an executioner. My anger outweights my
                    guilt. It's not who I am underneath but what I do that
                    defines me.
                  </Paragraph>
                  <Paragraph>
                    My anger outweights my guilt. I'm not wearing hockey pads.
                    The first time I stole so that I wouldn't starve, yes. I
                    lost many assumptions about the simple nature of right and
                    wrong. And when I traveled I learned the fear before a crime
                    and the thrill of success. But I never became one of them.
                  </Paragraph>
                  <Paragraph>
                    It was a dog. It was a big dog. I'm not wearing hockey pads.
                    I will go back to Gotham and I will fight men Iike this but
                    I will not become an executioner.
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="app__nav u-margin-bottom-large">
        <Col span={1} total={1}>
          <H2 className="u-margin-bottom-medium">
            <span className="app__index">#10</span> Navigation
          </H2>
          <Nav
            className="u-margin-bottom-small"
            logo={<div className="app__logo"></div>}>
            <NavMenu>
              <Button state="text">Home</Button>
              <Button state="text">Products</Button>
              <Button state="text">About</Button>
              <Button state="text">Contact</Button>
              <Button state="primary">Register</Button>
            </NavMenu>
          </Nav>
          <Nav
            type={'center'}
            logo={<div className="app__logo"></div>}
            className="u-margin-bottom-small">
            <NavMenu>
              <Button state="text">Home</Button>
              <Button state="text">Products</Button>
              <Button state="text">About</Button>
              <Button state="text">Contact</Button>
            </NavMenu>
            <NavActions>
              <Button state="text">Sign in</Button>
              <Button state="primary">Sign up</Button>
            </NavActions>
          </Nav>
          <Button
            className="u-margin-bottom-small"
            state="primary"
            onClick={() => setCollapsed(!collapsed)}>
            Toggle Sidebar
          </Button>
          <NavSideBar menu={menu} collapsed={collapsed} />
        </Col>
      </Row>
      <div className="app__chart u-margin-bottom-large"></div>
      <div className="app__img u-margin-bottom-large"></div>
      <div className="app__msg u-margin-bottom-large"></div>
    </div>
  );
};
