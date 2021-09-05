import React from 'react';
import TopSection from '../../components/TopSection';
import { QAjson } from './Data';
import { Collapse } from 'antd';
import './QA.scss';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";

function callback(key) {
  console.log(key);
}

const { Panel } = Collapse;

function QA() {
  const dispatch = useDispatch();
  dispatch({
    type: "SET_TAB",
    payload: `/QA`,
  });
  const intl = useIntl();
  document.title = intl.formatMessage({id: "route-title_qa"});
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const headlineSizeCt = '3.5vw';
  const textMaxWidthCt = '100%';
  const textWrapperAlign = 'center'
  const topSectionInfo = {headline:intl.formatMessage({id: "route-title_qa"})}
  return (
    <>
      <TopSection {...topSectionInfo}/>
      <div className={'QA__background'}>
      <div className={'QA__container'}>
          <div className='QA__row'>
          <h1 className='QA__heading dark' style = {{fontSize:` ${headlineSizeCt} `}}>
                    {'Common asked questions'}
                  </h1>
          </div>
          <div className='QA__row'>
            <div className='QA__col' style={{flexBasis:'20%','justifySelf':"center"}}>
                <div className='QA__text__wrapper__sec' style = {{textAlign: textWrapperAlign }}>
                  <p className={'QA__subtitle__bold dark'} >
                    <FormattedMessage id="qa__table_heading_one"></FormattedMessage>
                  </p>
                  <p className={'QA__subtitle dark'} >
                    <FormattedMessage id="qa__table_heading_two"></FormattedMessage>
                  </p>
                  <p className={'QA__subtitle dark'} >
                    <FormattedMessage id="qa__table_heading_three"></FormattedMessage>
                  </p>
                  <p className={'QA__subtitle dark'} >
                    <FormattedMessage id="qa__table_heading_four"></FormattedMessage>
                  </p>
                  <p className={'QA__subtitle dark'} >
                    <FormattedMessage id="qa__table_heading_five"></FormattedMessage>
                  </p>
                  <p className={'QA__subtitle dark'} >
                    <FormattedMessage id="qa__table_heading_six"></FormattedMessage>
                  </p>
                </div>
            </div>
            <div className='QA__col' style={{flexBasis:'90%'}}>
              <div className='QA__text__wrapper' style = {{maxWidth:` ${textMaxWidthCt} `,textAlign: textWrapperAlign }}>
                  
                  <Collapse accordion
                  style={ {backgroundColor: 'white'}}
                  defaultActiveKey={['1']} onChange={callback} bordered={false}>
                    <Panel header="This is panel header 1 dddd dsass dsd  ddsccsxcxc " key="1">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="4">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="5">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="6">
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default QA;
