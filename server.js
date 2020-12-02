const express = require("express");
const app = express();
const port = 3000;
function getData(offset, limit) {
  let newData = [];
  let max = parseInt(offset) + parseInt(limit);
  console.log(max);
  for (let i = parseInt(offset); i < max; i++) {
    if (data.narratives.commonSearchResultList[i]) {
      newData.push(data.narratives.commonSearchResultList[i]);
    }
  }
  return newData;
}

let data = {
  status: "true",
  narratives: {
    commonSearchResultList: [
      {
        cardIndex: 1,
        pageTitle: "TCS Data Marketplace",
        imagePath:
          "/content/dam/digistore/narratives/images/card-images/RnI_SummitNarrative_HarnAbund_Data_DataMarketplace_Aug2019_MP.jpg",
        pagePath: "/content/digistore/narrative/tcs-data-marketplace.html",
        image: {
          onex:
            "/content/dam/digistore/narratives/images/card-images/RnI_SummitNarrative_HarnAbund_Data_DataMarketplace_Aug2019_MP.jpg",
          twox:
            "/content/dam/digistore/narratives/images/card-images/RnI_SummitNarrative_HarnAbund_Data_DataMarketplace_Aug2019_MP.jpg",
        },
        description:
          "The feature-rich TCS Data Marketplace platform enables the sale and purchase of data for client ecosystems",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "06 Sep 2019",
        assetCreated: "Sep 6, 2019 11:31:08 AM",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 0,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 2,
        pageTitle: "Hosted OSS BSS Connected Devices Management Suite",
        imagePath:
          "/content/dam/digistore/narratives/images/card-images/DSN707_DS-HOBS-CDM_SN.jpg",
        pagePath:
          "/content/digistore/narrative/hosted-oss-bss-connected-devices-management-suite.html",
        image: {
          onex:
            "/content/dam/digistore/narratives/images/card-images/DSN707_DS-HOBS-CDM_SN.jpg",
          twox:
            "/content/dam/digistore/narratives/images/card-images/DSN707_DS-HOBS-CDM_SN.jpg",
        },
        description:
          "Communication service providers can now elevate customer experience and improve network performance with an integrated technology platform to manage the entire service delivery lifecycle from fulfilment to assurance.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "23 Aug 2019",
        assetCreated: "Aug 23, 2019 12:54:00 PM",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 0,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 3,
        pageTitle:
          "Managing Operational Risk Through Automation in the Financial Sector",
        imagePath:
          "/content/dam/digistore/narratives/images/card-images/DSO320 (1).JPG",
        pagePath:
          "/content/digistore/narrative/operational-risk-management.html",
        image: {
          onex:
            "/content/dam/digistore/narratives/images/card-images/DSO320 (1).JPG",
          twox:
            "/content/dam/digistore/narratives/images/card-images/DSO320 (1).JPG",
        },
        description:
          "Leveraging digital technologies, financial service providers can build a smart compliance testing solution across domain, data, and technology.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "29 Oct 2018",
        assetCreated: "Oct 29, 2018 4:52:00 PM",
        duration: "14",
        durations: 0,
        likeCount: 1,
        totallikeCount: 2,
        averagerating: "4",
        lastLikedUser: "1029421",
        liked: false,
        views: 70,
        displayMessage: "1029421 and 1 other like this",
        starDisplay:
          '<span class="star rate"></span><span class="star rate"></span><span class="star rate"></span><span class="star rate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 4,
        pageTitle: "Cognitive Solution for KYC",
        imagePath:
          "/content/dam/digistore/narratives/images/card-images/BFS_DS-KYC_Off_v1.6.jpeg",
        pagePath:
          "/content/digistore/narrative/cognitive-solution-for-kyc.html",
        image: {
          onex:
            "/content/dam/digistore/narratives/images/card-images/BFS_DS-KYC_Off_v1.6.jpeg",
          twox:
            "/content/dam/digistore/narratives/images/card-images/BFS_DS-KYC_Off_v1.6.jpeg",
        },
        description:
          "TCS Bancs, cognitive and automated solution for KYC enabling high straight through processing rate for KYC.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "18 Feb 2019",
        assetCreated: "Feb 18, 2019 6:02:00 PM",
        duration: "14",
        durations: 0,
        likeCount: 0,
        totallikeCount: 1,
        averagerating: "2",
        lastLikedUser: "1033794",
        liked: false,
        views: 66,
        displayMessage: "1033794 likes this",
        starDisplay:
          '<span class="star rate"></span><span class="star rate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
    ],
    totalMatch: 4,
  },
  povs: {
    commonSearchResultList: [
      {
        cardIndex: 1,
        pageTitle: "Assuring Customer Experience, Digitally",
        imagePath:
          "/content/dam/digistore/points-of-view/images/card-images/DSP623CX-Assurance_final.jpg",
        pagePath:
          "/content/digistore/povs/assuring-customer-experience-digitally.html",
        image: {
          onex:
            "/content/dam/digistore/points-of-view/images/card-images/DSP623CX-Assurance_final.jpg",
          twox:
            "/content/dam/digistore/points-of-view/images/card-images/DSP623CX-Assurance_final.jpg",
        },
        description:
          "To ensure superior customer experience, organizations need a digital-powered quality engineering aligned to business priorities and industry standards. QE is no longer about checking if an application works; it now involves non-functional parameters as well.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "19 Aug 2019",
        assetCreated: "Aug 19, 2019 1:58:00 PM",
        duration: "14",
        durations: 0,
        likeCount: 0,
        totallikeCount: 1,
        averagerating: "5",
        lastLikedUser: "1114483",
        liked: false,
        views: 6,
        displayMessage: "1114483 likes this",
        starDisplay:
          '<span class="star rate"></span><span class="star rate"></span><span class="star rate"></span><span class="star rate"></span><span class="star rate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 2,
        pageTitle: "The New Age Digital Procurement",
        imagePath:
          "/content/dam/digistore/points-of-view/images/card-images/DSP601SAPAriba_final_Thumbnail.jpg",
        pagePath:
          "/content/digistore/povs/the-new-age-digital-procurement.html",
        image: {
          onex:
            "/content/dam/digistore/points-of-view/images/card-images/DSP601SAPAriba_final_Thumbnail.jpg",
          twox:
            "/content/dam/digistore/points-of-view/images/card-images/DSP601SAPAriba_final_Thumbnail.jpg",
        },
        description:
          "Leveraging cloud, AI and analytics in procurement is key to success in the digital world. Procurement is no longer a back office function; digitalization can help it play a larger role in business synergy driving excellence.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "10 Jun 2020",
        assetCreated: "Jun 10, 2020 11:51:00 AM",
        duration: "14",
        durations: 0,
        likeCount: 3,
        totallikeCount: 4,
        averagerating: "4",
        lastLikedUser: "1029421",
        liked: false,
        views: 13,
        displayMessage: "1029421 and 3 others like this",
        starDisplay:
          '<span class="star rate"></span><span class="star rate"></span><span class="star rate"></span><span class="star rate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 3,
        pageTitle: "Paradigm Shift to Conversational Experiences",
        imagePath:
          "/content/dam/digistore/points-of-view/images/card-images/DSP516ConEx_Thumbnail.jpg",
        pagePath:
          "/content/digistore/povs/paradigm-shift-to-conversational-experiences.html",
        image: {
          onex:
            "/content/dam/digistore/points-of-view/images/card-images/DSP516ConEx_Thumbnail.jpg",
          twox:
            "/content/dam/digistore/points-of-view/images/card-images/DSP516ConEx_Thumbnail.jpg",
        },
        description:
          "Conversational AI allow customers to engage with enterprises through natural conversations. Enterprises that are willing to experiment and be creative, can reimagine customer engagement through this important channel of the future. ",
        " cardSectionTagTitle": "",
        assetPublishedDate: "",
        assetCreatedDate: "05 Aug 2019",
        assetCreated: "Aug 5, 2019 6:40:08 PM",
        duration: "14",
        durations: 0,
        likeCount: 0,
        totallikeCount: 1,
        averagerating: "0",
        lastLikedUser: "1114483",
        liked: false,
        views: 8,
        displayMessage: "1114483 likes this",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
    ],
    totalMatch: 3,
  },
  offerings: {
    commonSearchResultList: [
      {
        cardIndex: 1,
        pageTitle: "Offering Digi Solution",
        imagePath:
          "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
        pagePath:
          "/content/digistore/offering-reference/offering-digi-solution.html",
        image: {
          onex:
            "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
          twox:
            "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
        },
        description: "UAT test",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 0,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 2,
        pageTitle: "Testing mail Service",
        imagePath:
          "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
        pagePath:
          "/content/digistore/offering-reference/testing-mail-service.html",
        image: {
          onex:
            "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
          twox:
            "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
        },
        description: "asd",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 0,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 3,
        pageTitle: "Testing991 Platform",
        imagePath:
          "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
        pagePath:
          "/content/digistore/offering-reference/testing991-platform.html",
        image: {
          onex:
            "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
          twox:
            "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
        },
        description: "Smoke Testing",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 0,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 4,
        pageTitle: "Testing_jyoti20Sept1 Solution",
        imagePath:
          "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
        pagePath:
          "/content/digistore/offering-reference/testing-jyoti20sept1-solution.html",
        image: {
          onex:
            "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
          twox:
            "/content/dam/digistore/points-of-view/images/card-images/DigitalStoreComingSoonImage.jpg",
        },
        description: "Testing.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 0,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
    ],
    totalMatch: 4,
  },
  caseReferences: {
    commonSearchResultList: [
      {
        cardIndex: 1,
        pageTitle: "Transforming Bank's Card and Payment Landscape",
        imagePath:
          "/content/dam/digistore/case-references/images/card-images/DB_DS2019.JPG",
        pagePath:
          "/content/digistore/references/instant-payments-apple-pay-audio.html",
        image: {
          onex:
            "/content/dam/digistore/case-references/images/card-images/DB_DS2019.JPG",
          twox:
            "/content/dam/digistore/case-references/images/card-images/DB_DS2019.JPG",
        },
        description: "Digital Symposium 2019 Case Study",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 0,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 2,
        pageTitle:
          "Customer experience excellence enhanced through Online first Digital transformation program",
        imagePath:
          "/content/dam/digistore/case-references/images/card-images/ELISA_ONLINE_FIRST_DS2019.JPG",
        pagePath:
          "/content/digistore/case-references/customer-experience-excellence-enhanced-through-online-first-digital-transformation-program.html",
        image: {
          onex:
            "/content/dam/digistore/case-references/images/card-images/ELISA_ONLINE_FIRST_DS2019.JPG",
          twox:
            "/content/dam/digistore/case-references/images/card-images/ELISA_ONLINE_FIRST_DS2019.JPG",
        },
        description:
          "Elaborating Elisa's journey of going beyond the obvious, by setting up Online First platform not only for replacing legacy applications but also to create new revenue streams for Elisa.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 0,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 3,
        pageTitle:
          "Leading American Sporting Goods Retailer brings eCommerce platform in-house",
        imagePath:
          "/content/dam/digistore/case-references/images/card-images/dsc245.jpg",
        pagePath:
          "/content/digistore/case-references/leading-american-sporting-goods-retailer-brings-ecommerce-platform-in-house.html",
        image: {
          onex:
            "/content/dam/digistore/case-references/images/card-images/dsc245.jpg",
          twox:
            "/content/dam/digistore/case-references/images/card-images/dsc245.jpg",
        },
        description:
          "TCS helps Sporting Goods Giant bring its eCommerce platform in-house. The initiative provided a differentiated online customer experience",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 22,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 4,
        pageTitle:
          "A Leading European Wealth Management Company undergoes Business Integration Program",
        imagePath:
          "/content/dam/digistore/case-references/images/card-images/dsc261.jpg",
        pagePath:
          "/content/digistore/case-references/a-leading-european-wealth-management-company-undergoes-business-integration-program.html",
        image: {
          onex:
            "/content/dam/digistore/case-references/images/card-images/dsc261.jpg",
          twox:
            "/content/dam/digistore/case-references/images/card-images/dsc261.jpg",
        },
        description:
          "The client transformed its wealth management platform to digital which included new digital channels for superior customer experience",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 22,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
    ],
    totalMatch: 4,
  },
  references: {
    commonSearchResultList: [
      {
        cardIndex: 1,
        pageTitle: "Randstad's Journey in Integrating Agile",
        imagePath:
          "/content/dam/digistore/references/card-images/Video-Repository-CardImages/Randstad_TCS_VR.JPG",
        pagePath:
          "/content/digistore/references/randstads-Journey-in-integrating-agile.html",
        image: {
          onex:
            "/content/dam/digistore/references/card-images/Video-Repository-CardImages/Randstad_TCS_VR.JPG",
          twox:
            "/content/dam/digistore/references/card-images/Video-Repository-CardImages/Randstad_TCS_VR.JPG",
        },
        description: "How Randstad's harnessed agile to improve business.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "08 Aug 2019",
        assetCreated: "Aug 8, 2019 10:29:18 AM",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 1,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 2,
        pageTitle: "Blitz Awards Photos",
        imagePath:
          "/content/dam/digistore/references/card-images/Awards Phots.jpg",
        pagePath: "/content/digistore/references/awards-photos.html",
        image: {
          onex:
            "/content/dam/digistore/references/card-images/Awards Phots.jpg",
          twox:
            "/content/dam/digistore/references/card-images/Awards Phots.jpg",
        },
        description: "Photos of all Blitz award winners",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 4,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 3,
        pageTitle: "TCS CEO Rajesh Gopinathan at STS Japan 2019",
        imagePath: "/content/dam/digistore/CEO-Corner/Images/STS_CEO_Japan.JPG",
        pagePath:
          "/content/digistore/ceo-corner/tcs-ceo-and-managing-director-rajesh-gopinathan-at-sts-japan-2019.html",
        image: {
          onex: "/content/dam/digistore/CEO-Corner/Images/STS_CEO_Japan.JPG",
          twox: "/content/dam/digistore/CEO-Corner/Images/STS_CEO_Japan.JPG",
        },
        description:
          "CEO Rajesh Gopinathan talks about horizontal ecosystems at the 2019 meet of the Science and Technology in Society forum held in Kyoto.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "25 Oct 2019",
        assetCreated: "Oct 25, 2019 4:52:00 PM",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 5,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
      {
        cardIndex: 4,
        pageTitle: "TCS Corporate Overview November 2019",
        imagePath:
          "/content/dam/digistore/references/card-images/TCS_PPT-Launch_DS Banners_362 x 168px_041119.jpg",
        pagePath:
          "/content/digistore/references/tcs-corporate-overview-november-2019.html",
        image: {
          onex:
            "/content/dam/digistore/references/card-images/TCS_PPT-Launch_DS Banners_362 x 168px_041119.jpg",
          twox:
            "/content/dam/digistore/references/card-images/TCS_PPT-Launch_DS Banners_362 x 168px_041119.jpg",
        },
        description:
          "Delivering continued successes through a rapidly evolving Business 4.0â„¢ world, read the new â€˜TCS Corporate Overviewâ€™ â€“ the powerful compilation articulating and establishing the single version of truth, the TCS narrative.",
        cardSectionTagTitle: "",
        assetPublishedDate: "",
        assetCreatedDate: "05 Nov 2019",
        assetCreated: "Nov 5, 2019 1:46:00 PM",
        duration: "14",
        durations: 0,
        likeCount: -1,
        averagerating: "0",
        liked: false,
        views: 2,
        displayMessage: "",
        starDisplay:
          '<span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span><span class="star disrate"></span>',
        newFlag: false,
        desFlag: false,
        shortDescription: "",
        clusterName: "",
      },
    ],
    totalMatch: 4,
  },
};

app.get("/", (req, res) => {
  let d = getData(req.query.offset, req.query.limit);

  return res.json({
    data: d,
  });
});
app.listen(port, () => console.log(`listening on port ${port}!`));
