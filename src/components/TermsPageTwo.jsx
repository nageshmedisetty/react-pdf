import React from 'react'
import { Text, View, Link, Image } from '@react-pdf/renderer';
import signature from '../assets/signature.png'
import Header from './Header';

const TermsPageTwo = () => {
    return (
        <View style={{ padding: 0, }}>
            <Header
                title="Uniform Household Goods Bill of Lading"
                bolText={"(BOL No. 8889999)"}
                pageText={"Page 5 of 6"} />
            <View style={{ padding: 12, }}>
                <View style={{
                    display: 'flex', color: '#000',
                    justifyContent: 'space-between', gap: 20, padding: 2
                }}>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 4: If for any reason other than the fault of carrier, delivery cannot be made at address shown on the face hereof, or at any changed address of which carrier has been notified, carrier, at its option, may cause articles contained in shipment to be stored in a warehouse selected by it at the point of delivery or at other available points, and were held without liability on the part of the carrier, at the cost of the owner, and subject to a lien for all accrued tariff and other lawful charges.</Text>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 5: If shipment is refused by consignee at destination, or if shipper, consignee or owner of property fails to receive or claim it within fifteen (15) days after written notice by United States mall addressed to shipper and consignee at post office addresses shown on face hereof, or if shipper fails or refuses to pay applicable charges in accordance with carrier’s applicable tariff, carrier may sell the property at its option, either (a) upon notice in the manner authorized by law, or (b) at public auction to highest bidder for cash at public sale to be held at a time and place named by carrier, thirty (30) days’ notice of which sale shall have been given in writing to shipper and consignee, and there shall have been published at least once a week for two consecutive weeks in a newspaper of general circulation at or near the place of sale, a notice thereof containing a description of the property as described in the Bill of Lading, and the names of the consignor and consignee. The proceeds of any sale shall be applied toward payment of lawful charges applicable to shipment and toward expenses of notice, advertising and sale, and of storing caring for and maintaining property prior to sale, and the balance, if any, shall be paid to owner of property; PROVIDED that any perishable articles contained in said shipment may be sold at public or private sale without notices, if, in the opinion of carrier, such action, is necessary to prevent deterioration or further deterioration.</Text>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 6: As condition precedent to recovery, a claim for any loss or damage, injury or delay, must be filed in writing with carrier within ninety (90) days  after delivery to consignee as shown on face hereof, or in case of failure to make delivery, then within ninety (90) days after a reasonable time for delivery has elapsed; and suit must be instituted against carrier within two (2) years and one (1) day from the date when notice in writing is given by carrier to the claimant that carrier has disallowed the claim or any part or parts thereof specified in the notice. Where a claim is not filed or suit is not instituted thereon in accordance with the foregoing provisions, carrier shall not be liable and such claim will not be paid.</Text>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 7: overtime charges can be assessed on any shipper requested service beyond regular hours. Delivery will be tendered during regular hours of service unless agreed otherwise by carrier and shipper.</Text>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 8: Carrier cannot be held responsible for items left at residence after loading. It is your responsibility to make sure nothing is left behind. Please make sure you check closets, cabinets, drawers, attics, neighbor's residence, basement, and outside areas prior to departure.</Text>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 9: Carrier advises you, the shipper, we will not transport any alcohol/liquor, firearms, ammunition, anything flammable and/or combustible, or anything else listed on page 2 in accordance with applicable laws and to prevent damage to all property. Failure to make carrier aware that these items are included in said Shipment result in the denial of a claim. </Text>
                    <Text style={{ padding:0, marginTop:-10}}>SECTION 10: Carrier advises you the shipper to disconnect and reconnect any and all of your appliances, fixtures and or electronics. The carrier is not aware, nor will it warrant the mechanical operating condition of these items. To protect your belongings and property, we require you to disconnect and reconnect all appliances & electronics. In the event you request a Carriers employee to assist with any disconnection, connection, or reconnection, you hereby assume any and all liability as related to such without limitations and including any ancillary potential damages. Shipper further releases Carrier and all its personnel/affiliates, from any liability, claims and or damages whether indirect, special, incidental, consequential, (including loss of profits or business) and or punitive, foreseeable, or unforeseeable.</Text>
                    <Text style={{ padding:0, marginTop:130}}></Text>
                </View>
            </View>
        </View>
    )
}

export default TermsPageTwo