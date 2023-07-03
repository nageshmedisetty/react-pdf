import React from 'react'
import { Text, View, Link, Image } from '@react-pdf/renderer';
import signature from '../assets/signature.png'
import Header from './Header';

const TermsPage = () => {
    return (
        <View style={{ padding: 0, }}>
            <Header
                title="Uniform Household Goods Bill of Lading"
                bolText={"(BOL No. 8889999)"}
                pageText={"Page 4 of 6"} />
            <View style={{ padding: 12, }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Contract Terms & Conditions</Text>
                </View>
                <View style={{
                    display: 'flex', color: '#000',
                    justifyContent: 'space-between', gap: 20, padding: 2
                }}>
                    <Text>This Contract is subject to all rules, regulations, rates and charges in its Tariff on file with the Texas Departmen t of Motor Vehicles (TxDMV) including, but not limited to, the following terms and conditions:</Text>
                    <Text>SECTION 1 : The Carrier shall be liable for physical loss of or damage to any articles from external cause while being carried or held in storager-in-transit EXCEPT loss, damage, or delay caused by or resulting:</Text>
                    <Text style={{ padding:0, marginTop:-10}}>(a) From an act, omission, or order of shipper;</Text>
                    <Text style={{ padding:0, marginTop:-10}}>(b) From defect or inherent voice of th article, including suscerptibility to damage because of atmospheric conditions such as temperature and humidity or changes there in;</Text>
                    <Text style={{ padding:0, marginTop:-10}}>(c) From (1) hostile or warlike action in time of peace or war, including action in hindering, combating, or defending against an actual, impending or expected attack (A) by any government or sovereign power, or by any authority maintaining or using military, naval or air forces; or (B) by military, naval or air forces; or (C) by an agent of any government, power, authority or forces; or (2) any weapon of war employing atomic fission or radioactive force whether in time of peace or war; (3) insurrection, rebellion, revolution, civil way, usurped power, or action taken by governmental authority in hindering, combating, or defending against such an occurrence; (4) seizure or destruction wider quarantine or customs regulations; (5) confiscation by order of any government or public authority; or (6) risks of contraband or illegal transportation or trade; </Text>
                    <Text style={{ padding:0, marginTop:-10}}>(d) From strikes, lockouts, labor disturbances, riots, civil commotions, or the acts of any person or persons taking part in any such occurrence or disorder, and </Text>
                    <Text style={{ padding:0, marginTop:-10}}>(e) From Acts of God. </Text>
                    <Text style={{ padding:0, marginTop:-10}}>SUBJECT, in addition to the foregoing, the following limitations apply on the carrier’s liability: The carrier’s maximum liability shall be one of the following:</Text>
                    <Text style={{ padding:0, marginTop:-10}}>(1) The actual loss or damage not exceeding sixty (60) cents per pound of the weight of any lost or damaged article when the shipper has released the shipment to carrier, in writing, with liability limited to sixty (60) cents per pound per article; or</Text>
                    <Text style={{ padding:0, marginTop:-10}}>(2) Increased Valuation of the lost or damaged item beyond repair provided that the shipper elects such valuation coverage and agrees to pay applicable rates or the option of satisfactory repairs. FURTHER, a shipper’s failure to notify the carrier in writing that an article having a value that exceeds $2,000 or $100 per pound will be included in the shipment will restrict the carrier’s maximum liability to $100 per pound for each pound of any lost or damaged article (based on actual article weight), not to exceed the declared value of the entire shipment.</Text>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 2: The carrier shall not be liable for delay caused by highway obstruction, or faulty or impassable highways, or lack of capacity of any highway, bridge or ferry, or caused by breakdown or mechanical defect of vehicles or equipment, or from any cause other than negligence of the carrier; nor shall the carrier be bound to transport by any particular schedule, means, vehicle, or otherwise than with reasonable dispatch. Every carrier shall have the right in case of physical necessity to forward said property by any carrier or route between the point of shipment and the point of destination. </Text>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 3: Shipper’s or consignor’s and/or consignee’s liability shall include the following: </Text>
                    <Text style={{ padding:0, marginTop:-10}}>(a) The shipper (individual or commercial) and consignor upon tender of the shipment to carrier, and the consignee, upon acceptance of delivery of shipment from carrier, shall be liable, jointly and severally, for all unpaid charges payable on account of a shipment in accordance with applicable tariffs including, but not limited to sums advanced or disbursed by a carrier on account of such shipment. the extension of credit to either shipper or consignee for such unpaid charges shall not thereby discharge the obligation of the other party to pay such charges in the event the party to whom credit has been extended shall fail to pay such charges. </Text>
                    <Text style={{ padding:0, marginTop:-10}}>(b) Shipper and/or consignor acknowledge that no explosives and or dangerous articles or goods shall be contained in shipment. However, shipper and/or consignee shall indemnify carrier against any loss or damage caused by the negligent or intentional inclusion of explosives or dangerous goods therein. </Text>
                    <Text style={{ padding:0, marginTop:-10}}></Text>
                </View>
            </View>
        </View>
    )
}

export default TermsPage