import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import LebronStretch from "../photos/lebron_transparent.png";
import { Font } from '@react-pdf/renderer';
// import MyCustomFont from '../fonts/Anton-Regular.ttf';

Font.register({
  family: 'AntonFamily',
  //   src: MyCustomFont
})

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//     fontFamily: "AntonFamily",
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
//     fontFamily: "AntonFamily",

//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
//     fontFamily: "AntonFamily",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     "left": 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//     fontFamily: "AntonFamily",
//   },
// }),

const PDFFile = () => {

  const pageColors = ['#f6d186', '#f67280', '#c06c84'];

  const pages = [
    // {text: 'First page content goes here...', image: LebronStretch },
    { text: 'Second page content goes here...', image: 'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcwMzExMzEwNTc0MTAxODM5/lebron-dunk.jpg' },
    { text: 'Third page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
  ]

  return (
    <>
      <table style={{ backgroundColor: "#3A7C63", width: '100%' }}>
        <tr>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff" }}>Uniform Household Goods Bill of Lading</header>
          </td>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff" }}>(BOL No. 8889999)</header>
          </td>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff", textAlign: 'right' }}>Page 1 of 6</header>
          </td>
        </tr>
      </table>
      <div style={{ padding: "10px 20px" }}>
        <table style={{ width: '100%' }}>
          <tr>
            <td width="50%" style={{ textAlign: "center" }}>
              <span style={{ color: "#757575", fontWeight: "500" }}>
                <img src="http://allmysons.org/estapp/Images/AMSLogo.jpg" width="250" />
              </span>
            </td>
            <td width="50%">
              <div style={{ color: "#757575", fontWeight: '500', paddingBottom: '4px' }}>Mover (Carrier)</div>
              <div style={{ fontWeight: "500" }}>All My Sons Moving & Storage of Dallas, LLC</div>
              <div>2400 Old Mill Rd., Carrollton, TX 75007</div>
              <div>972-367-1095</div>
              <div style={{ marginTop: "5px" }}><span style={{ fontWeight: "500" }}>Intrastate #:&nbsp,&nbsp,&nbsp,&nbsp,</span>TxDMV No. 000531426B
              </div>
              <div><span style={{ fontWeight: "500" }}>AMS Truck #:&nbsp,&nbsp,&nbsp,&nbsp,</span>DAL 126</div>
            </td>
          </tr>
        </table>
        <div style={{ borderTop: "1px solid #a1a1a1", height: "1px", margin: "6px 0" }}></div>
        <div>
          <table style={{ width: '50%', marginBottom: "13px" }}>
            <tr>
              <td valign="top">
                <table width="100%">
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ color: "#757575", fontWeight: "500" }}>Customer Details</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>AMS Job Identifier (CID):</td>
                    <td style={{ width: '50%', textAlign: "right" }}>1234567</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table style={{ width: "100%" }}>
            <tr>
              <td width="50%" valign="top">
                <table width="100%">
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ color: "#757575", fontWeight: "500" }}>Customer (Shipper)</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Name:</td>
                    <td style={{ width: '50%', textAlign: "right" }}>Test Test</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Origin Address:</td>
                    <td style={{ width: '50%', textAlign: "right" }}>456 Skillman Street<br />
                      Dallas, TX 75007</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Origin Phone:</td>
                    <td style={{ width: '50%', textAlign: "right" }}>(469) 461-5000</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Email:</td>
                    <td style={{ width: '50%', textAlign: "right" }}>ams@allmysons.com</td>
                  </tr>
                </table>
              </td>
              <td width="50%" valign="top">
                <table width="100%">
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ color: "#757575", fontWeight: "500" }}>Consignee:</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Name:</td>
                    <td style={{ width: '50%', textAlign: "right" }}>Test Test</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Destination Address:</td>
                    <td style={{ width: '50%', textAlign: "right" }}>456 Main Street<br />
                      Dallas, TX 75007</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Destination Phone:</td>
                    <td style={{ width: '50%', textAlign: "right" }}>(469) 461-5000</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <div style={{ borderTop: "1px solid #a1a1a1", height: "1px", margin: "6px 0" }}></div>
          <table style={{ width: "100%" }}>
            <tr style={{ verticalAlign: "textTop" }}>
              <td style={{ color: "#757575", fontWeight: "500" }}>Customer (Shipper)</td>
            </tr>
            <tr>
              <td width="50%" valign="top">
                <table width="100%">
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ color: "#757575", fontWeight: "500" }}>Pack, Load / Pick-up Dates</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Actual:</td>
                    <td style={{ width: '50%', textAlign: "right" }}>6/7/2022</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Agreed (if applicable):</td>
                    <td style={{ width: '50%', textAlign: "right" }}>6/7/2022</td>
                  </tr>
                </table>
              </td>
              <td width="50%" valign="top">
                <table width="100%">
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ color: "#757575", fontWeight: "500" }}>Delivery Dates:</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Delivery Date(s):</td>
                    <td style={{ width: '50%', textAlign: "right" }}>6/8/2022</td>
                  </tr>
                  <tr style={{ verticalAlign: "textTop" }}>
                    <td style={{ fontWeight: "500", width: '50%' }}>Agreed (if applicable):</td>
                    <td style={{ width: '50%', textAlign: "right" }}>6/8/2022</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <div style={{ borderTop: "1px solid #a1a1a1", height: "1px", margin: "6px 0" }}></div>

        <div>
          <div style={{ color: "#757575", fontWeight: "500" }}>Digital Signature & Counterparts</div>
          <div style={{ fontSize: "12px" }}>Help us confirm or edit your info</div>
          <table style={{ width: "100%" }}>
            <tr>
              <td width="50%" valign="top">
                <span style={{ fontWeight: "500" }}>Email: </span>someone@gmail.com
              </td>
              <td width="50%" valign="top">
                <span style={{ fontWeight: "500" }}>Phone: </span>(214) 555-5555
              </td>
            </tr>
          </table>
          <div>
            <div style={{ fontSize: "11px" }}>
              Note: This Bill of Lading, the Delivery Acknowledgment Receipt, Estimate, and Itemization of Charges
              to be Executed upon receipt of the household goods services which are the subject of such Bill of
              Lading may be executed in counterparts and delivered by email or PDF (or other electronic
              transmission), each of which shall be legal and binding upon the parties executing each of such
              documents, and all which counterparts shall constitute one and the same instrument and shall have
              the same force and effect as if a paper original of each of such documents had been delivered and
              had been signed using a handwritten signature. The parties executing such documents are consenting
              that a signature by electronic means shall constitute an Electronic Signature to an Electronic
              Record under the Uniform Electronic Transactions Act, to the extent applicable, or under other
              applicable law with respect to the transaction provided for in such documents.
            </div>
            <div>I agree my signature and/or typed name provided here will be legally binding and utilized
              throughout this entire digital document. Genuine signature required.</div>
            <div>
              <table width="100%">
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <table width="100%" id="signature">
                      <tr>
                        <td width="78%" valign="bottom"
                          style={{ fontWeight: "500", verticalAlign: "bottom" }}>
                          <img src="" style={{ height: "80px" }} />
                        </td>
                        <td width="2%"></td>
                        <td width="20%" valign="bottom" style={{ fontWeight: "500", fontSize: "13px" }}>
                          19-06-2023
                        </td>
                      </tr>
                      <tr>
                        <td style={{ borderTop: "1px solid #000000" }}>Jane Haywood, Shipper
                          Signature<br />Signature</td>
                        <td></td>
                        <td style={{ borderTop: "1px solid #000000" }} valign="top">
                          Date</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <table style={{ backgroundColor: "#3A7C63", width: "100%" }}>
        <tr>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff" }}>Uniform Household Goods Bill of Lading</header>
          </td>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff" }}>(BOL No. 8889999)</header>
          </td>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff", textAlign: "right" }}>Page 2 of 6</header>
          </td>
        </tr>
      </table>
      <div style={{ padding: "10px 20px" }}>
        <div>Valuation Declaration & Selection</div>
        <div>please see & select valuation options on the addendum to uniform household goods bill of lading</div>
        <div>Declaration of Article(s) of Extraordinary (Unusual Value)</div>
        <div>I acknowledge that I have prepared and retained a copy of the “Inventory of Items Valued in Excess of $100
          Per Pound Per Article” that are included in my shipment and that I have given a copy of this inventory to
          the mover's representative. I also acknowledge that the mover's liability for loss of or damage to any
          articles valued in excess of $100 per pound will be limited to $100 per pound for each pound of such lost or
          damaged article(s) (based on actual weight), not to exceed the declared value of the entire shipment, unless
          I have specifically identified such articles for which a claim for loss or damage may be made, on the
          attached inventory.</div>
        <div>I accept the Declaration of Article(s) of Extraordinary (Unusual) Value</div>
        <div>
          <table width="100%">
            <tr>
              <td style={{ textAlign: "left" }}>
                <table width="100%" id="signature">
                  <tr>
                    <td width="78%" valign="bottom" style={{ fontWeight: "500", verticalAlign: "bottom" }}>
                      <img src="" style={{ height: "80px" }} />
                    </td>
                    <td width="2%"></td>
                    <td width="20%" valign="bottom" style={{ fontWeight: "500", fontSize: "13px" }}>
                      19-06-2023
                    </td>
                  </tr>
                  <tr>
                    <td style={{ borderTop: "1px solid #000000" }}>Jane Haywood, Shipper
                      Signature<br />Signature</td>
                    <td></td>
                    <td style={{ borderTop: "1px solid #000000" }} valign="top">
                      Date</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <div style={{ borderTop: "1px solid #a1a1a1", height: "1px", margin: "6px 0" }}></div>
        <div>
          <table style={{ width: "100%" }}>
            <tr>
              <td>
                <span style={{ color: "#000000", margin: "10px 0" }}>Accepted Methods Of COD Payments</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src="data:image/png,base64,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" />
              </td>
            </tr>
            <tr>
              <td>Cash, Credit, and Debit cards only. No Checks accepted! Thank you! Payments required prior to
                unload. We can't transport the following items: Weapons & ammunition, cash, hazardous chemicals, live
                animals, flammables, pressurized fuel/gas, waste, food/perishables, live plants. (This is a
                partial list, call Carrier for additional items.)</td>
            </tr>
            <tr>
              <td>Shipper Agrees - Carrier is not responsible for, will not transport any item defined as
                “Hazardous”, or “Illegal” by any local, state or federal law or regulation.</td>
            </tr>
          </table>
        </div>
        <div style={{ borderTop: "1px solid #a1a1a1", height: "1px", margin: "6px 0" }}></div>
        <div style={{ color: "#757575" }}>Charges & Services (Hourly Basis - if applicable)</div>
        <table style={{ width: "100%" }}>
          <tr>
            <td width="50%" valign="top">
              <table width="100%">
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Start time:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>8:00 am</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Travel Charge:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$189.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Miles:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>50 miles</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Number of Men:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>3</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Overtime Charge:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$250.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Fuel Surcharge:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$400.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}></td>
                  <td style={{ width: '50%', textAlign: "right", color: "#757575" }}>12% of total</td>
                </tr>

              </table>
            </td>
            <td width="50%" valign="top">
              <table width="100%">
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Stop Time:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>2:00pm</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Labor Charge:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$500</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Hourly Rate:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$189.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Valuation Charge:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$500.00</td>
                </tr>
                <tr>
                  <td style={{ width: '50%', textAlign: "right", color: "#757575" }}>Full Value Protection</td>
                  <td></td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Specialty/Bulky Items:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$150.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Overnight Storage (if applicable):</td>
                  <td style={{ width: '50%', textAlign: "right" }}>0.00</td>
                </tr>

              </table>
            </td>
          </tr>
          <tr>
            <td width="50%" valign="top">
              <table>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Total Hourly Charges:</td>
                  <td style={{ width: '50%', textAlign: "right", color: "#757575" }}></td>
                </tr>
              </table>
            </td>
            <td width="50%" valign="top">
              <table>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>$2697</td>
                  <td style={{ width: '50%', textAlign: "right" }}></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      <table style={{ backgroundColor: "#3A7C63", width: "100%" }}>
        <tr>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff" }}>Uniform Household Goods Bill of Lading</header>
          </td>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff" }}>(BOL No. 8889999)</header>
          </td>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff", textAlign: "right" }}>Page 3 of 6</header>
          </td>
        </tr>
      </table>
      <div style={{ padding: "10px 20px" }}>
        <div style={{ color: "#757575" }}>Charges & Services (Weight/Mileage Basis - if applicable)</div>
        <table style={{ width: "100%" }}>
          <tr>
            <td width="50%" valign="top">
              <table width="100%">
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Net Weight of Shipment:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>1,200 lbs.</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Rate per 100 lbs:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$50.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Valuation Charge:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$500.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%', color: "#757575" }}>Full Value Protection</td>
                  <td style={{ width: '50%', textAlign: "right" }}></td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Container Charge</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$600.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Overnight storage</td>
                  <td style={{ width: '50%', textAlign: "right", color: "#757575" }}>3% of total</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Discount:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$50 Off Coupon</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%', fontStyle: "italic" }}>(if applicable)</td>
                  <td style={{ width: '50%', textAlign: "right" }}></td>
                </tr>
              </table>
            </td>
            <td width="50%" valign="top">
              <table width="100%">
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Total Mileage:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>66 miles</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Total W/M Charge:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$600.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Additional Charges:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$250.00</td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Warehouse handling</td>
                  <td style={{ width: '50%', textAlign: "right" }}></td>
                </tr>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td style={{ fontWeight: "500", width: '50%' }}>Fuel Surcharge:</td>
                  <td style={{ width: '50%', textAlign: "right" }}>$400.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ width: '50%', textAlign: "right", color: "#757575" }}>12% of total</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td width="50%" valign="top">
              <table>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td colspan="1" style={{ fontWeight: "500", width: '50%' }}>Total Weight/Mileage Charges:</td>

                </tr>
              </table>
            </td>
            <td width="50%" valign="top">
              <table>
                <tr style={{ verticalAlign: "textTop" }}>
                  <td colspan="1" style={{ fontWeight: "500", width: '50%' }}>$3100</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div style={{ borderTop: "1px solid #a1a1a1", height: "1px", margin: "6px 0" }}></div>
        <table width="100%">
          <tr>
            <td style={{ width: '50%', textAlign: "right", color: "#757575" }}>Containers / Materials</td>
          </tr>
          <tr>
            <td width="50%" valign="top">
              <table width="100%">
                <tr style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}>
                  <td>Carton 1.5 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>2</td>
                </tr>
                <tr>
                  <td>Carton 3 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>1</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}>
                  <td>Carton 4.5 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>3</td>
                </tr>
                <tr>
                  <td>Carton 6 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>5</td>
                </tr>
              </table>
            </td>
            <td width="50%" valign="top">
              <table width="100%">
                <tr style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}>
                  <td>Carton 1.5 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>2</td>
                </tr>
                <tr>
                  <td>Carton 3 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>1</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}>
                  <td>Carton 4.5 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>3</td>
                </tr>
                <tr>
                  <td>Carton 6 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>5</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div style={{ borderTop: "1px solid #a1a1a1", height: "1px", margin: "6px 0" }}></div>
        <table width="100%">
          <tr>
            <td style={{ width: '50%', textAlign: "right", color: "#757575" }}>Specialty / Bulky Items</td>
          </tr>
          <tr>
            <td width="50%" valign="top">
              <table width="100%">
                <tr style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}>
                  <td>Carton 1.5 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>2</td>
                </tr>
                <tr>
                  <td>Carton 3 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>1</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}>
                  <td>Carton 4.5 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>3</td>
                </tr>
                <tr>
                  <td>Carton 6 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>5</td>
                </tr>
              </table>
            </td>
            <td width="50%" valign="top">
              <table width="100%">
                <tr style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}>
                  <td>Carton 1.5 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>2</td>
                </tr>
                <tr>
                  <td>Carton 3 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>1</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(238, 238, 238, 1)" }}>
                  <td>Carton 4.5 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>3</td>
                </tr>
                <tr>
                  <td>Carton 6 cu. ft.</td>
                  <td style={{ textAlign: "right" }}>5</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div style={{ borderTop: "1px solid #a1a1a1", height: "1px", margin: "6px 0" }}></div>
        <table>
          <tr>
            <td style={{ color: "#757575" }}>
              Estimate Type: Binding
            </td>
          </tr>
        </table>
        <div>
          <p>
            This estimate guarantees the total cost of the move based upon the quantities, conditions, and services
            defined by your binding estimate. If you tender additional household goods or require additional
            services not identified in the binding estimate, the Carrier can either:
          </p>
          <p>
            <ol style={{ paddingLeft: "14px", fontWeight: "500" }}>
              <li>Negotiate a new binding estimate, accurately listing, in detail, the additional services required or
                requested.</li>
              <li>
                Abide by your original binding estimate
              </li>
              <li>
                Potentially Deny Service
              </li>

            </ol>
          </p>
        </div>

        <div>
          <table width="100%">
            <tr>
              <td style={{ textAlign: "left" }}>
                <table width="100%" id="signature">
                  <tr>
                    <td width="78%" valign="bottom" style={{ fontWeight: "500", verticalAlign: "bottom" }}>
                      <img src="" style={{ height: "80px" }} />
                    </td>
                    <td width="2%"></td>
                    <td width="20%" valign="bottom" style={{ fontWeight: "500", fontSize: "13px" }}>
                      19-06-2023
                    </td>
                  </tr>
                  <tr>
                    <td style={{ borderTop: "1px solid #000000" }}>Jane Haywood, Shipper
                      Signature<br />Signature</td>
                    <td></td>
                    <td style={{ borderTop: "1px solid #000000" }} valign="top">
                      Date</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <table style={{ backgroundColor: "#3A7C63", width: "100%" }}>
        <tr>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff" }}>Uniform Household Goods Bill of Lading</header>
          </td>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff" }}>(BOL No. 8889999)</header>
          </td>
          <td style={{ padding: "6px 15px" }}>
            <header style={{ color: "#ffffff", textAlign: "right" }}>Page 4 of 6</header>
          </td>
        </tr>
      </table>
      <div style={{ padding: "10px 20px" }}>
        <div style={{ margin: "10px 0" }}>
          <p>
            <b>This cost estimate includes Full Value Replacement Value Protection based on a valuation
              amount
              equal to $6.00
              multiplied by the weight (in pounds) of your shipment, subject to a minimum valuation amount
              of
              $6,000.00.</b> If any
            article is lost, destroyed or damaged while in your mover's custody, your mover will, at its
            option,
            either 1 repair
            the article to the extent necessary to restore it to the same condition as when it was received
            by
            your mover, or pay
            you for the cost of such repairs, or 2 replace the article with an article of like kind and
            quality, or 3 pay you for
            the cost of such a replacement.
          </p>
          <p>
            <b>The Default Value of my Shipment is </b> and the cost of Full Value
            Protection based on
            the value I have declared
            will be included in my total charges. <b><i style={{ color: "rgba(244, 67, 54, 1)" }}>(Default Value
              =
              $6.00
              multiplied by the weight (in pounds) of your shipment & $0
              Deductible)</i></b>
          </p>
        </div>
      </div>

    </>
  );
};

export default PDFFile;