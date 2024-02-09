import React from 'react'
import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link';

const AskAI = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const [findTargetMarketChecked, setFindTargetMarketChecked] = useState(false);
  const [shortlistTemplatesChecked, setShortlistTemplatesChecked] = useState(false);

  const handleFindTargetMarketChange = () => {
    setFindTargetMarketChecked(!findTargetMarketChecked);
  };

  const handleShortlistTemplatesChange = () => {
    setShortlistTemplatesChecked(!shortlistTemplatesChecked);
  };
    const [selectedStage, setSelectedStage] = useState('');
  
    const handleStageChange = (stage) => {
      setSelectedStage(stage);
    };

  return (
    <>
      <div className="ask-ai-container">
        <Head>
          <title>FounDoe</title>
        </Head>
        <div className="ask-ai-ask-ai">
          <div className="ask-ai-design">
            <img
              src="/external/image1152-bjwn-1200h.png"
              alt="image1152"
              className="ask-ai-image"
            />
            <div className="ask-ai-contentbox">
              <img
                src="/external/rectangle481154-8hlo-400h.png"
                alt="Rectangle481154"
                className="ask-ai-rectangle48"
              />
              <span className="ask-ai-text">
                <span>Foundoe</span>
              </span>
              <span className="ask-ai-text02">
                <span>by</span>
              </span>
              <span className="ask-ai-text04">
                <span>AskAI</span>
              </span>
              <span className="ask-ai-text06">
                <span>Get AI-powered ideas for your startup</span>
              </span>
            </div>
          </div>
          <div className="ask-ai-form">
            <span className="ask-ai-text08">
              <span>
                Fill out this form to generate the idea specific to your needs.
              </span>
            </span>
            <span className="ask-ai-text10">
              <span>Describe your idea in 50 words</span>
            </span>
            <div className="ask-ai-textfield">
    <input
        type="text"
        placeholder="Write your idea here"
        className="ask-ai-textfieldbox"
    />
    <span className="ask-ai-text12">
        <span></span>
    </span>
</div>

            <span className="ask-ai-text14">
              <span>Get competitors data?</span>
            </span>
            <span className="ask-ai-text16">
              <span>
                This is the number of competitors working on a similar idea as
                you
              </span>
            </span>
            <div>
      <div className="ask-ai-yes" onClick={() => handleOptionClick('Yes')}>
        <label className={`ask-ai-radiobuttons1 ${selectedOption === 'Yes' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="option"
            value="Yes"
            checked={selectedOption === 'Yes'}
            onChange={() => handleOptionClick('Yes')}
          />
          <span className="ask-ai-text18">
            <span>Yes</span>
          </span>
        </label>
      </div>
      <div className="ask-ai-no" onClick={() => handleOptionClick('No')}>
        <label className={`ask-ai-radiobuttons1 ${selectedOption === 'No' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="option"
            value="No"
            checked={selectedOption === 'No'}
            onChange={() => handleOptionClick('No')}
          />
          <span className="ask-ai-text20">
            <span>No</span>
          </span>
        </label>
      </div>
    </div>
    <div>
      <span className="ask-ai-text22">
        <span>
          <input
            type="checkbox"
            id="findTargetMarket"
            checked={findTargetMarketChecked}
            onChange={handleFindTargetMarketChange}
          />
          <label htmlFor="findTargetMarket">Find target market</label>
        </span>
      </span>
      <span className="ask-ai-text24">
        <span>
          <input
            type="checkbox"
            id="shortlistTemplates"
            checked={shortlistTemplatesChecked}
            onChange={handleShortlistTemplatesChange}
          />
          <label htmlFor="shortlistTemplates">Shortlist templates for pitch deck</label>
        </span>
      </span>
      <div className="ask-ai-checkboxes">
        <div className="ask-ai-statelayer2">
        </div>
      </div>
    </div>
            <span className="ask-ai-text26">
              <span>Stage of startup</span>
            </span>
            <div className="ask-ai-options">
      <div className="ask-ai-preseed">
        <input
          type="radio"
          id="preseed"
          name="stage"
          value="Pre-seed Stage"
          checked={selectedStage === 'Pre-seed Stage'}
          onChange={() => handleStageChange('Pre-seed Stage')}
        />
        <label htmlFor="preseed">
          <div className="ask-ai-square-button">
            {/* Square button icon or styling */}
          </div>
          <span className="ask-ai-text28">
            <span>Pre-seed Stage</span>
          </span>
        </label>
      </div>
      <div className="ask-ai-seed">
        <input
          type="radio"
          id="seed"
          name="stage"
          value="Seed Stage"
          checked={selectedStage === 'Seed Stage'}
          onChange={() => handleStageChange('Seed Stage')}
        />
        <label htmlFor="seed">
          <div className="ask-ai-square-button">
            {/* Square button icon or styling */}
          </div>
          <span className="ask-ai-text30">
            <span>Seed Stage</span>
          </span>
        </label>
      </div>
      <div className="ask-ai-seriesa">
        <input
          type="radio"
          id="seriesa"
          name="stage"
          value="Series A Stage"
          checked={selectedStage === 'Series A Stage'}
          onChange={() => handleStageChange('Series A Stage')}
        />
        <label htmlFor="seriesa">
          <div className="ask-ai-square-button">
            {/* Square button icon or styling */}
          </div>
          <span className="ask-ai-text32">
            <span>Series A Stage</span>
          </span>
        </label>
      </div>
      <div className="ask-ai-growth">
        <input
          type="radio"
          id="growth"
          name="stage"
          value="Growth Stage"
          checked={selectedStage === 'Growth Stage'}
          onChange={() => handleStageChange('Growth Stage')}
        />
        <label htmlFor="growth">
          <div className="ask-ai-square-button">
            {/* Square button icon or styling */}
          </div>
          <span className="ask-ai-text34">
            <span>Growth Stage</span>
          </span>
        </label>
      </div>
      <div className="ask-ai-late">
        <input
          type="radio"
          id="late"
          name="stage"
          value="Late Stage"
          checked={selectedStage === 'Late Stage'}
          onChange={() => handleStageChange('Late Stage')}
        />
        <label htmlFor="late">
          <div className="ask-ai-square-button">
            {/* Square button icon or styling */}
          </div>
          <span className="ask-ai-text36">
            <span>Late Stage</span>
          </span>
        </label>
      </div>
    </div>
            <span className="ask-ai-text38">
              <span>Ask any two questions</span>
            </span>
            <div className="ask-ai-questions">
              <div className="ask-ai-question1">
                <img
                  src="/external/textfield1197-tjei-200h.png"
                  alt="textfield1197"
                  className="ask-ai-textfield1"
                />
                <span className="ask-ai-text40">
                  <span>Question 1</span>
                </span>
              </div>
              <div className="ask-ai-question2">
                <img
                  src="/external/textfield1200-okuh-200h.png"
                  alt="textfield1200"
                  className="ask-ai-textfield2"
                />
                <span className="ask-ai-text42">
                  <span>Question 2</span>
                </span>
              </div>
            </div>
            <div className="ask-ai-container">
        <div className="ask-ai-form">
            <Link href="/result" className="ask-ai-submit-button">
              <span className="ask-ai-text44">
                <span>Submit</span>
              </span>
              <img
                src="/external/arrowi120-3wo.svg"
                alt="arrowI120"
                className="ask-ai-arrow"
              />
              <div className="ask-ai-shine">
                <img
                  src="/external/rectangle25i120-tf4d.svg"
                  alt="Rectangle25I120"
                  className="ask-ai-rectangle25"
                />
              </div>
          </Link>
        </div>
      </div>
      </div>
          <div className="ask-ai-navbar">
            <img
              src="/external/logopng1204-tfc.svg"
              alt="logopng1204"
              className="ask-ai-logopng"
            />
            <div className="ask-ai-text46">
              <div className="ask-ai-about">
                <img
                  src="/external/vector1209-jow.svg"
                  alt="Vector1209"
                  className="ask-ai-vector"
                />
                <img
                  src="/external/vector1210-p8m.svg"
                  alt="Vector1210"
                  className="ask-ai-vector01"
                />
                <img
                  src="/external/vector1211-qy4.svg"
                  alt="Vector1211"
                  className="ask-ai-vector02"
                />
                <img
                  src="/external/vector1212-dhvb.svg"
                  alt="Vector1212"
                  className="ask-ai-vector03"
                />
                <img
                  src="/external/vector1213-73t.svg"
                  alt="Vector1213"
                  className="ask-ai-vector04"
                />
              </div>
              <div className="ask-ai-selectedoption">
                <img
                  src="/external/selectionbox1215-o7wk-200h.png"
                  alt="selectionbox1215"
                  className="ask-ai-selectionbox"
                />
                <span className="ask-ai-text47">
                  <span>Ask AI</span>
                </span>
              </div>
              <div className="ask-ai-resources">
                <img
                  src="/external/vector1218-hy8i.svg"
                  alt="Vector1218"
                  className="ask-ai-vector05"
                />
                <img
                  src="/external/vector1219-s031.svg"
                  alt="Vector1219"
                  className="ask-ai-vector06"
                />
                <img
                  src="/external/vector1220-q7s9.svg"
                  alt="Vector1220"
                  className="ask-ai-vector07"
                />
                <img
                  src="/external/vector1221-eis.svg"
                  alt="Vector1221"
                  className="ask-ai-vector08"
                />
                <img
                  src="/external/vector1222-wt6.svg"
                  alt="Vector1222"
                  className="ask-ai-vector09"
                />
                <img
                  src="/external/vector1223-qd2.svg"
                  alt="Vector1223"
                  className="ask-ai-vector10"
                />
                <img
                  src="/external/vector1224-t5ok.svg"
                  alt="Vector1224"
                  className="ask-ai-vector11"
                />
                <img
                  src="/external/vector1225-9de5.svg"
                  alt="Vector1225"
                  className="ask-ai-vector12"
                />
                <img
                  src="/external/vector1226-r9m3.svg"
                  alt="Vector1226"
                  className="ask-ai-vector13"
                />
              </div>
              <div className="ask-ai-mentorship">
                <img
                  src="/external/vector1228-gdkc.svg"
                  alt="Vector1228"
                  className="ask-ai-vector14"
                />
                <img
                  src="/external/vector1229-k7et.svg"
                  alt="Vector1229"
                  className="ask-ai-vector15"
                />
                <img
                  src="/external/vector1230-p9c.svg"
                  alt="Vector1230"
                  className="ask-ai-vector16"
                />
                <img
                  src="/external/vector1231-xzob.svg"
                  alt="Vector1231"
                  className="ask-ai-vector17"
                />
                <img
                  src="/external/vector1232-05h.svg"
                  alt="Vector1232"
                  className="ask-ai-vector18"
                />
                <img
                  src="/external/vector1233-pjo.svg"
                  alt="Vector1233"
                  className="ask-ai-vector19"
                />
                <img
                  src="/external/vector1234-y98.svg"
                  alt="Vector1234"
                  className="ask-ai-vector20"
                />
                <img
                  src="/external/vector1235-g91.svg"
                  alt="Vector1235"
                  className="ask-ai-vector21"
                />
                <img
                  src="/external/vector1236-oel.svg"
                  alt="Vector1236"
                  className="ask-ai-vector22"
                />
                <img
                  src="/external/vector1237-z7bv.svg"
                  alt="Vector1237"
                  className="ask-ai-vector23"
                />
              </div>
              <div className="ask-ai-pricing">
                <img
                  src="/external/vector1239-q19.svg"
                  alt="Vector1239"
                  className="ask-ai-vector24"
                />
                <img
                  src="/external/vector1240-tk8g.svg"
                  alt="Vector1240"
                  className="ask-ai-vector25"
                />
                <img
                  src="/external/vector1241-ytm.svg"
                  alt="Vector1241"
                  className="ask-ai-vector26"
                />
                <img
                  src="/external/vector1242-33g.svg"
                  alt="Vector1242"
                  className="ask-ai-vector27"
                />
                <img
                  src="/external/vector1243-s1fq.svg"
                  alt="Vector1243"
                  className="ask-ai-vector28"
                />
                <img
                  src="/external/vector1244-cnfr.svg"
                  alt="Vector1244"
                  className="ask-ai-vector29"
                />
                <img
                  src="/external/vector1245-0xfn.svg"
                  alt="Vector1245"
                  className="ask-ai-vector30"
                />
              </div>
              <div className="ask-ai-contact-us">
                <img
                  src="/external/vector1247-s4n.svg"
                  alt="Vector1247"
                  className="ask-ai-vector31"
                />
                <img
                  src="/external/vector1248-9e.svg"
                  alt="Vector1248"
                  className="ask-ai-vector32"
                />
                <img
                  src="/external/vector1249-pqpc.svg"
                  alt="Vector1249"
                  className="ask-ai-vector33"
                />
                <img
                  src="/external/vector1250-ysx6.svg"
                  alt="Vector1250"
                  className="ask-ai-vector34"
                />
                <img
                  src="/external/vector1251-2mk9.svg"
                  alt="Vector1251"
                  className="ask-ai-vector35"
                />
                <img
                  src="/external/vector1252-q6f8.svg"
                  alt="Vector1252"
                  className="ask-ai-vector36"
                />
                <img
                  src="/external/vector1253-1psn.svg"
                  alt="Vector1253"
                  className="ask-ai-vector37"
                />
                <img
                  src="/external/vector1254-sjqq.svg"
                  alt="Vector1254"
                  className="ask-ai-vector38"
                />
                <img
                  src="/external/vector1255-jnq.svg"
                  alt="Vector1255"
                  className="ask-ai-vector39"
                />
              </div>
            </div>
            <div className="ask-ai-login">
              <div className="ask-ai-login1">
                <img
                  src="/external/vector1258-qt8o.svg"
                  alt="Vector1258"
                  className="ask-ai-vector40"
                />
                <img
                  src="/external/vector1259-qr6r.svg"
                  alt="Vector1259"
                  className="ask-ai-vector41"
                />
                <img
                  src="/external/vector1260-s8l9.svg"
                  alt="Vector1260"
                  className="ask-ai-vector42"
                />
                <img
                  src="/external/vector1261-04v8.svg"
                  alt="Vector1261"
                  className="ask-ai-vector43"
                />
                <img
                  src="/external/vector1262-wpm8.svg"
                  alt="Vector1262"
                  className="ask-ai-vector44"
                />
              </div>
              <button className="ask-ai-signupbutton">
                <div className="ask-ai-tryforfree">
                  <img
                    src="/external/vector1265-pvs.svg"
                    alt="Vector1265"
                    className="ask-ai-vector45"
                  />
                  <img
                    src="/external/vector1266-x01.svg"
                    alt="Vector1266"
                    className="ask-ai-vector46"
                  />
                  <img
                    src="/external/vector1267-pq8i.svg"
                    alt="Vector1267"
                    className="ask-ai-vector47"
                  />
                  <img
                    src="/external/vector1268-ty8.svg"
                    alt="Vector1268"
                    className="ask-ai-vector48"
                  />
                  <img
                    src="/external/vector1269-ff6a.svg"
                    alt="Vector1269"
                    className="ask-ai-vector49"
                  />
                  <img
                    src="/external/vector1270-mhho.svg"
                    alt="Vector1270"
                    className="ask-ai-vector50"
                  />
                  <img
                    src="/external/vector1271-9ckk.svg"
                    alt="Vector1271"
                    className="ask-ai-vector51"
                  />
                  <img
                    src="/external/vector1272-oy6.svg"
                    alt="Vector1272"
                    className="ask-ai-vector52"
                  />
                  <img
                    src="/external/vector1273-jxfq.svg"
                    alt="Vector1273"
                    className="ask-ai-vector53"
                  />
                  <img
                    src="/external/vector1274-l0u.svg"
                    alt="Vector1274"
                    className="ask-ai-vector54"
                  />
                </div>
                <img
                  src="/external/arrow1275-3iy.svg"
                  alt="arrow1275"
                  className="ask-ai-arrow1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .ask-ai-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .ask-ai-ask-ai {
            width: 100%;
            height: 1309px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-white);
          }
          .ask-ai-design {
            top: 104px;
            left: 49px;
            width: 500px;
            height: 1163px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-image {
            top: 0px;
            left: 0px;
            width: 500px;
            height: 1163px;
            position: absolute;
            border-radius: 30px;
          }
          .ask-ai-contentbox {
            top: 163px;
            left: 65px;
            width: 370px;
            height: 370px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-rectangle48 {
            top: 0px;
            left: 0px;
            width: 370px;
            height: 370px;
            position: absolute;
          }
          .ask-ai-text {
            top: 145px;
            left: 48px;
            color: rgba(66, 0, 255, 1);
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text02 {
            top: 95px;
            left: 48px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text04 {
            top: 45px;
            left: 48px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text06 {
            top: 245px;
            left: 48px;
            color: rgba(0, 0, 0, 1);
            width: 231px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-form {
            top: 104px;
            left: 576px;
            width: 655px;
            height: 1189px;
            display: flex;
            position: absolute;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(231, 232, 254, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 20px;
            background-color: var(--dl-color-default-white);
          }
          .ask-ai-text08 {
            top: 16px;
            left: 27px;
            color: rgba(85, 85, 85, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text10 {
            top: 65px;
            left: 27px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-textfield {
            top: 107px;
            left: 27px;
            width: 594px;
            height: 150px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-textfieldbox {
            top: 0px;
            left: 0px;
            width: 594px;
            height: 150px;
            position: absolute;
            border-color: rgba(22, 25, 37, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 20px;
          }
          .ask-ai-text12 {
            top: 18px;
            left: 22px;
            color: rgba(159, 157, 157, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text14 {
            top: 287px;
            left: 27px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text16 {
            top: 325px;
            left: 27px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: italic;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-yes {
            top: 359px;
            left: 27px;
            width: 82px;
            height: 48px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-radiobuttons {
            top: 0px;
            left: 0px;
            width: 48px;
            height: 48px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .ask-ai-container01 {
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-statelayer {
            display: flex;
            padding: 8px;
            align-items: center;
            justify-content: center;
          }
          .ask-ai-icon {
            width: 24px;
            height: 24px;
          }
          .ask-ai-text18 {
            top: 13px;
            left: 57px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-no {
            top: 359px;
            left: 167px;
            width: 78px;
            height: 48px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-radiobuttons1 {
            top: 0px;
            left: 0px;
            width: 48px;
            height: 48px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .ask-ai-container02 {
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-statelayer1 {
            display: flex;
            padding: 8px;
            align-items: center;
            justify-content: center;
          }
          .ask-ai-icon1 {
            width: 24px;
            height: 24px;
          }
          .ask-ai-text20 {
            top: 13px;
            left: 57px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text22 {
            top: 450px;
            left: 95px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text24 {
            top: 515px;
            left: 95px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-checkboxes {
            top: 437px;
            left: 27px;
            width: 48px;
            display: flex;
            padding: 4px;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ask-ai-statelayer2 {
            display: flex;
            padding: 11px;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-container03 {
            width: 18px;
            height: 18px;
            border-color: rgba(73, 69, 79, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 2px;
          }
          .ask-ai-checkboxes1 {
            top: 502px;
            left: 27px;
            width: 48px;
            display: flex;
            padding: 4px;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ask-ai-statelayer3 {
            display: flex;
            padding: 11px;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-container04 {
            width: 18px;
            height: 18px;
            border-color: rgba(73, 69, 79, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 2px;
          }
          .ask-ai-text26 {
            top: 580px;
            left: 27px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-options {
            top: 602px;
            left: 27px;
            width: 169px;
            display: flex;
            padding: 20px 0;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .ask-ai-preseed {
            width: 169px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-checkboxes2 {
            top: 0px;
            left: 0px;
            width: 48px;
            display: flex;
            padding: 4px;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ask-ai-statelayer4 {
            display: flex;
            padding: 11px;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-container05 {
            width: 18px;
            height: 18px;
            border-color: rgba(73, 69, 79, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 2px;
          }
          .ask-ai-text28 {
            top: 13px;
            left: 57px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-seed {
            width: 140px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-checkboxes3 {
            top: 0px;
            left: 0px;
            width: 48px;
            display: flex;
            padding: 4px;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ask-ai-statelayer5 {
            display: flex;
            padding: 11px;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-container06 {
            width: 18px;
            height: 18px;
            border-color: rgba(73, 69, 79, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 2px;
          }
          .ask-ai-text30 {
            top: 13px;
            left: 57px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-seriesa {
            width: 163px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-checkboxes4 {
            top: 0px;
            left: 0px;
            width: 48px;
            display: flex;
            padding: 4px;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ask-ai-statelayer6 {
            display: flex;
            padding: 11px;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-container07 {
            width: 18px;
            height: 18px;
            border-color: rgba(73, 69, 79, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 2px;
          }
          .ask-ai-text32 {
            top: 13px;
            left: 57px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-growth {
            width: 163px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-checkboxes5 {
            top: 0px;
            left: 0px;
            width: 48px;
            display: flex;
            padding: 4px;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ask-ai-statelayer7 {
            display: flex;
            padding: 11px;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-container08 {
            width: 18px;
            height: 18px;
            border-color: rgba(73, 69, 79, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 2px;
          }
          .ask-ai-text34 {
            top: 17px;
            left: 62px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-late {
            width: 142px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-checkboxes6 {
            top: 0px;
            left: 0px;
            width: 48px;
            display: flex;
            padding: 4px;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ask-ai-statelayer8 {
            display: flex;
            padding: 11px;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
          }
          .ask-ai-container09 {
            width: 18px;
            height: 18px;
            border-color: rgba(73, 69, 79, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 2px;
          }
          .ask-ai-text36 {
            top: 11px;
            left: 64px;
            color: var(--dl-color-default-raisinblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-text38 {
            top: 882px;
            left: 27px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-questions {
            gap: 16px;
            top: 914px;
            left: 27px;
            width: 565px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .ask-ai-question1 {
            width: 565px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-textfield1 {
            top: 0px;
            left: 0px;
            width: 565px;
            height: 60px;
            position: absolute;
            border-color: rgba(22, 25, 37, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 10px;
          }
          .ask-ai-text40 {
            top: 11px;
            left: 13px;
            color: rgba(159, 157, 157, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-question2 {
            width: 565px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-textfield2 {
            top: 0px;
            left: 0px;
            width: 565px;
            height: 60px;
            position: absolute;
            border-color: rgba(22, 25, 37, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 10px;
          }
          .ask-ai-text42 {
            top: 11px;
            left: 15px;
            color: rgba(159, 157, 157, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-shinybuttons {
            top: 1103px;
            left: 26px;
            width: 323px;
            height: 70px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-rectangle26 {
            top: 0px;
            left: 0px;
            width: 320px;
            height: 70px;
            position: absolute;
            border-radius: 16px;
          }
          .ask-ai-rectangle22 {
            top: 2.592592477798462px;
            left: 2.018749952316284px;
            width: 307px;
            height: 57px;
            position: absolute;
            box-sizing: content-box;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 10px;
          }
          .ask-ai-text44 {
            top: 20px;
            left: 128px;
            color: var(--dl-color-default-white);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-arrow {
            top: 19px;
            left: 267px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .ask-ai-shine {
            top: 2.857168674468994px;
            left: -59.553123474121094px;
            width: 63.641719818115234px;
            height: 56.7724609375px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .ask-ai-rectangle25 {
            top: 1.7660635620586618e-8px;
            left: 20.45623016357422px;
            width: 43px;
            height: 57px;
            position: absolute;
          }
          .ask-ai-navbar {
            gap: 126px;
            top: 29px;
            left: 50px;
            width: 1181px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: var(--dl-color-default-white);
          }
          .ask-ai-logopng {
            width: 177px;
            height: 45px;
          }
          .ask-ai-text46 {
            gap: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ask-ai-about {
            width: 45px;
            height: 11.423999786376953px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .ask-ai-vector {
            top: 1.119999885559082px;
            left: 39.24662780761719px;
            width: 6px;
            height: 10px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector01 {
            top: 3.4720001220703125px;
            left: 31.193248748779297px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector02 {
            top: 3.328001022338867px;
            left: 21.730375289916992px;
            width: 8px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector03 {
            top: 0px;
            left: 12.741250038146973px;
            width: 8px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector04 {
            top: 0px;
            left: 0px;
            width: 11px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-selectedoption {
            width: 90px;
            height: 32px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .ask-ai-selectionbox {
            top: 0px;
            left: 0px;
            width: 90px;
            height: 32px;
            position: absolute;
            border-radius: 16px;
          }
          .ask-ai-text47 {
            top: 5px;
            left: 21px;
            color: var(--dl-color-default-white);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .ask-ai-resources {
            width: 73px;
            height: 11.423999786376953px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .ask-ai-vector05 {
            top: 3.328001022338867px;
            left: 66.28225708007812px;
            width: 6px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector06 {
            top: 3.328001022338867px;
            left: 57.67250061035156px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector07 {
            top: 3.328001022338867px;
            left: 50.36000061035156px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector08 {
            top: 3.280000686645508px;
            left: 44.964630126953125px;
            width: 5px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector09 {
            top: 3.4720001220703125px;
            left: 35.8072509765625px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector10 {
            top: 3.328001022338867px;
            left: 26.344375610351562px;
            width: 8px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector11 {
            top: 3.328001022338867px;
            left: 18.610382080078125px;
            width: 6px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector12 {
            top: 3.328001022338867px;
            left: 10.000625610351562px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector13 {
            top: 0px;
            left: 0px;
            width: 9px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-mentorship {
            width: 81px;
            height: 14.17600154876709px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .ask-ai-vector14 {
            top: 3.344000816345215px;
            left: 72.9482421875px;
            width: 8px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector15 {
            top: 0px;
            left: 68.91363525390625px;
            width: 2px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector16 {
            top: 0px;
            left: 60px;
            width: 7px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector17 {
            top: 3.344000816345215px;
            left: 51.640869140625px;
            width: 6px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector18 {
            top: 3.2960004806518555px;
            left: 46.1982421875px;
            width: 5px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector19 {
            top: 3.344000816345215px;
            left: 36.6873779296875px;
            width: 8px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector20 {
            top: 1.1359996795654297px;
            left: 30.281768798828125px;
            width: 6px;
            height: 10px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector21 {
            top: 3.344000816345215px;
            left: 22.1669921875px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector22 {
            top: 3.344000816345215px;
            left: 13.1092529296875px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector23 {
            top: 0.015999794006347656px;
            left: 0px;
            width: 11px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-pricing {
            width: 48px;
            height: 14.320000648498535px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .ask-ai-vector24 {
            top: 3.344000816345215px;
            left: 39.9068603515625px;
            width: 8px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector25 {
            top: 3.344000816345215px;
            left: 31.152099609375px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector26 {
            top: 0px;
            left: 27.11749267578125px;
            width: 2px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector27 {
            top: 3.344000816345215px;
            left: 19.3287353515625px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector28 {
            top: 0px;
            left: 15.75811767578125px;
            width: 2px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector29 {
            top: 3.2960004806518555px;
            left: 9.933349609375px;
            width: 5px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector30 {
            top: 0.015999794006347656px;
            left: 0px;
            width: 8px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-contact-us {
            width: 78px;
            height: 11.567999839782715px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .ask-ai-vector31 {
            top: 3.472001075744629px;
            left: 71.97872924804688px;
            width: 6px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector32 {
            top: 0.14400005340576172px;
            left: 60.788360595703125px;
            width: 9px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector33 {
            top: 1.2639999389648438px;
            left: 49.541473388671875px;
            width: 6px;
            height: 10px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector34 {
            top: 3.472001075744629px;
            left: 42.697113037109375px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector35 {
            top: 3.472001075744629px;
            left: 34.215362548828125px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector36 {
            top: 1.2639999389648438px;
            left: 27.619598388671875px;
            width: 6px;
            height: 10px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector37 {
            top: 3.472001075744629px;
            left: 19.504852294921875px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector38 {
            top: 3.472001075744629px;
            left: 9.993988037109375px;
            width: 8px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector39 {
            top: 0px;
            left: 0px;
            width: 9px;
            height: 12px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-login {
            gap: 9px;
            width: 182px;
            height: 44px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .ask-ai-login1 {
            width: 38px;
            height: 14.320000648498535px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .ask-ai-vector40 {
            top: 3.344000816345215px;
            left: 31.01150131225586px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector41 {
            top: 0px;
            left: 26.97687530517578px;
            width: 2px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector42 {
            top: 3.344000816345215px;
            left: 17.156875610351562px;
            width: 8px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector43 {
            top: 3.344000816345215px;
            left: 8.109999656677246px;
            width: 8px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector44 {
            top: 0.015999794006347656px;
            left: 0px;
            width: 7px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-signupbutton {
            gap: 3px;
            width: 132px;
            height: 44px;
            display: flex;
            padding: 0 9px 0 15px;
            align-items: center;
            flex-shrink: 0;
            border-style: solid;
            border-width: 2px;
            border-radius: 22px;
          }
          .ask-ai-tryforfree {
            width: 80px;
            height: 14.22400188446045px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .ask-ai-vector45 {
            top: 3.392001152038574px;
            left: 72.67049407958984px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector46 {
            top: 3.392001152038574px;
            left: 64.07674407958984px;
            width: 7px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector47 {
            top: 3.344000816345215px;
            left: 58.68137741088867px;
            width: 5px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector48 {
            top: 0px;
            left: 52.0785026550293px;
            width: 6px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector49 {
            top: 3.344000816345215px;
            left: 42.96262741088867px;
            width: 5px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector50 {
            top: 3.392001152038574px;
            left: 33.451751708984375px;
            width: 8px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector51 {
            top: 0px;
            left: 27.531627655029297px;
            width: 6px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector52 {
            top: 3.5360002517700195px;
            left: 14.999999046325684px;
            width: 8px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector53 {
            top: 3.344000816345215px;
            left: 9.618874549865723px;
            width: 5px;
            height: 8px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-vector54 {
            top: 0.06400012969970703px;
            left: 0px;
            width: 10px;
            height: 11px;
            position: absolute;
            box-sizing: content-box;
          }
          .ask-ai-arrow1 {
            width: 24px;
            height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default AskAI
