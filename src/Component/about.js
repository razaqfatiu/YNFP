import React, { Component } from 'react'
import './about.css'

export default class goals extends Component {
  render() {
    return (
      <div className="about">

        <div className="imgDiv">
          <img className="image1" src="https://cdn06.allafrica.com/download/pic/main/main/csiid/00520061:fb516099bbc53c7b225c7467a9494026:arc614x376:w1200.jpg" alt="Image" />

          <h2 className="text">
            YNFP Initiative is a youth-led organization of foreign policy advocates championing government engagement on foreign policy issues,
             nation branding and welfare of the Nigerian diaspora at multi-stakeholder levels.
          </h2>
        </div>

        <div className="mAndV">
          <div className="mission">
            <h2 className="text-center">
              Mission:
            </h2>
            <p className="text-left texts">
              To drive national development through government engagement on foreign policy issues,
               and provide constant advocacy for the welfare of Nigerians in the diaspora.
            </p>

          </div>
          <div className="vission texts">
            <h2 className="text-center">
              Vision:
              </h2>
            <p className="text-left">
              To give Nigeria’s foreign policy a new framework that reinvigorates its international prestige and reflects its national
              interests in a suitable fashion for a dynamic modern world and global climes.
            </p>
          </div>
        </div>

        <div className="contents">
          <div className="goals">
          <h2 className="">
          Short-term goals:
          </h2>
          <ul className="sL">
          <li>Develop a brief history and background information on Nigeria’s foreign policy.</li>
          <li>Advocate for a concise definition and repositioning of Nigeria’s “national interests” in the committee of nations.</li>
          <li>Engage the Nigerian government and foreign missions on policy issues, decisions and all matters related thereto.</li>
          <li>Organize regular fora to promote discussion and dialogue around Nigeria’s foreign policy and the country’s role in the international community.</li>
          <li>Influence the government to take pragmatic steps on the accomplishment of global agendas such as sustainable development goals.</li>
          <li>Serve as a helpline for Nigerians abroad on matters deserving of government’s intervention.</li>
          <li>Curate stories from Nigerians locked up abroad or pairing Nigerians seeking emergency shelter within countries they are primarily domiciled in.</li>
          <li>Crowdsource foreign affairs and international relations matters affecting Nigerians both at home and abroad for escalation to the relevant authorities.</li>
          <li>Liaise with missions and embassies abroad to organise workshops for low-skilled workers overseas.</li>
          </ul>

          <h2 className="">
          Long-term goals:
          </h2>
          <ul className="sL">
          <li>Organize fellowships for young FP professionals to contribute to constructive dialogues regarding Nigeria’s diplomatic relation with other countries and, by and large, its role in the international community.</li>
          <li>Offer support services (to the government) to engineer the reform of Nigeria’s current foreign policy.</li>
          <li>Create a platform that gives both senses of belonging and unity to all Nigerians abroad.</li>
          <li>Rebrand Nigeria’s global image through campaigns, compelling positive storytelling, international conferences, etc.</li>
          <li>Promote Nigeria’s foreign policy interests through multidisciplinary dialogues, diplomatic relations, etc.</li>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}
