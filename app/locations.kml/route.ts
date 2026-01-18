import { NextResponse } from "next/server";

// Static KML data for Google Business and local SEO
const kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Best Cleaners & Laundry Locations</name>
    <description>Best Cleaners & Laundry - Savannah's trusted dry cleaning service since 1910</description>
    
    <Style id="bestCleanersStyle">
      <IconStyle>
        <color>ff1b12b1</color>
        <scale>1.2</scale>
      </IconStyle>
    </Style>
    
    <Placemark>
      <name>Best Cleaners - Waters Avenue</name>
      <description><![CDATA[
        <strong>Best Cleaners & Laundry</strong><br/>
        Waters Avenue Location<br/>
        Savannah, GA<br/><br/>
        Professional dry cleaning and laundry services since 1910.
      ]]></description>
      <styleUrl>#bestCleanersStyle</styleUrl>
      <Point>
        <coordinates>-81.0912,32.0286,0</coordinates>
      </Point>
    </Placemark>
    
    <Placemark>
      <name>Best Cleaners - Abercorn Street</name>
      <description><![CDATA[
        <strong>Best Cleaners & Laundry</strong><br/>
        Abercorn Street Location<br/>
        Savannah, GA<br/><br/>
        Professional dry cleaning and laundry services since 1910.
      ]]></description>
      <styleUrl>#bestCleanersStyle</styleUrl>
      <Point>
        <coordinates>-81.0998,32.0157,0</coordinates>
      </Point>
    </Placemark>
  </Document>
</kml>`;

export async function GET() {
  return new NextResponse(kmlContent, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.google-earth.kml+xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
