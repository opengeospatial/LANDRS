# LANDRS Design Hackathon1 
## Linked-data API for Networked DRoneS

### Pre-event Reccommended Readings:

*   **Drone data**
    *   [EMERGENT CHALLENGES FOR SCIENCE sUAS DATA MANAGEMENT: FAIRNESS THROUGH COMMUNITY ENGAGEMENT AND BEST PRACTICES DEVELOPMENT](https://www.preprints.org/manuscript/201905.0274/v1)
    *   A Minimal Information Framework for capturing FAIR data with small Unmanned Aircraft Systems
    *   [Intercomparison of Small Unmanned Aircraft System (sUAS) Measurements for Atmospheric Science during the LAPSE-RATE Campaign](https://www.mdpi.com/1424-8220/19/9/2179)
*   **Data management and information modeling for research**
    *   [The FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)
    *   [Modeling Smart Sensors on top of SOSA/SSN and WoT TD with the Semantic Smart Sensor Network (S3N) modular Ontology](https://ssn2018.github.io/submissions/SSN2018_paper_1_submitted.pdf)
    *   [Ontology Modeling with Domain Experts: The GeoVocamp Experience](https://geog.ucsb.edu/~jano/2015-diversitypp-invited.pdf)
    *   [Why the Data Train Needs Semantic Rails](https://www.aaai.org/ojs/index.php/aimagazine/article/view/2560)

**Reusable standards and introductions to relevant technologies**

*   [OGC Environmental Linked Features Interoperability Experiment Engineering Report](https://docs.opengeospatial.org/per/18-097.html)
*   [OGC Testbed-14: Next Generation Web APIs - WFS 3.0 Engineering Report](https://docs.opengeospatial.org/per/18-045.html)
*   [Spatial Data on the Web Best Practices](http://w3c.github.io/sdw/bp/)
*   [A Web API ecosystem through feature-based reuse](https://arxiv.org/abs/1609.07108)
*   [Web of Things (WoT) Thing Description](https://w3c.github.io/wot-thing-description/#thing-description-json-ld-context)
*   [OpenAPI an introduction](https://idratherbewriting.com/learnapidoc/pubapis_swagger_intro.html)
*   [AsyncAPI](www.asyncapi.com)
*   BioAPI: [BrAPI - an Application Programming Interface for Plant Breeding Applications](https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btz190/5418796)
*   [A driving context ontology for making sense of cross-domain driving data](https://www.researchgate.net/publication/331991645_A_driving_context_ontology_for_making_sense_of_cross-domain_driving_data)
*   [VSS ontology is an ontology for describing automotive attributes, branches and signals.](http://automotive.eurecom.fr/vsso)
*   [MAVLINK Common Message Set](https://mavlink.io/en/messages/common.html)

**Current drone data hosting projects:**

*   [USGS](https://www.sciencebase.gov/catalog/item/5bd883c5e4b0b3fc5cea1833)
*   [OpenTopography](http://opentopo.sdsc.edu/dataspace/datasets)
*   [UASPSE](https://digitalag.org/our/)


### Drone Data Design Hackathon Tuesday 16 july 2019

**10:15 - 11:45 (90min) Morning talks:**
   - Intro
   - Current drone data tooling:
      - Joe Adams: USGS drone data technical stack
      - Sudhir Shrestha: Esri drone data technical stack
      - Chris Schnaufer: Cyverse and drone data
      - John Graybeal: Introduction to CEDAR
   
   - Unconference pitches:
      1. **OpenAPI Track - Developing an OpenAPI for Drone Data Capture**: Starting with an [OpenAPI document](https://github.com/opengeospatial/LANDRS/blob/master/DesignDocs/DesignHack1/openapi/nodejs-server/api.yml) largely influenced by the [OGC Coverages OpenAPI](https://github.com/opengeospatial/ogc_api_coverages/blob/master/core/openapi/openapi.yaml) we will determine whether the API meets a predefined, well understood use case before moving on to [writing the service implementation in NodeJS](https://github.com/opengeospatial/LANDRS/tree/master/DesignDocs/DesignHack1/openapi/nodejs-server). Advanced work includes discussing how linked data (SOSA/SSN/SWEET/ENVO) can play a role in linking observation features of interest (the *thing(s)* being sensed), to the platform/sensor/equipment doing the observing (the *thing(s) doing the sensing*).
      2. Building out the vocab and standardised conceptual models we need: creating the required missing models
      3. CEDAR as a tool for schema harmonization: strategising how and what we need to do
      4. Community building & governance: Creating a API features specification through application compentancy questions

**11:45 - 12:45 Lunch (60min)**

**12:45 - 18:00 Unconfernce**

Vote with your feet afternoon
    
   * **Session1: 13:00 - 15:00** (120min)
    (ESIP coffee break 14:15)

   * Report back at 15:00 

   * **Session2: 15:15 - 17:15** (120min) 
    (ESIP coffee break 16:15)

   * Report back at 17:15

**17:15 - 18:00 Closing session**
   * Summary of the day
   * Open discussion 
   * Update on future plans and opportunities (RDA, Student exchange, Deployment hackathons)
