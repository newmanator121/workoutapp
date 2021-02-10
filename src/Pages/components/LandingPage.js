import React from "react";
import {NavCard, NavCards} from "../../components/NavCards/NavCards";
import {Card} from "@carbon/ibm-security";

export default () => {

  return (
    <>
      <div className="bx--grid qdi--grid--full-width">
        <div className="bx--row">
          <div className="bx--col">
            <section>
              <h1>Daily Workouts</h1>
            </section>
          </div>
        </div>
      </div>

      <NavCards className="grid-container">
        <NavCard md={7} lg={7}>
          <Card
            className="security--card__header__title security--card__body__text"
            header={{title:"Monday"}}
            body={{text: "Legs Training Session"}}
            link={'#/Monday'}
          />
        </NavCard>
        <NavCard md={7} lg={7}>
          <Card
            className="security--card__header__title security--card__body__text"
            header={{title:"Tuesday"}}
            body={{text:"Recovery Session"}}
            link={'#/Tuesday'}
          />
        </NavCard>
        <NavCard md={7} lg={7}>
          <Card
            className="security--card__header__title security--card__body__text"
            header={{title:"Wednesday"}}
            body={{text:"Bicep + Tricep Training Session"}}
            link={'#/Wednesday'}
          />
        </NavCard>
        <NavCard md={7} lg={7}>
          <Card
            className="security--card__header__title security--card__body__text"
            header={{title:"Thursday"}}
            body={{text:"Recovery Session"}}
            link={'#/Thursday'}
          />
        </NavCard>
        <NavCard md={7} lg={7}>
          <Card
            className="security--card__header__title security--card__body__text"
            header={{title:"Friday"}}
            body={{text:"Chest + Back Training Session"}}
            link={'#/Friday'}
          />
        </NavCard>
        <NavCard md={7} lg={7}>
          <Card
            className="security--card__header__title security--card__body__text"
            header={{title:"Saturday"}}
            body={{text:"Core + Shoulders Training"}}
            link={'#/Saturday'}
          />
        </NavCard>
        <NavCard md={7} lg={7}>
          <Card
            className="security--card__header__title security--card__body__text"
            header={{title:"Sunday"}}
            body={{text:"Recovery Session"}}
            link={'#/Sunday'}
          />
        </NavCard>
      </NavCards>
    </>
  )
}