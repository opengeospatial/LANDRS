#Representing Geo tagged data

1. [W3C Basic Geo Vocabulary](https://www.w3.org/2003/01/geo/) using WGS84 as a reference
  * RDF vocab, also used in XML
  * Extensible to use in combination with other vocabularies
  * Only represents a point
```RDF
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#">
  <geo:Point>
    <geo:lat>55.701</geo:lat>
    <geo:long>12.552</geo:long>
  </geo:Point>
</rdf:RDF>
```
  * Limitations:
    * Support for other Coordinate Reference Systems
    * Other geometries than point 
2. [NatGEo extension](http://geovocab.org/) to (1)
  * Extended to encode a geometrical structure in RDF. Eg: poloygon/line/    
  * Also includes a spatial ontology for describing topological relations between features eg: connects with, tangential, overlaps...

3. [GeoSPARQL](http://geovocab.org/)
  * Geometry stored in RDF literals as WKT or GML (human readable technically but not usefully)
  * Pros:
    - Separates places from geometric representation
    - Joind CRS, Lat, Long, and Geometry into a single RDF literal
  * Cons:
    - To put geometric binary data into GeoSPARQL-enabled triplestores for spatial indexing you create copies of the geomtries leading to ~2.5x increase in quantity

4. [RDF Literals]()

* Well Known Text: markup for vector geometry on maps.  There's also Well Known Binary
* Geography Markup Language: XML for describing features

