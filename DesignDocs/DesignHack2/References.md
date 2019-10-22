# References for Design Hack #2 Topics

## Topic #1 Ontology Development

The proposed topic for the ontology portion of this hackathon will focus on harmonization of SOSA/SSN/SSN-EXT, OGC Moving Features JSON specification possibily leveraging the Semantic Trajectory Ontology Design Pattern as a guide. Relevant resources for this topic are:

* [W3C/OGC Semantic Sensor Network Ontology \(SOSA/SSN\)](https://www.w3.org/TR/vocab-ssn/)  
 - [The SOSA/SSN Ontology - Semantic Web Journal](http://www.semantic-web-journal.net/system/files/swj1804.pdf)
* [Extensions to the Semantic Sensor Network Ontology](https://w3c.github.io/sdw/proposals/ssn-extensions/)
* [W3C/OGC Moving Feature JSON Proposed Standard](https://ksookim.github.io/mf-json/)
    - [Github repo with samples](https://github.com/opengeospatial/mf-json)
* [The Semantic Trajectory Ontology Design Pattern](http://ontologydesignpatterns.org/wiki/Submissions:Trajectory)
 - [A Geo-Ontology Desing Pattern for Semantic Trajectories](https://www.geog.ucsb.edu/~jano/semantic_trajectories.pdf)
* [Drone Ontology From Hackathon #1](https://github.com/opengeospatial/LANDRS/blob/master/DesignDocs/DesignHack1/ontology/droneSemanticSketch-copy.png)

### Use of Semantic Trajectory in Vehicle Ontology
* [Generating Semantic Trajectories Using a Car Signal Ontology](http://www.eurecom.fr/en/publication/5493/download/data-publi-5493.pdf)
* [Reuses STEP Ontology](https://talespaiva.github.io/step/)
* [FLask App Implimentation](https://github.com/klotzbenjamin/vss-ontology/tree/master/trajectory-annotation)

## Topic #2 Linked-Data Integration with OGC WFS 3.0 proposed standard
This topic will investigate integration of observation collection/observation to an OGC WFS 3.0 API using linked data principles and JSON-LD content types. Relevant Resources for this topic are: 

    
* [OGC WFS 3.0 Core](https://github.com/opengeospatial/ogcapi-features)
    - [OGC API - Features - Part 1: Core](http://docs.opengeospatial.org/is/17-069r3/17-069r3.html)
* [Pygeoapi WFS 3.0 Demo Server](https://github.com/geopython/pygeoapi)
    - [JSON-LD Version of Pygeoapi](https://github.com/spatialdaotearoa/pygeoapi/tree/ld-json)
* [OGC Second Environmental Linked Features Interoperability Experiment](https://github.com/opengeospatial/selfie)
    - [JSON-LD Contexts](https://github.com/opengeospatial/SELFIE/tree/master/docs/contexts)
    - [Examples](https://github.com/opengeospatial/SELFIE/tree/master/docs/examples)
* [W3C JSON-LD 1.1](https://w3c.github.io/json-ld-syntax/)
* [Hydra Core Vocabulary](https://www.hydra-cg.com/spec/latest/core/)
* [W3C Content Negotiation by Profile](https://www.w3.org/TR/dx-prof-conneg/)

## Topic #3 Creation of Python Utility function for SOSA:Observation and SOSA:ObservationCollection
 The aim of this topic is the creation of some python utilities that can manage observations/observation collections in python and serialize the collections to JSON-LD. Relevant Resources for this topic are:

* [Python RDFLIB](https://github.com/RDFLib/rdflib)
* [Python PYLD JSON-LD Library](https://github.com/digitalbazaar/pyld)
* [RDFLIB and PYLD Connector](https://github.com/zimeon/rdflib-pyld-compat)


    
